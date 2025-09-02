'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
import HomeScreen from './screens/HomeScreen'
import WeatherScreen from './screens/WeatherScreen'
import MarketPriceScreen from './screens/MarketPriceScreen'
import CropAdvisoryScreen from './screens/CropAdvisoryScreen'
import PestDetectionScreen from './screens/PestDetectionScreen'
import VoiceAssistantScreen from './screens/VoiceAssistantScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('login')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check auth on mount
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })
    return () => {
      listener?.subscription.unsubscribe()
    }
  }, [])

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />
      case 'home1':
        return <HomeScreen1 onNavigate={setCurrentScreen} />
      case 'weather':
        return <WeatherScreen onNavigate={setCurrentScreen} />
      case 'market':
        return <MarketPriceScreen onNavigate={setCurrentScreen} />
      case 'crop':
        return <CropAdvisoryScreen onNavigate={setCurrentScreen} />
      case 'pest':
        return <PestDetectionScreen onNavigate={setCurrentScreen} />
      case 'voice':
        return <VoiceAssistantScreen onNavigate={setCurrentScreen} />
      case 'login':
        return <LoginScreen onNavigate={setCurrentScreen} />
      case 'signup':
        return <SignupScreen onNavigate={setCurrentScreen} />
      default:
        return <HomeScreen1 onNavigate={setCurrentScreen} />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span>Loading...</span>
      </div>
    )
  }

  // If not logged in, show only login/signup screens
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full">
          {currentScreen === 'signup' ? (
            <SignupScreen onNavigate={setCurrentScreen} />
          ) : (
            <LoginScreen onNavigate={setCurrentScreen} />
          )}
          <div className="flex justify-center mt-4">
            <button
              className="text-green-700 font-bold underline"
              onClick={() =>
                setCurrentScreen(currentScreen === 'signup' ? 'login' : 'signup')
              }
            >
              {currentScreen === 'signup'
                ? 'Already have an account? Login'
                : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // If logged in, show the app
  return (
    <div className="min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        <nav className="desktop-sidebar">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-farm-green-800 mb-2">🌱 Plantix</h1>
            <p className="text-sm text-gray-600">Digital Farming Companion</p>
          </div>
          <div className="space-y-2">
            {[
              { id: 'home', icon: '🏠', label: 'Home', labelHi: 'होम' },
              { id: 'weather', icon: '🌦', label: 'Weather', labelHi: 'मौसम' },
              { id: 'market', icon: '💰', label: 'Market Prices', labelHi: 'बाजार भाव' },
              { id: 'crop', icon: '🌱', label: 'Crop Advisory', labelHi: 'फसल सलाह' },
              { id: 'pest', icon: '📷', label: 'Pest Detection', labelHi: 'कीट पहचान' },
              { id: 'voice', icon: '🎤', label: 'Voice Assistant', labelHi: 'आवाज़ सहायक' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentScreen(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                  currentScreen === item.id 
                    ? 'bg-farm-green-100 text-farm-green-800 border-l-4 border-farm-green-500' 
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.labelHi}</div>
                </div>
              </button>
            ))}
            <button
              onClick={async () => {
                await supabase.auth.signOut()
                setCurrentScreen('login')
              }}
              className="w-full flex items-center gap-3 p-3 rounded-lg text-left text-red-600 hover:bg-red-50 mt-4"
            >
              <span className="text-xl">🚪</span>
              <div>
                <div className="font-medium">Logout</div>
                <div className="text-xs text-gray-500">लॉगआउट</div>
              </div>
            </button>
          </div>
        </nav>
        <main className="desktop-main p-8">
          {renderScreen()}
        </main>
      </div>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="pb-20">
          {renderScreen()}
        </div>
        <nav className="bottom-nav">
          {[
            { id: 'home', icon: '🏠', label: 'Home', labelHi: 'होम' },
            { id: 'weather', icon: '🌦', label: 'Weather', labelHi: 'मौसम' },
            { id: 'market', icon: '💰', label: 'Prices', labelHi: 'भाव' },
            { id: 'crop', icon: '🌱', label: 'Advisory', labelHi: 'सलाह' },
            { id: 'pest', icon: '📷', label: 'Pest', labelHi: 'कीट' },
            { id: 'voice', icon: '🎤', label: 'Voice', labelHi: 'आवाज़' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentScreen(item.id)}
              className={`bottom-nav-item ${currentScreen === item.id ? 'active' : ''}`}
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-xs">{item.label}</span>
              <span className="text-[10px] opacity-80">{item.labelHi}</span>
            </button>
          ))}
          <button
            onClick={async () => {
              await supabase.auth.signOut()
              setCurrentScreen('login')
            }}
            className="bottom-nav-item text-red-600"
          >
            <span className="text-xl mb-1">🚪</span>
            <span className="text-xs">Logout</span>
            <span className="text-[10px] opacity-80">लॉगआउट</span>
          </button>
        </nav>
      </div>
    </div>
  )
}