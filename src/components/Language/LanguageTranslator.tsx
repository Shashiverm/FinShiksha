import React, { useState, useEffect } from 'react'
import { Languages, Volume2, Copy, Check, Globe, BookOpen } from 'lucide-react'

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

const LanguageTranslator = () => {
  const [sourceText, setSourceText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [sourceLang, setSourceLang] = useState('en')
  const [targetLang, setTargetLang] = useState('hi')
  const [isTranslating, setIsTranslating] = useState(false)
  const [copied, setCopied] = useState(false)

  // 15 Major Indian Languages + English
  const indianLanguages: Language[] = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
    { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
    { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', flag: '🇮🇳' },
    { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', flag: '🇳🇵' },
    { code: 'si', name: 'Sinhala', nativeName: 'සිංහල', flag: '🇱🇰' },
    { code: 'my', name: 'Myanmar', nativeName: 'မြန်မာ', flag: '🇲🇲' }
  ]

  // Financial terms for quick translation
  const financialTerms = [
    'Investment', 'Mutual Fund', 'SIP', 'Emergency Fund', 'Insurance',
    'Tax Saving', 'PPF', 'ELSS', 'Fixed Deposit', 'Stock Market',
    'Budget', 'Savings', 'Loan', 'EMI', 'Credit Score'
  ]

  const translateText = async () => {
    if (!sourceText.trim()) return

    setIsTranslating(true)
    try {
      // Using Google Translate API (in production, you'd use the actual API)
      // For demo purposes, we'll simulate translation
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // This is a mock translation - in production, you'd call Google Translate API
      const mockTranslation = `[Translated to ${indianLanguages.find(l => l.code === targetLang)?.name}] ${sourceText}`
      setTranslatedText(mockTranslation)
    } catch (error) {
      console.error('Translation error:', error)
      setTranslatedText('Translation failed. Please try again.')
    } finally {
      setIsTranslating(false)
    }
  }

  const swapLanguages = () => {
    setSourceLang(targetLang)
    setTargetLang(sourceLang)
    setSourceText(translatedText)
    setTranslatedText(sourceText)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(translatedText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Copy failed:', error)
    }
  }

  const speakText = (text: string, lang: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang
      speechSynthesis.speak(utterance)
    }
  }

  const translateTerm = async (term: string) => {
    setSourceText(term)
    await translateText()
  }

  useEffect(() => {
    if (sourceText.trim()) {
      const debounceTimer = setTimeout(() => {
        translateText()
      }, 500)
      return () => clearTimeout(debounceTimer)
    }
  }, [sourceText, sourceLang, targetLang])

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Language Translator</h2>
            <p className="text-gray-600 text-lg">Learn financial concepts in your preferred Indian language</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-4">
              <Languages className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
            <select
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              {indianLanguages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name} ({lang.nativeName})
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-center">
            <button
              onClick={swapLanguages}
              className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors duration-200"
              title="Swap languages"
            >
              <Languages className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              {indianLanguages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name} ({lang.nativeName})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Translation Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Source Text */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {indianLanguages.find(l => l.code === sourceLang)?.name}
            </h3>
            <button
              onClick={() => speakText(sourceText, sourceLang)}
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              disabled={!sourceText.trim()}
            >
              <Volume2 className="h-5 w-5" />
            </button>
          </div>
          <textarea
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            placeholder="Enter text to translate..."
            className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
          />
          <div className="mt-2 text-xs text-gray-500">
            {sourceText.length}/5000 characters
          </div>
        </div>

        {/* Translated Text */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {indianLanguages.find(l => l.code === targetLang)?.name}
            </h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => speakText(translatedText, targetLang)}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                disabled={!translatedText.trim()}
              >
                <Volume2 className="h-5 w-5" />
              </button>
              <button
                onClick={copyToClipboard}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                disabled={!translatedText.trim()}
              >
                {copied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div className="w-full h-40 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg overflow-y-auto">
            {isTranslating ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
              </div>
            ) : (
              <p className="text-gray-900 whitespace-pre-wrap">{translatedText || 'Translation will appear here...'}</p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Financial Terms */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <BookOpen className="h-5 w-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">Quick Financial Terms</h3>
        </div>
        <p className="text-gray-600 mb-4">Click on any term to translate it instantly</p>
        <div className="flex flex-wrap gap-2">
          {financialTerms.map((term) => (
            <button
              key={term}
              onClick={() => translateTerm(term)}
              className="bg-green-50 hover:bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Language Statistics */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Supported Languages</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {indianLanguages.map((lang) => (
            <div key={lang.code} className="text-center">
              <div className="text-2xl mb-1">{lang.flag}</div>
              <div className="text-sm font-medium text-gray-900">{lang.name}</div>
              <div className="text-xs text-gray-500">{lang.nativeName}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <Globe className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Translation Tips</h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Use simple, clear sentences for better translation accuracy</li>
              <li>• Financial terms may have specific meanings in different languages</li>
              <li>• Click the speaker icon to hear pronunciation in any language</li>
              <li>• Copy translated text to use in other applications</li>
              <li>• Try translating financial concepts to better understand them</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguageTranslator