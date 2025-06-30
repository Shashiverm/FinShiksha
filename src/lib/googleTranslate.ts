// Google Translate API integration
// Note: In production, you would use the official Google Translate API

export interface TranslationRequest {
  text: string
  sourceLang: string
  targetLang: string
}

export interface TranslationResponse {
  translatedText: string
  detectedSourceLanguage?: string
  confidence?: number
}

// Mock translation function - replace with actual Google Translate API
export const translateText = async (request: TranslationRequest): Promise<TranslationResponse> => {
  const { text, sourceLang, targetLang } = request
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // In production, you would make an actual API call:
  /*
  const response = await fetch('https://translation.googleapis.com/language/translate/v2', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GOOGLE_TRANSLATE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      q: text,
      source: sourceLang,
      target: targetLang,
      format: 'text'
    })
  })
  
  const data = await response.json()
  return {
    translatedText: data.data.translations[0].translatedText,
    detectedSourceLanguage: data.data.translations[0].detectedSourceLanguage
  }
  */
  
  // Mock response for demo
  const mockTranslations: Record<string, Record<string, string>> = {
    'Investment': {
      'hi': 'निवेश',
      'bn': 'বিনিয়োগ',
      'te': 'పెట్టుబడి',
      'ta': 'முதலீடு',
      'mr': 'गुंतवणूक',
      'gu': 'રોકાણ',
      'kn': 'ಹೂಡಿಕೆ',
      'ml': 'നിക്ഷേപം',
      'pa': 'ਨਿਵੇਸ਼',
      'ur': 'سرمایہ کاری'
    },
    'Mutual Fund': {
      'hi': 'म्यूचुअल फंड',
      'bn': 'মিউচুয়াল ফান্ড',
      'te': 'మ్యూచువల్ ఫండ్',
      'ta': 'மியூச்சுவல் ஃபண்ட்',
      'mr': 'म्युच्युअल फंड',
      'gu': 'મ્યુચ્યુઅલ ફંડ',
      'kn': 'ಮ್ಯೂಚುಯಲ್ ಫಂಡ್',
      'ml': 'മ്യൂച്വൽ ഫണ്ട്',
      'pa': 'ਮਿਉਚੁਅਲ ਫੰਡ',
      'ur': 'میوچل فنڈ'
    }
  }
  
  // Check if we have a mock translation
  if (mockTranslations[text] && mockTranslations[text][targetLang]) {
    return {
      translatedText: mockTranslations[text][targetLang],
      confidence: 0.95
    }
  }
  
  // Fallback mock translation
  return {
    translatedText: `[${targetLang.toUpperCase()}] ${text}`,
    confidence: 0.8
  }
}

// Language detection
export const detectLanguage = async (text: string): Promise<string> => {
  // Mock language detection
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Simple heuristic for demo - in production use Google's detection API
  if (/[\u0900-\u097F]/.test(text)) return 'hi' // Hindi
  if (/[\u0980-\u09FF]/.test(text)) return 'bn' // Bengali
  if (/[\u0C00-\u0C7F]/.test(text)) return 'te' // Telugu
  if (/[\u0B80-\u0BFF]/.test(text)) return 'ta' // Tamil
  
  return 'en' // Default to English
}

// Get supported languages
export const getSupportedLanguages = () => {
  return [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
    { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
    { code: 'ne', name: 'Nepali', nativeName: 'नेपाली' },
    { code: 'si', name: 'Sinhala', nativeName: 'සිංහල' },
    { code: 'my', name: 'Myanmar', nativeName: 'မြန်မာ' }
  ]
}