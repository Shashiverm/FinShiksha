import React, { useState } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  BookOpen, 
  Calculator, 
  Target, 
  HelpCircle, 
  User, 
  Users, 
  Newspaper,
  Bot,
  Menu,
  X,
  IndianRupee,
  LogOut,
  Languages
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import Dashboard from './Dashboard'
import Learn from './Learn'
import Tools from './Tools'
import Schemes from './Schemes'
import Quiz from './Quiz'
import Profile from './Profile'
import Community from './Community/Community'
import FinancialNews from './News/FinancialNews'
import LanguageTranslator from './Language/LanguageTranslator'
import AIChat from './AIAssistant/AIChat'
import PersonalizedTips from './AIAssistant/PersonalizedTips'
import Footer from './Footer/Footer'

const MainApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Learn', href: '/learn', icon: BookOpen },
    { name: 'Tools', href: '/tools', icon: Calculator },
    { name: 'Schemes', href: '/schemes', icon: Target },
    { name: 'Quiz', href: '/quiz', icon: HelpCircle },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'News', href: '/news', icon: Newspaper },
    { name: 'Translate', href: '/translate', icon: Languages },
    { name: 'Profile', href: '/profile', icon: User },
  ]

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const handleNavigation = (href: string) => {
    navigate(href)
    setSidebarOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Responsive */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 lg:px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
              <IndianRupee className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg lg:text-xl font-bold text-gray-900">FinShiksha</h1>
              <p className="text-xs text-gray-500 hidden lg:block">Financial Literacy</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-4 lg:mt-6 px-3">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`group flex items-center w-full px-3 py-2 lg:py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className={`mr-3 h-5 w-5 ${
                    isActive ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-500'
                  }`} />
                  <span className="truncate">{item.name}</span>
                </button>
              )
            })}
          </div>
        </nav>

        {/* User Info & Sign Out - Responsive */}
        <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2 lg:space-x-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.user_metadata?.full_name || user?.email}
              </p>
              <p className="text-xs text-gray-500 truncate lg:block hidden">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
          >
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Top Navigation - Mobile Only */}
        <header className="bg-white shadow-sm border-b border-gray-200 lg:hidden">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
                <IndianRupee className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-lg font-bold text-gray-900">FinShiksha</h1>
            </div>
            <div className="w-6"></div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/schemes" element={<Schemes />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/community" element={<Community />} />
              <Route path="/news" element={<FinancialNews />} />
              <Route path="/translate" element={<LanguageTranslator />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>

          {/* AI Assistant Section - Only show on dashboard */}
          {location.pathname === '/dashboard' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <AIChat />
                <PersonalizedTips />
              </div>
            </div>
          )}

          <Footer />
        </main>
      </div>

      {/* AI Chat Floating Button */}
      <button
        className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-40"
      >
        <Bot className="h-5 w-5 lg:h-6 lg:w-6" />
      </button>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default MainApp