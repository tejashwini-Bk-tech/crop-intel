'use client'

import { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import WeatherScreen from './screens/WeatherScreen'
import MarketPriceScreen from './screens/MarketPriceScreen'
import CropAdvisoryScreen from './screens/CropAdvisoryScreen'
import PestDetectionScreen from './screens/PestDetectionScreen'
import VoiceAssistantScreen from './screens/VoiceAssistantScreen'
import LoginScreen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home')

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={setCurrentScreen} />
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
        return <HomeScreen onNavigate={setCurrentScreen} />
    }
  }

  return (
    <div className="min-h-screen">
      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Desktop Sidebar Navigation */}
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
          </div>
        </nav>
        
        {/* Desktop Main Content */}
        <main className="desktop-main p-8">
          {renderScreen()}
        </main>
      </div>
      
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="pb-20"> {/* Padding for bottom navigation */}
          {renderScreen()}
        </div>
        
        {/* Mobile Bottom Navigation */}
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
        </nav>
      </div>
    </div>
  )
}