import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import AuthPage from './components/Auth/AuthPage'
import MainApp from './components/MainApp'
import LandingPage from './components/Landing/LandingPage'

const AppContent = () => {
  const { user, loading } = useAuth()
  const [showLanding, setShowLanding] = useState(true)

  // Always show landing page first for new sessions
  useEffect(() => {
    const hasSeenLanding = sessionStorage.getItem('finshiksha_landing_seen')
    if (hasSeenLanding) {
      setShowLanding(false)
    }
  }, [])

  const handleGetStarted = () => {
    sessionStorage.setItem('finshiksha_landing_seen', 'true')
    setShowLanding(false)
  }

  const handleExplorePlatform = () => {
    sessionStorage.setItem('finshiksha_landing_seen', 'true')
    setShowLanding(false)
  }

  const handleBackToLanding = () => {
    setShowLanding(true)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading FinShikshaIn...</p>
        </div>
      </div>
    )
  }

  // Always show landing page first for new visitors
  if (showLanding) {
    return <LandingPage onGetStarted={handleGetStarted} onExplorePlatform={handleExplorePlatform} />
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/auth" 
          element={user ? <Navigate to="/dashboard" replace /> : <AuthPage onBackToLanding={handleBackToLanding} />} 
        />
        <Route 
          path="/*" 
          element={user ? <MainApp /> : <Navigate to="/auth" replace />} 
        />
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App