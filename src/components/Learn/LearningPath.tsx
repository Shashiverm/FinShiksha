import React from 'react'
import { BookOpen, Target, TrendingUp, Shield, Calculator, Award } from 'lucide-react'

const LearningPath = () => {
  const learningPaths = [
    {
      id: 'beginner',
      title: 'Financial Literacy Beginner',
      description: 'Perfect for those starting their financial journey',
      duration: '4-6 weeks',
      modules: 8,
      icon: BookOpen,
      color: 'from-green-500 to-emerald-600',
      path: [
        'Understanding Money & Inflation',
        'Digital Payment Security',
        'Banking Basics',
        'Emergency Fund Planning',
        'Introduction to Investments',
        'Basic Insurance Concepts',
        'Government Schemes Overview',
        'Financial Goal Setting'
      ]
    },
    {
      id: 'intermediate',
      title: 'Investment & Wealth Building',
      description: 'Build wealth through smart investment strategies',
      duration: '6-8 weeks',
      modules: 10,
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-600',
      path: [
        'SIP & Mutual Fund Fundamentals',
        'Stock Market Basics',
        'Portfolio Diversification',
        'Risk Assessment',
        'Real Estate Investment',
        'Gold & Commodity Investment',
        'International Investing',
        'Investment Psychology',
        'Market Analysis',
        'Retirement Planning'
      ]
    },
    {
      id: 'advanced',
      title: 'Tax Planning & Optimization',
      description: 'Master tax-efficient wealth creation',
      duration: '3-4 weeks',
      modules: 6,
      icon: Calculator,
      color: 'from-purple-500 to-pink-600',
      path: [
        'Income Tax Fundamentals',
        'Section 80C Investments',
        'Advanced Tax Deductions',
        'Tax-Efficient Investing',
        'Estate Planning',
        'Business Tax Planning'
      ]
    },
    {
      id: 'protection',
      title: 'Insurance & Risk Management',
      description: 'Protect your wealth and family',
      duration: '3-4 weeks',
      modules: 5,
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      path: [
        'Life Insurance Fundamentals',
        'Health Insurance Planning',
        'General Insurance',
        'Disability Insurance',
        'Insurance Portfolio Review'
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Structured learning paths designed to take you from beginner to expert in financial literacy
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {learningPaths.map((path) => {
          const Icon = path.icon
          return (
            <div key={path.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className={`bg-gradient-to-r ${path.color} p-3 rounded-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{path.title}</h3>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{path.duration}</span>
                    <span>•</span>
                    <span>{path.modules} modules</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-gray-900">Learning Modules:</h4>
                <div className="space-y-2">
                  {path.path.slice(0, 4).map((module, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium">
                        {index + 1}
                      </div>
                      <span>{module}</span>
                    </div>
                  ))}
                  {path.path.length > 4 && (
                    <div className="text-sm text-gray-500 ml-8">
                      +{path.path.length - 4} more modules
                    </div>
                  )}
                </div>
              </div>

              <button className={`w-full bg-gradient-to-r ${path.color} text-white font-medium py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-200`}>
                Start Learning Path
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LearningPath