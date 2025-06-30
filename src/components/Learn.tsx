import React, { useState } from 'react';
import { BookOpen, Clock, Star, Users, ArrowRight, CheckCircle, Play, Filter, Search } from 'lucide-react';
import LearningModule from './Learn/LearningModule';

const Learn = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'basics', name: 'Financial Basics' },
    { id: 'investments', name: 'Investments' },
    { id: 'digital', name: 'Digital Finance' },
    { id: 'planning', name: 'Financial Planning' },
    { id: 'schemes', name: 'Government Schemes' },
    { id: 'insurance', name: 'Insurance' },
    { id: 'taxation', name: 'Taxation' }
  ];

  const modules = [
    {
      id: 1,
      title: 'Understanding Money & Inflation',
      description: 'Learn how inflation affects your purchasing power and savings in the Indian context',
      category: 'basics',
      duration: '25 min',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 2340,
      completed: true,
      progress: 100,
      topics: ['Inflation Basics', 'RBI Role', 'Price Index', 'Real vs Nominal Returns'],
      content: {
        introduction: 'Understanding money and inflation is crucial for making informed financial decisions.',
        sections: [
          {
            title: 'What is Money?',
            content: `Money is a medium of exchange that facilitates trade and commerce. In India, the Reserve Bank of India (RBI) is responsible for issuing currency and managing monetary policy.

Key functions of money:
• Medium of Exchange: Money eliminates the need for barter system
• Store of Value: Money can be saved for future use
• Unit of Account: Money provides a common measure of value
• Standard of Deferred Payment: Money enables credit transactions

The Indian rupee (₹) is our national currency, and understanding its value is essential for financial planning.`,
            examples: [
              'If you have ₹1,000 today, you can buy certain goods. Due to inflation, the same ₹1,000 might buy fewer goods next year.',
              'A movie ticket that cost ₹50 in 2000 might cost ₹200 today due to inflation over 20+ years.'
            ],
            keyPoints: [
              'Money serves four primary functions in the economy',
              'The RBI controls money supply in India',
              'Understanding money helps in better financial planning'
            ]
          },
          {
            title: 'Understanding Inflation',
            content: `Inflation is the rate at which the general level of prices for goods and services rises, eroding purchasing power. In India, inflation is measured using various indices like CPI (Consumer Price Index) and WPI (Wholesale Price Index).

Types of Inflation:
• Demand-Pull Inflation: When demand exceeds supply
• Cost-Push Inflation: When production costs increase
• Built-in Inflation: When people expect prices to rise

The RBI targets inflation around 4% with a tolerance band of +/- 2%. This means they aim to keep inflation between 2-6%.`,
            examples: [
              'If inflation is 6% per year, something that costs ₹100 today will cost ₹106 next year.',
              'Food inflation in India often spikes during monsoon failures, affecting vegetable and grain prices.'
            ],
            keyPoints: [
              'Inflation reduces the purchasing power of money over time',
              'RBI uses monetary policy tools to control inflation',
              'Understanding inflation helps in investment planning'
            ]
          },
          {
            title: 'Impact on Savings and Investments',
            content: `Inflation significantly impacts your savings and investment decisions. If your savings account gives 3% interest but inflation is 6%, you're actually losing 3% purchasing power annually.

Real Return = Nominal Return - Inflation Rate

This is why it's important to invest in assets that can beat inflation over the long term.

Investment options that typically beat inflation:
• Equity Mutual Funds (historical average: 12-15% annually)
• Real Estate (varies by location and time)
• Gold (hedge against inflation)
• TIPS (Treasury Inflation-Protected Securities)`,
            examples: [
              'If you keep ₹1 lakh in a savings account earning 3% while inflation is 6%, your real purchasing power decreases by 3% annually.',
              'Investing in equity mutual funds that return 12% annually while inflation is 6% gives you a real return of 6%.'
            ],
            keyPoints: [
              'Savings accounts often don\'t beat inflation',
              'Equity investments historically outpace inflation',
              'Diversification helps protect against inflation'
            ]
          }
        ],
        quiz: [
          {
            question: 'What is the RBI\'s target inflation rate for India?',
            options: ['2%', '4%', '6%', '8%'],
            correct: 1
          },
          {
            question: 'If inflation is 5% and your savings account gives 3% interest, what is your real return?',
            options: ['8%', '2%', '-2%', '5%'],
            correct: 2
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Digital Payment Security',
      description: 'Master safe practices for UPI, mobile banking, and digital wallet transactions',
      category: 'digital',
      duration: '30 min',
      difficulty: 'Beginner',
      rating: 4.9,
      students: 3120,
      completed: false,
      progress: 60,
      topics: ['UPI Safety', 'OTP Security', 'Phishing Protection', 'Banking Apps'],
      content: {
        introduction: 'Digital payments have revolutionized how we handle money in India. Learn to use them safely.',
        sections: [
          {
            title: 'UPI Security Fundamentals',
            content: `Unified Payments Interface (UPI) is India's instant payment system. With over 10 billion transactions monthly, it's crucial to use UPI safely.

Key Security Features:
• Two-factor authentication (2FA)
• Encrypted transactions
• Transaction limits
• Real-time notifications

Common UPI Apps in India:
• Google Pay (GPay)
• PhonePe
• Paytm
• BHIM
• Bank-specific apps (YONO SBI, iMobile Pay, etc.)

Always verify the merchant before making payments and never share your UPI PIN with anyone.`,
            examples: [
              'When paying at a shop, verify the merchant name on your screen matches the actual shop name.',
              'If someone asks for your UPI PIN over phone claiming to be from your bank, it\'s a scam.'
            ],
            keyPoints: [
              'Never share your UPI PIN with anyone',
              'Always verify merchant details before payment',
              'Use strong, unique PINs for different apps'
            ]
          },
          {
            title: 'Recognizing and Avoiding Scams',
            content: `Digital payment scams are increasing in India. Common scams include:

• Fake Payment Requests: Scammers send payment requests claiming you owe money
• QR Code Scams: Malicious QR codes that steal money instead of receiving payment
• OTP Scams: Fraudsters asking for OTPs claiming to help with transactions
• Fake Customer Care: Scammers posing as bank representatives

Red Flags:
• Unsolicited calls asking for banking details
• Urgent payment requests from unknown numbers
• Links asking you to update KYC immediately
• Requests to download unknown apps for "security updates"`,
            examples: [
              'A scammer calls saying "Your account will be blocked, share OTP to keep it active" - This is always fake.',
              'You receive a QR code via WhatsApp claiming you\'ve won a prize - Don\'t scan unknown QR codes.'
            ],
            keyPoints: [
              'Banks never ask for OTPs or PINs over phone',
              'Be suspicious of urgent payment requests',
              'Verify independently before making any payments'
            ]
          },
          {
            title: 'Best Practices for Safe Digital Banking',
            content: `Follow these practices to ensure safe digital banking:

Device Security:
• Use updated smartphones with latest security patches
• Enable screen lock with PIN/password/biometric
• Don't save banking passwords in browsers
• Log out after each session

Network Security:
• Avoid banking on public WiFi
• Use mobile data or secure home WiFi
• Check for HTTPS (lock icon) on banking websites
• Don't click links in SMS/emails claiming to be from banks

Transaction Monitoring:
• Check bank statements regularly
• Set up SMS/email alerts for all transactions
• Report suspicious transactions immediately
• Keep transaction receipts for reference`,
            examples: [
              'Always type your bank\'s website URL directly instead of clicking email links.',
              'If you see an unknown transaction of ₹500, report it to your bank immediately even if it seems small.'
            ],
            keyPoints: [
              'Use secure networks for banking',
              'Monitor all transactions regularly',
              'Report suspicious activity immediately'
            ]
          }
        ],
        quiz: [
          {
            question: 'What should you do if someone calls asking for your OTP?',
            options: ['Share it to help them', 'Ask for their employee ID first', 'Never share OTP with anyone', 'Share only the first 3 digits'],
            correct: 2
          },
          {
            question: 'Which network is safest for mobile banking?',
            options: ['Public WiFi', 'Mobile data', 'Coffee shop WiFi', 'Airport WiFi'],
            correct: 1
          }
        ]
      }
    },
    {
      id: 3,
      title: 'SIP & Mutual Fund Fundamentals',
      description: 'Comprehensive guide to systematic investment plans and mutual fund selection',
      category: 'investments',
      duration: '45 min',
      difficulty: 'Intermediate',
      rating: 4.7,
      students: 1890,
      completed: false,
      progress: 30,
      topics: ['SIP Benefits', 'NAV Understanding', 'Fund Types', 'Risk Assessment'],
      content: {
        introduction: 'Systematic Investment Plans (SIPs) are one of the best ways to build wealth in India.',
        sections: [
          {
            title: 'What are Mutual Funds?',
            content: `Mutual funds pool money from many investors to invest in stocks, bonds, or other securities. In India, mutual funds are regulated by SEBI (Securities and Exchange Board of India).

Types of Mutual Funds:
• Equity Funds: Invest primarily in stocks
• Debt Funds: Invest in bonds and fixed-income securities
• Hybrid Funds: Mix of equity and debt
• Index Funds: Track market indices like Nifty 50
• ELSS: Equity Linked Savings Scheme (tax-saving funds)

Key Players:
• Asset Management Company (AMC): Manages the fund
• Fund Manager: Makes investment decisions
• Custodian: Safekeeps the securities
• Registrar: Maintains investor records

Benefits of Mutual Funds:
• Professional management
• Diversification
• Liquidity (for most funds)
• Regulated by SEBI
• Small minimum investment amounts`,
            examples: [
              'Instead of buying individual stocks, you can invest ₹500 in a mutual fund that owns 50+ different stocks.',
              'HDFC Top 100 Fund invests in top 100 companies by market cap, giving you exposure to India\'s largest companies.'
            ],
            keyPoints: [
              'Mutual funds provide professional money management',
              'SEBI regulation ensures investor protection',
              'Diversification reduces investment risk'
            ]
          },
          {
            title: 'Understanding SIP (Systematic Investment Plan)',
            content: `SIP allows you to invest a fixed amount regularly in mutual funds. It's like a recurring deposit but in mutual funds instead of bank.

How SIP Works:
• You choose an amount (minimum ₹500 for most funds)
• Select frequency (monthly, quarterly, etc.)
• Money is auto-debited from your bank account
• Units are purchased at current NAV
• You benefit from rupee cost averaging

Benefits of SIP:
• Disciplined investing
• Rupee cost averaging
• Power of compounding
• Flexibility to start/stop/modify
• No need to time the market

SIP vs Lump Sum:
• SIP: Regular small investments, reduces timing risk
• Lump Sum: One-time large investment, higher returns if timed well

The magic of SIP lies in consistency and long-term investing.`,
            examples: [
              'Investing ₹5,000 monthly for 20 years at 12% annual return can create a corpus of over ₹49 lakhs.',
              'During market falls, your ₹5,000 SIP buys more units; during rises, it buys fewer units, averaging out the cost.'
            ],
            keyPoints: [
              'SIP enables disciplined, regular investing',
              'Rupee cost averaging reduces market timing risk',
              'Long-term SIPs can create substantial wealth'
            ]
          },
          {
            title: 'Choosing the Right Mutual Fund',
            content: `Selecting the right mutual fund is crucial for achieving your financial goals. Consider these factors:

Investment Objective:
• Growth: For wealth creation (equity funds)
• Income: For regular income (debt funds)
• Tax Saving: ELSS funds for 80C deduction
• Retirement: Balanced/hybrid funds

Risk Assessment:
• High Risk: Small-cap, sector-specific funds
• Medium Risk: Large-cap, diversified equity funds
• Low Risk: Debt funds, liquid funds

Key Metrics to Evaluate:
• Past Performance (3-5 year track record)
• Expense Ratio (lower is better, typically 0.5-2.5%)
• Fund Manager's experience
• Assets Under Management (AUM)
• Exit Load (penalty for early withdrawal)

Popular Fund Categories in India:
• Large Cap Funds: Invest in top 100 companies
• Mid Cap Funds: Companies ranked 101-250
• Small Cap Funds: Companies ranked 251+
• Index Funds: Track Nifty 50, Sensex, etc.`,
            examples: [
              'For a 25-year-old starting career: 70% equity funds, 30% debt funds',
              'For retirement planning: Start with aggressive equity funds, gradually shift to debt funds as you near retirement.'
            ],
            keyPoints: [
              'Align fund choice with your risk tolerance and goals',
              'Diversify across different fund categories',
              'Review and rebalance your portfolio annually'
            ]
          }
        ],
        quiz: [
          {
            question: 'What is the main benefit of SIP over lump sum investment?',
            options: ['Higher returns guaranteed', 'Rupee cost averaging', 'No market risk', 'Immediate profits'],
            correct: 1
          },
          {
            question: 'Which type of mutual fund is best for tax saving under Section 80C?',
            options: ['Liquid Fund', 'ELSS', 'Debt Fund', 'Gold Fund'],
            correct: 1
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Emergency Fund Planning',
      description: 'Build a robust emergency fund suitable for Indian household expenses',
      category: 'planning',
      duration: '35 min',
      difficulty: 'Beginner',
      rating: 4.6,
      students: 2750,
      completed: false,
      progress: 0,
      topics: ['Fund Size Calculation', 'Liquid Investments', 'Expense Tracking', 'Goal Setting'],
      content: {
        introduction: 'An emergency fund is your financial safety net for unexpected expenses and income loss.',
        sections: [
          {
            title: 'Why You Need an Emergency Fund',
            content: `An emergency fund is money set aside for unexpected financial emergencies. In India, where job security can be uncertain and medical emergencies expensive, having an emergency fund is crucial.

Common Emergencies:
• Job loss or income reduction
• Medical emergencies
• Home repairs (roof leaks, appliance breakdown)
• Vehicle repairs
• Family emergencies
• Economic downturns (like COVID-19 impact)

Benefits of Emergency Fund:
• Peace of mind
• Avoid debt during emergencies
• Maintain lifestyle during income loss
• Take advantage of opportunities
• Reduce financial stress

Without an emergency fund, people often resort to:
• Credit card debt (18-36% interest)
• Personal loans (12-24% interest)
• Borrowing from family/friends
• Breaking long-term investments

The COVID-19 pandemic showed how important emergency funds are, with many losing jobs or facing pay cuts.`,
            examples: [
              'Raj lost his job during COVID-19. His 6-month emergency fund helped him maintain his family\'s lifestyle while job hunting.',
              'Priya\'s father had a heart attack. Her emergency fund covered the ₹3 lakh hospital bill without taking loans.'
            ],
            keyPoints: [
              'Emergency funds prevent debt during crises',
              'They provide financial and emotional security',
              'Recent events highlight their importance'
            ]
          },
          {
            title: 'How Much Emergency Fund Do You Need?',
            content: `The ideal emergency fund size depends on your personal situation, but general guidelines apply:

Standard Recommendation:
• 3-6 months of essential expenses for salaried individuals
• 6-12 months for business owners or freelancers
• Higher amount if you have dependents or health issues

Calculating Your Emergency Fund:
1. List all essential monthly expenses:
   • Rent/EMI
   • Groceries
   • Utilities (electricity, water, gas)
   • Transportation
   • Insurance premiums
   • Minimum debt payments
   • Children's education fees

2. Multiply by number of months (3-6)

3. Add buffer for inflation and unexpected costs

Indian Context Considerations:
• Joint family responsibilities
• Aging parents' healthcare needs
• Children's education costs
• Seasonal income variations (for farmers, small businesses)

Example Calculation:
Monthly essential expenses: ₹40,000
Emergency fund needed: ₹40,000 × 6 = ₹2,40,000`,
            examples: [
              'Software engineer earning ₹8 lakhs annually needs ₹2-3 lakhs emergency fund (3-6 months expenses).',
              'Small business owner with irregular income should maintain ₹5-6 lakhs for 8-10 months of expenses.'
            ],
            keyPoints: [
              'Calculate based on essential expenses, not total income',
              'Business owners need larger emergency funds',
              'Consider family responsibilities and health factors'
            ]
          },
          {
            title: 'Where to Keep Your Emergency Fund',
            content: `Emergency funds should be easily accessible and safe. Here are the best options in India:

Liquid Investment Options:
• Savings Account: Instant access, 3-4% returns
• Liquid Mutual Funds: 1-day access, 4-6% returns
• Ultra Short-term Funds: 1-3 days access, 5-7% returns
• Fixed Deposits: 7-day to 1-year terms, 5-7% returns
• Sweep-in FDs: Automatic conversion, higher returns

Recommended Allocation:
• 50% in savings account (immediate access)
• 30% in liquid mutual funds (1-day access)
• 20% in short-term FDs (higher returns)

Avoid These for Emergency Funds:
• Equity mutual funds (volatile)
• PPF (15-year lock-in)
• Real estate (illiquid)
• Gold (price volatility)
• Crypto currencies (high risk)

Key Features to Look For:
• High liquidity (quick access)
• Capital protection (no loss of principal)
• Reasonable returns (beat inflation if possible)
• No exit penalties`,
            examples: [
              'Keep ₹50,000 in savings account for immediate needs, ₹1,50,000 in liquid funds for larger emergencies.',
              'Avoid putting emergency fund in ELSS or equity funds - you might need to withdraw during market lows.'
            ],
            keyPoints: [
              'Prioritize liquidity over returns for emergency funds',
              'Diversify across 2-3 liquid investment options',
              'Avoid volatile or locked-in investments'
            ]
          }
        ],
        quiz: [
          {
            question: 'How many months of expenses should a salaried person keep as emergency fund?',
            options: ['1-2 months', '3-6 months', '12 months', '24 months'],
            correct: 1
          },
          {
            question: 'Which is the best place to keep emergency funds?',
            options: ['Equity mutual funds', 'PPF', 'Liquid funds and savings account', 'Real estate'],
            correct: 2
          }
        ]
      }
    },
    {
      id: 5,
      title: 'Tax Saving Strategies (80C & Beyond)',
      description: 'Optimize your tax savings with ELSS, PPF, NSC, and other instruments',
      category: 'taxation',
      duration: '50 min',
      difficulty: 'Advanced',
      rating: 4.8,
      students: 1560,
      completed: false,
      progress: 0,
      topics: ['Section 80C', 'ELSS Benefits', 'PPF vs NSC', 'Tax Planning Calendar'],
      content: {
        introduction: 'Learn to legally minimize your tax burden while building wealth through smart tax planning.',
        sections: [
          {
            title: 'Understanding Income Tax in India',
            content: `India follows a progressive tax system where higher income attracts higher tax rates. Understanding tax slabs helps in effective planning.

Income Tax Slabs (New Regime FY 2023-24):
• Up to ₹3 lakhs: 0%
• ₹3-6 lakhs: 5%
• ₹6-9 lakhs: 10%
• ₹9-12 lakhs: 15%
• ₹12-15 lakhs: 20%
• Above ₹15 lakhs: 30%

Old vs New Tax Regime:
• Old Regime: Lower rates but with deductions
• New Regime: Higher rates but fewer deductions
• Most people benefit from old regime due to deductions

Key Tax Deductions:
• Section 80C: ₹1.5 lakh limit
• Section 80D: Health insurance premiums
• Section 24: Home loan interest
• Section 80E: Education loan interest
• HRA: House rent allowance

Tax planning should start early in the financial year, not in March!`,
            examples: [
              'Person earning ₹10 lakhs pays ₹1.17 lakhs tax in new regime vs ₹23,400 in old regime with deductions.',
              'Investing ₹1.5 lakhs in 80C saves ₹46,800 tax for someone in 30% bracket.'
            ],
            keyPoints: [
              'Progressive tax system means higher income = higher tax rate',
              'Old regime often better due to available deductions',
              'Plan taxes throughout the year, not just in March'
            ]
          },
          {
            title: 'Section 80C Investment Options',
            content: `Section 80C allows deduction up to ₹1.5 lakhs annually. Choose wisely among available options:

Popular 80C Options:
• ELSS Mutual Funds: 3-year lock-in, market-linked returns
• PPF: 15-year lock-in, 7.1% current rate, tax-free returns
• NSC: 5-year lock-in, 6.8% current rate
• Tax Saver FDs: 5-year lock-in, 5.5-6.5% returns
• Life Insurance: Premium qualifies, but returns are low
• ULIP: Market-linked insurance, high charges
• Home Loan Principal: Qualifies for 80C

Comparison of Top Options:

ELSS Mutual Funds:
• Lock-in: 3 years (shortest)
• Returns: 10-15% historically
• Risk: Market-linked
• Liquidity: After 3 years

PPF (Public Provident Fund):
• Lock-in: 15 years
• Returns: 7.1% (tax-free)
• Risk: Government-backed (safe)
• Liquidity: Partial withdrawal after 7 years

NSC (National Savings Certificate):
• Lock-in: 5 years
• Returns: 6.8% (taxable)
• Risk: Government-backed
• Liquidity: No premature withdrawal`,
            examples: [
              'Investing ₹1.5 lakhs in ELSS for 20 years at 12% return creates ₹36 lakhs corpus.',
              'PPF investment of ₹1.5 lakhs annually for 15 years creates ₹40+ lakhs tax-free corpus.'
            ],
            keyPoints: [
              'ELSS offers best returns but with market risk',
              'PPF provides safety with decent returns',
              'Diversify 80C investments across options'
            ]
          },
          {
            title: 'Beyond 80C: Other Tax Saving Opportunities',
            content: `Don't limit tax planning to just 80C. Explore other deductions:

Section 80D - Health Insurance:
• Self & family: ₹25,000 deduction
• Parents (below 60): Additional ₹25,000
• Parents (above 60): Additional ₹50,000
• Preventive health check-up: ₹5,000

Section 24 - Home Loan Interest:
• Self-occupied property: ₹2 lakhs deduction
• Let-out property: No limit on interest deduction
• Pre-construction interest: Spread over 5 years

Section 80E - Education Loan:
• Full interest amount deductible
• No upper limit
• For 8 years or until loan is repaid

Other Deductions:
• 80G: Donations to charity
• 80TTA: Savings account interest up to ₹10,000
• 80TTB: Senior citizens' interest income up to ₹50,000

NPS (National Pension System):
• Additional ₹50,000 deduction under 80CCD(1B)
• Over and above ₹1.5 lakh 80C limit
• Long-term retirement planning`,
            examples: [
              'Family health insurance of ₹50,000 premium saves ₹15,000 tax in 30% bracket.',
              'Home loan interest of ₹2 lakhs saves ₹60,000 tax annually.'
            ],
            keyPoints: [
              'Health insurance provides dual benefit - protection + tax saving',
              'Home loans offer significant tax benefits',
              'NPS provides additional ₹50,000 deduction beyond 80C'
            ]
          }
        ],
        quiz: [
          {
            question: 'What is the maximum deduction allowed under Section 80C?',
            options: ['₹1 lakh', '₹1.5 lakhs', '₹2 lakhs', '₹2.5 lakhs'],
            correct: 1
          },
          {
            question: 'Which 80C option has the shortest lock-in period?',
            options: ['PPF', 'NSC', 'ELSS', 'Tax Saver FD'],
            correct: 2
          }
        ]
      }
    },
    {
      id: 6,
      title: 'Insurance Fundamentals',
      description: 'Understand life, health, and general insurance needs for Indian families',
      category: 'insurance',
      duration: '40 min',
      difficulty: 'Intermediate',
      rating: 4.5,
      students: 1890,
      completed: false,
      progress: 0,
      topics: ['Life Insurance', 'Health Insurance', 'Term vs Endowment', 'Claim Process'],
      content: {
        introduction: 'Insurance protects your family from financial hardships during unexpected events.',
        sections: [
          {
            title: 'Why Insurance is Crucial in India',
            content: `Insurance is often overlooked in India, but it's essential for financial security. With rising healthcare costs and uncertain income, insurance provides crucial protection.

Key Statistics:
• Only 3.7% of Indians have life insurance
• Healthcare inflation in India: 10-15% annually
• Average ICU cost: ₹15,000-25,000 per day
• Critical illness treatment: ₹5-20 lakhs

Types of Insurance Needed:
• Life Insurance: Income replacement for family
• Health Insurance: Medical expense coverage
• Disability Insurance: Income protection during disability
• General Insurance: Property protection (home, vehicle)

Insurance vs Investment:
• Insurance: Protection against risks
• Investment: Wealth creation
• Don't mix the two - buy term insurance and invest the rest

Common Mistakes:
• Buying insurance as investment (ULIPs, endowment)
• Insufficient coverage amount
• Not reading policy terms
• Delaying purchase (premiums increase with age)`,
            examples: [
              'A 30-year-old earning ₹10 lakhs annually needs ₹1 crore life insurance to replace 10 years of income.',
              'Family health insurance of ₹10 lakhs costs ₹15,000 annually but can save lakhs in medical emergencies.'
            ],
            keyPoints: [
              'Insurance provides financial protection, not investment returns',
              'Healthcare costs are rising rapidly in India',
              'Start early when premiums are low'
            ]
          },
          {
            title: 'Life Insurance: Term vs Endowment',
            content: `Life insurance replaces your income for your family if something happens to you. Choose the right type:

Term Insurance:
• Pure life cover, no investment component
• Lowest premium for highest coverage
• Coverage: 10-20 times annual income
• Premium: ₹500-1,000 per lakh coverage annually

Endowment/Traditional Plans:
• Life cover + investment component
• Higher premiums, lower returns (4-6%)
• Complex product with poor transparency
• Not recommended by financial experts

Whole Life Insurance:
• Coverage till age 99-100
• Higher premiums than term
• Some cash value accumulation

How Much Life Insurance:
• 10-15 times annual income
• Consider outstanding loans
• Children's education costs
• Spouse's financial needs
• Reduce coverage as you build wealth

Term Insurance Features:
• Return of Premium: Get premiums back if you survive
• Increasing Cover: Coverage increases annually
• Level Cover: Fixed coverage amount
• Decreasing Cover: Coverage reduces (for loans)`,
            examples: [
              '₹1 crore term insurance for 30-year-old costs ₹12,000 annually vs ₹80,000 for endowment plan.',
              'Buy ₹1 crore term insurance + invest ₹68,000 in mutual funds = better wealth creation.'
            ],
            keyPoints: [
              'Term insurance provides maximum coverage at lowest cost',
              'Avoid mixing insurance with investment',
              'Coverage should be 10-15 times annual income'
            ]
          },
          {
            title: 'Health Insurance Essentials',
            content: `Health insurance is mandatory in today's India with rising medical costs and lifestyle diseases.

Types of Health Insurance:
• Individual Plans: Coverage for one person
• Family Floater: Shared coverage for family
• Group Insurance: Employer-provided coverage
• Senior Citizen Plans: For parents above 60
• Critical Illness: Lump sum for specific diseases

Key Features to Look For:
• Cashless Network: Hospitals where you don't pay upfront
• Room Rent Limit: Higher is better (single AC room)
• Pre-existing Disease Coverage: After waiting period
• Day Care Procedures: Treatments not requiring hospitalization
• Annual Health Check-up: Preventive care coverage

Coverage Amount Guidelines:
• Tier 1 cities: ₹10-20 lakhs minimum
• Tier 2/3 cities: ₹5-10 lakhs minimum
• Senior citizens: ₹10-25 lakhs
• Critical illness: ₹25-50 lakhs additional

Waiting Periods:
• Initial waiting: 30 days for illness, immediate for accidents
• Pre-existing diseases: 2-4 years
• Specific diseases: 1-2 years (hernia, cataract, etc.)
• Maternity: 2-4 years

Claim Settlement Ratio:
• Choose insurers with 95%+ claim settlement ratio
• Check average claim settlement time
• Read customer reviews and complaints`,
            examples: [
              'Heart surgery in Mumbai costs ₹8-15 lakhs - health insurance prevents financial ruin.',
              'Family of 4 needs ₹15 lakh health insurance in Delhi/Mumbai for adequate coverage.'
            ],
            keyPoints: [
              'Health insurance is essential, not optional',
              'Choose adequate coverage based on your city',
              'Cashless network and claim ratio are crucial factors'
            ]
          }
        ],
        quiz: [
          {
            question: 'What type of life insurance provides maximum coverage at lowest cost?',
            options: ['Endowment Plan', 'Term Insurance', 'ULIP', 'Whole Life'],
            correct: 1
          },
          {
            question: 'How much life insurance coverage should you typically have?',
            options: ['5 times annual income', '10-15 times annual income', '20 times annual income', 'Equal to annual income'],
            correct: 1
          }
        ]
      }
    }
  ];

  const filteredModules = modules.filter(module => {
    const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleModuleComplete = () => {
    setSelectedModule(null);
    // Here you would typically update the module's completion status
  };

  if (selectedModule) {
    const module = modules.find(m => m.id === selectedModule);
    if (module) {
      return <LearningModule module={module} onComplete={handleModuleComplete} />;
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Learn Financial Literacy</h2>
            <p className="text-gray-600 text-lg">Master essential financial skills for your future</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-4">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search learning modules..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Learning Path Recommendation */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommended Learning Path</h3>
        <p className="text-gray-600 mb-4">
          Start with Financial Basics, then move to Digital Finance and Investment fundamentals. 
          Complete Tax Planning and Insurance modules for comprehensive financial knowledge.
        </p>
        <div className="flex flex-wrap gap-2">
          {['Financial Basics', 'Digital Finance', 'Investments', 'Tax Planning', 'Insurance'].map((path, index) => (
            <div key={index} className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2">
              <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-gray-700">{path}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredModules.map((module) => (
          <div key={module.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {module.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Play className="h-5 w-5 text-blue-500" />
                    )}
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      module.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      module.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {module.difficulty}
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full capitalize">
                      {module.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{module.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{module.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{module.students.toLocaleString()}</span>
                </div>
              </div>

              {/* Progress Bar */}
              {module.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{module.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Topics */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 mb-2">What you'll learn:</h4>
                <div className="flex flex-wrap gap-2">
                  {module.topics.map((topic, index) => (
                    <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedModule(module.id)}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium py-3 px-4 rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>{module.completed ? 'Review Module' : module.progress > 0 ? 'Continue Learning' : 'Start Learning'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredModules.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No modules found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Learn;