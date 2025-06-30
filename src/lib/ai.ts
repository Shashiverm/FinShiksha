// Enhanced AI library with better error handling and fallbacks
const HUGGINGFACE_API_KEY = import.meta.env.VITE_HUGGINGFACE_API_KEY || ''

export interface AIResponse {
  generated_text?: string
  error?: string
}

// Financial context for better AI responses
const FINANCIAL_CONTEXT = `You are a helpful financial advisor for Indian users. Provide practical, actionable advice about:
- Investment strategies (SIP, mutual funds, stocks)
- Tax planning (80C, ELSS, PPF)
- Government schemes (PM-KISAN, PMMY, APY)
- Digital payment security
- Budget planning and emergency funds
Keep responses concise, practical, and relevant to Indian financial markets.`

export const generateAIResponse = async (input: string): Promise<string> => {
  // Fallback responses for common financial queries
  const fallbackResponses: Record<string, string> = {
    'sip': 'SIP (Systematic Investment Plan) is a great way to invest regularly. Start with ₹1,000-5,000 monthly in diversified equity mutual funds. Benefits include rupee cost averaging and disciplined investing.',
    'investment': 'For beginners, consider starting with large-cap mutual funds or index funds. Diversify across equity (60-70%) and debt (30-40%) based on your risk tolerance and age.',
    'tax': 'Maximize tax savings under Section 80C with ELSS mutual funds (3-year lock-in), PPF (15-year), or NSC (5-year). ELSS offers best growth potential among 80C options.',
    'emergency': 'Build an emergency fund covering 6 months of expenses. Keep it in liquid funds or high-yield savings accounts for easy access during emergencies.',
    'budget': 'Follow the 50-30-20 rule: 50% for needs, 30% for wants, 20% for savings and investments. Track expenses using apps or spreadsheets.',
    'insurance': 'Get term life insurance (10-15x annual income) and health insurance (₹5-10 lakhs minimum). Avoid mixing insurance with investment products.',
    'default': 'I can help you with investment planning, tax saving strategies, SIP calculations, emergency fund planning, and understanding government financial schemes. What specific area would you like guidance on?'
  }

  // Check for keywords in input to provide relevant fallback
  const inputLower = input.toLowerCase()
  let fallbackKey = 'default'
  
  for (const [key, response] of Object.entries(fallbackResponses)) {
    if (inputLower.includes(key)) {
      fallbackKey = key
      break
    }
  }

  if (!HUGGINGFACE_API_KEY) {
    return fallbackResponses[fallbackKey] || fallbackResponses.default
  }

  try {
    // Enhanced prompt with financial context
    const enhancedPrompt = `${FINANCIAL_CONTEXT}\n\nUser question: ${input}\n\nResponse:`

    const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
      headers: {
        Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        inputs: enhancedPrompt,
        parameters: {
          max_length: 150,
          temperature: 0.7,
          do_sample: true,
          pad_token_id: 50256,
          return_full_text: false
        },
        options: {
          wait_for_model: true,
          use_cache: false
        }
      }),
    })

    if (!response.ok) {
      console.warn(`AI API returned ${response.status}, using fallback`)
      return fallbackResponses[fallbackKey] || fallbackResponses.default
    }

    const result = await response.json()
    
    if (result.error) {
      console.warn('AI API error:', result.error)
      return fallbackResponses[fallbackKey] || fallbackResponses.default
    }

    const generatedText = result[0]?.generated_text || result.generated_text || ''
    
    if (!generatedText) {
      return fallbackResponses[fallbackKey] || fallbackResponses.default
    }

    // Clean and validate response
    const cleanResponse = generatedText
      .replace(enhancedPrompt, '')
      .replace(/^Response:\s*/, '')
      .trim()
    
    // Return fallback if response is too short or invalid
    if (cleanResponse.length < 10) {
      return fallbackResponses[fallbackKey] || fallbackResponses.default
    }
    
    return cleanResponse
  } catch (error) {
    console.warn('AI API Error:', error)
    return fallbackResponses[fallbackKey] || fallbackResponses.default
  }
}

export const generatePersonalizedTips = async (userLevel: number, recentActivity: string[]): Promise<string[]> => {
  // Enhanced personalized tips based on user level and activity
  const tipsByLevel: Record<number, string[]> = {
    1: [
      "Start your financial journey with a savings account that offers good interest rates",
      "Learn about the power of compound interest - even ₹500/month can grow significantly",
      "Understand basic financial terms like EMI, SIP, and mutual funds",
      "Set up automatic transfers to build a savings habit"
    ],
    2: [
      "Consider starting a SIP of ₹1,000-2,000 in a diversified equity mutual fund",
      "Build an emergency fund covering 3-6 months of expenses",
      "Explore tax-saving options under Section 80C like ELSS funds",
      "Learn about different types of mutual funds and their risk levels"
    ],
    3: [
      "Increase your SIP amount by 10-15% annually to beat inflation",
      "Diversify your portfolio across large-cap, mid-cap, and debt funds",
      "Consider investing in PPF for long-term tax-free returns",
      "Review and rebalance your investment portfolio quarterly"
    ],
    4: [
      "Explore international diversification through global mutual funds",
      "Consider direct equity investments after thorough research",
      "Plan for specific goals like home purchase or children's education",
      "Optimize your tax strategy with advanced planning techniques"
    ],
    5: [
      "Consider alternative investments like REITs or gold ETFs",
      "Plan your retirement corpus and withdrawal strategy",
      "Explore estate planning and wealth transfer strategies",
      "Mentor others in their financial literacy journey"
    ]
  }

  // Activity-based tips
  const activityTips: Record<string, string[]> = {
    'SIP Calculator': [
      "Great job using the SIP calculator! Consider increasing your SIP by 10% annually",
      "Try calculating different scenarios with varying time horizons",
      "Remember: consistency is more important than timing the market"
    ],
    'Investment Quiz': [
      "Keep testing your knowledge with regular quizzes",
      "Apply what you've learned by starting actual investments",
      "Share your knowledge with family and friends"
    ],
    'Emergency Fund': [
      "Excellent focus on emergency planning! Keep this fund separate from investments",
      "Consider liquid funds for better returns than savings accounts",
      "Review your emergency fund size annually as expenses change"
    ]
  }

  try {
    const levelTips = tipsByLevel[Math.min(userLevel, 5)] || tipsByLevel[1]
    const relevantActivityTips = recentActivity.flatMap(activity => 
      activityTips[activity] || []
    )

    // Combine and randomize tips
    const allTips = [...levelTips, ...relevantActivityTips]
    const shuffled = allTips.sort(() => 0.5 - Math.random())
    
    return shuffled.slice(0, 3) // Return 3 random tips
  } catch (error) {
    console.warn('Error generating personalized tips:', error)
    return [
      "Start with small, regular investments to build wealth over time",
      "Emergency funds are crucial - aim for 6 months of expenses",
      "Diversification is key to managing investment risk"
    ]
  }
}