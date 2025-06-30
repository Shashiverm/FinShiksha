import React, { useState } from 'react'
import { IndianRupee, ArrowLeft } from 'lucide-react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

interface AuthPageProps {
  onBackToLanding?: () => void
}

const AuthPage: React.FC<AuthPageProps> = ({ onBackToLanding }) => {
  const [isLogin, setIsLogin] = useState(true)

  const handleBackToLanding = () => {
    // Clear the session storage to show landing page again
    sessionStorage.removeItem('finshiksha_landing_seen')
    if (onBackToLanding) {
      onBackToLanding()
    } else {
      // Fallback: reload the page to show landing
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Back to Landing Button */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={handleBackToLanding}
          className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back to Home</span>
        </button>
      </div>

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6 lg:mb-8">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg">
                <IndianRupee className="h-8 lg:h-12 w-8 lg:w-12 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">FinShikshaIn</h1>
                <p className="text-base lg:text-lg text-gray-600">Financial Literacy for India</p>
              </div>
            </div>
            
            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                Master Your Financial Future
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Join thousands of Indians learning essential financial skills through interactive modules, 
                practical tools, and AI-powered guidance tailored for the Indian market.
              </p>
              
              <div className="grid grid-cols-2 gap-3 lg:gap-4 mt-6 lg:mt-8">
                <div className="bg-white rounded-lg p-3 lg:p-4 shadow-md">
                  <div className="text-xl lg:text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-xs lg:text-sm text-gray-600">Learning Modules</div>
                </div>
                <div className="bg-white rounded-lg p-3 lg:p-4 shadow-md">
                  <div className="text-xl lg:text-2xl font-bold text-green-600">10+</div>
                  <div className="text-xs lg:text-sm text-gray-600">Financial Tools</div>
                </div>
                <div className="bg-white rounded-lg p-3 lg:p-4 shadow-md">
                  <div className="text-xl lg:text-2xl font-bold text-purple-600">25+</div>
                  <div className="text-xs lg:text-sm text-gray-600">Government Schemes</div>
                </div>
                <div className="bg-white rounded-lg p-3 lg:p-4 shadow-md">
                  <div className="text-xl lg:text-2xl font-bold text-orange-600">AI</div>
                  <div className="text-xs lg:text-sm text-gray-600">Powered Guidance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Auth Form */}
          <div className="flex justify-center order-1 lg:order-2">
            {isLogin ? (
              <LoginForm onToggleMode={() => setIsLogin(false)} />
            ) : (
              <SignupForm onToggleMode={() => setIsLogin(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage