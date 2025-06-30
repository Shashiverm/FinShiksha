import React, { useState, useEffect } from 'react'
import { Lightbulb, RefreshCw, TrendingUp, Target, BookOpen } from 'lucide-react'
import { generatePersonalizedTips } from '../../lib/ai'
import { useAuth } from '../../contexts/AuthContext'

const PersonalizedTips = () => {
  const [tips, setTips] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth()

  const loadTips = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Simulate user level and activity (in production, fetch from database)
      const userLevel = 3
      const recentActivity = ['SIP Calculator', 'Investment Quiz', 'Emergency Fund']
      
      const newTips = await generatePersonalizedTips(userLevel, recentActivity)
      setTips(newTips)
    } catch (error) {
      console.error('Error loading tips:', error)
      setError('Unable to load personalized tips')
      
      // Fallback tips
      setTips([
        "Start with small SIP investments to build a habit of regular investing",
        "Build an emergency fund covering 6 months of essential expenses",
        "Explore tax-saving ELSS mutual funds before the financial year ends"
      ])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTips()
  }, [])

  const tipIcons = [TrendingUp, Target, BookOpen]

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Lightbulb className="h-6 w-6 text-yellow-500" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Personalized Tips</h3>
            <p className="text-xs text-gray-500">AI-powered financial guidance</p>
          </div>
        </div>
        <button
          onClick={loadTips}
          disabled={loading}
          className="p-2 text-gray-500 hover:text-gray-700 transition-colors disabled:opacity-50 rounded-lg hover:bg-gray-100"
          title="Refresh tips"
        >
          <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {error && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
          <p className="text-orange-800 text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-3">
        {tips.map((tip, index) => {
          const Icon = tipIcons[index % tipIcons.length]
          return (
            <div 
              key={index} 
              className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-4 rounded-r-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                  <Icon className="h-4 w-4 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {tips.length === 0 && !loading && !error && (
        <div className="text-center py-8 text-gray-500">
          <Lightbulb className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p className="text-sm">No tips available at the moment</p>
          <button
            onClick={loadTips}
            className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Try loading tips
          </button>
        </div>
      )}

      {loading && tips.length === 0 && (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-16 rounded-lg"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PersonalizedTips