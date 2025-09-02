import { CloudRain, TrendingUp, Sprout, Mic, Camera, Globe, User, LogIn, UserPlus } from 'lucide-react'
import { useState } from 'react'

export default function HomeScreen({ onNavigate }) {
  const [language, setLanguage] = useState('english')
  const [showLoginModal, setShowLoginModal] = useState(false)
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'hindi' : 'english')
  }
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 pb-24 lg:pb-8 relative"> {/* Responsive padding */}
      {/* Background Blur Overlay for Login Modal */}
      {showLoginModal && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-[9998] animate-fadeInUp"
          onClick={() => setShowLoginModal(false)}
        />
      )}
      {/* Top Navigation Bar */}
      <nav className="flex items-center justify-between mb-8 animate-fadeInUp">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
            <span className="text-2xl text-white font-bold">C</span>
          </div>
          <h1 className="text-3xl font-black text-gray-900">
            {language === 'english' ? 'Crop Intel' : 'क्रॉप इंटेल'}
          </h1>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 bg-green-100 hover:bg-green-200 px-3 py-2 rounded-full border border-green-300 transition-all duration-300 shadow-sm"
          >
            <Globe className="w-4 h-4 text-green-700" />
            <span className="text-sm font-bold text-green-700">
              {language === 'english' ? 'हिं' : 'EN'}
            </span>
          </button>
          
          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setShowLoginModal(true)}
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full border border-gray-300 transition-all duration-300 shadow-sm"
            >
              <User className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-bold text-gray-700">
                {language === 'english' ? 'Profile' : 'प्रोफाइल'}
              </span>
            </button>
            
          </div>
        </div>
      </nav>

      {/* Premium Plantix Header */}
      <header className="text-center mb-12 animate-fadeInUp">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-emerald-100/50 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 border border-green-100 shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <span className="text-3xl text-white font-bold">C</span>
              </div>
              <div className="text-left">
                <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-2">
                  {language === 'english' ? 'Crop Intel' : 'क्रॉप इंटेल'}
                </h1>
                <p className="text-green-600 font-semibold text-lg">
                  {language === 'english' ? 'Smart Farming Solutions' : 'स्मार्ट कृषि समाधान'}
                </p>
              </div>
            </div>
            <p className="text-xl text-gray-700 font-medium mb-2">
              {language === 'english' ? 'Diagnose, Treat & Grow Better Crops' : 'निदान करें, उपचार करें और बेहतर फसल उगाएं'}
            </p>
            <p className="text-gray-500 font-medium">
              {language === 'english' ? 'Your trusted farming companion' : 'फसल की बेहतर देखभाल के लिए'}
            </p>
            <div className="mt-6 flex justify-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse animate-delay-200"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse animate-delay-400"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Tiles with Enhanced Animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 mb-8">
        <button
          onClick={() => onNavigate('weather')}
          className="group card hover:scale-105 transition-all duration-300 animate-slideInLeft animate-delay-100"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-sky-600 rounded-2xl p-4 mr-4 shadow-lg animate-bounceIn animate-delay-200">
                <CloudRain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900">
                  {language === 'english' ? 'Weather Forecast' : 'मौसम पूर्वानुमान'}
                </h3>
                <p className="text-gray-600 font-semibold animate-fadeInUp animate-delay-300">
                  {language === 'english' ? 'Live Weather Updates' : 'लाइव मौसम अपडेट'}
                </p>
              </div>
            </div>
            <div className="text-right animate-scaleIn animate-delay-400">
              <p className="text-3xl font-black text-blue-600">28°C</p>
              <p className="text-gray-500 text-sm">Partly Cloudy</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="relative text-gray-700 font-medium animate-fadeInUp animate-delay-500">
              {language === 'english' 
                ? 'Perfect weather for farming activities today. Light winds expected.'
                : 'आज खेती के कामों के लिए मौसम अच्छा है। हल्की हवा की उम्मीद है।'
              }
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 font-medium">
                {language === 'english' ? 'Live Updates' : 'लाइव अपडेट'}
              </span>
            </div>
          </div>
        </button>

        <button
          onClick={() => onNavigate('market')}
          className="group card hover:scale-105 transition-all duration-300 animate-slideInRight animate-delay-200"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-4 mr-4 shadow-lg animate-bounceIn animate-delay-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900">
                  {language === 'english' ? 'Market Prices' : 'बाजार भाव'}
                </h3>
                <p className="text-gray-600 font-semibold animate-fadeInUp animate-delay-400">
                  {language === 'english' ? 'Live Market Rates' : 'लाइव बाजार दरें'}
                </p>
              </div>
            </div>
            <div className="text-right animate-scaleIn animate-delay-500">
              <p className="text-lg font-bold text-green-600">↗ +3%</p>
              <p className="text-gray-500 text-sm">Soybean</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="relative text-gray-700 font-medium animate-fadeInUp animate-delay-600">
              {language === 'english'
                ? 'Soybean prices up 3% this week. Best rates in Amravati market.'
                : 'इस सप्ताह सोयाबीन की कीमतों में 3% की वृद्धि। अमरावती बाजार में सबसे अच्छी दरें।'
              }
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 font-medium">
                {language === 'english' ? 'Real-time Data' : 'रियल-टाइम डेटा'}
              </span>
            </div>
          </div>
        </button>

        <button
          onClick={() => onNavigate('crop')}
          className="group card hover:scale-105 transition-all duration-300 animate-slideInLeft animate-delay-300"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 mr-4 shadow-lg animate-bounceIn animate-delay-400">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900">
                  {language === 'english' ? 'Crop Advisory' : 'फसल सलाह'}
                </h3>
                <p className="text-gray-600 font-semibold animate-fadeInUp animate-delay-500">
                  {language === 'english' ? 'Expert Guidance' : 'विशेषज्ञ मार्गदर्शन'}
                </p>
              </div>
            </div>
            <div className="text-right animate-scaleIn animate-delay-600">
              <div className="bg-green-100 px-3 py-1 rounded-full">
                <p className="text-sm font-bold text-green-700">
                  {language === 'english' ? 'AI Powered' : 'AI संचालित'}
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-1">
                {language === 'english' ? 'Personalized' : 'व्यक्तिगत'}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <p className="relative text-gray-700 font-medium animate-fadeInUp animate-delay-700">
              {language === 'english'
                ? 'Get personalized crop recommendations based on your soil and climate.'
                : 'अपनी मिट्टी और जलवायु के आधार पर व्यक्तिगत फसल सिफारिशें प्राप्त करें।'
              }
            </p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500 font-medium">
                {language === 'english' ? 'Smart Recommendations' : 'स्मार्ट सिफारिशें'}
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* Premium Quick Access Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-6 animate-slideInRight animate-delay-400">
        <button
          onClick={() => onNavigate('pest')}
          className="group btn-outline flex flex-col items-center justify-center gap-4 py-8 relative overflow-hidden animate-bounceIn animate-delay-500"
        >
          <div className="bg-red-100 p-4 rounded-2xl group-hover:bg-red-200 transition-colors duration-300">
            <Camera className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="text-center">
            <span className="font-bold text-lg text-gray-900 block">
              {language === 'english' ? 'Pest Detection' : 'कीट पहचान'}
            </span>
            <span className="text-sm text-gray-600 animate-fadeInUp animate-delay-600">
              {language === 'english' ? 'AI Diagnosis' : 'AI निदान'}
            </span>
          </div>
        </button>
        
        <button
          onClick={() => onNavigate('voice')}
          className="group btn-primary flex flex-col items-center justify-center gap-4 py-8 relative overflow-hidden animate-bounceIn animate-delay-600"
        >
          <div className="bg-white/20 p-4 rounded-2xl">
            <Mic className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="text-center">
            <span className="font-bold text-lg block">
              {language === 'english' ? 'Voice Assistant' : 'आवाज़ सहायक'}
            </span>
            <span className="text-sm opacity-90 animate-fadeInUp animate-delay-700">
              {language === 'english' ? 'Ask Questions' : 'प्रश्न पूछें'}
            </span>
          </div>
        </button>
      </div>

      {/* Premium Farm Stats Section */}
      <div className="mt-16 relative animate-scaleIn animate-delay-500">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-green-100 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black text-gray-900 mb-2">
              {language === 'english' ? 'Your Farm Overview' : 'आपके खेत की जानकारी'}
            </h3>
            <p className="text-gray-600 font-medium">
              {language === 'english' ? 'Farm Statistics & Health' : 'खेत के आंकड़े और स्वास्थ्य'}
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-8 text-center">
            <div className="group animate-bounceIn animate-delay-600">
              <div className="bg-green-100 p-6 rounded-2xl mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <div className="text-4xl font-black text-green-600 group-hover:scale-110 transition-transform duration-300">12</div>
              </div>
              <div className="text-lg font-bold text-gray-900 animate-fadeInUp animate-delay-700">
                {language === 'english' ? 'Crops' : 'फसलें'}
              </div>
              <div className="text-sm text-gray-600 animate-fadeInUp animate-delay-800">
                {language === 'english' ? 'Total Varieties' : 'कुल किस्में'}
              </div>
            </div>
            <div className="group animate-bounceIn animate-delay-700">
              <div className="bg-orange-100 p-6 rounded-2xl mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                <div className="text-4xl font-black text-orange-600 group-hover:scale-110 transition-transform duration-300">5</div>
              </div>
              <div className="text-lg font-bold text-gray-900 animate-fadeInUp animate-delay-800">
                {language === 'english' ? 'Acres' : 'एकड़'}
              </div>
              <div className="text-sm text-gray-600 animate-fadeInUp animate-delay-800">
                {language === 'english' ? 'Farm Area' : 'खेत का क्षेत्र'}
              </div>
            </div>
            <div className="group animate-bounceIn animate-delay-800">
              <div className="bg-blue-100 p-6 rounded-2xl mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <div className="text-4xl font-black text-blue-600 group-hover:scale-110 transition-transform duration-300">95%</div>
              </div>
              <div className="text-lg font-bold text-gray-900 animate-fadeInUp animate-delay-800">
                {language === 'english' ? 'Healthy' : 'स्वस्थ'}
              </div>
              <div className="text-sm text-gray-600 animate-fadeInUp animate-delay-800">
                {language === 'english' ? 'Crop Health' : 'फसल स्वास्थ्य'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] animate-fadeInUp">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 max-w-sm w-full mx-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {language === 'english' ? 'Login Required' : 'लॉगिन आवश्यक'}
              </h2>
              <p className="text-gray-600">
                {language === 'english' ? 'Please login to access your profile' : 'अपनी प्रोफाइल एक्सेस करने के लिए लॉगिन करें'}
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowLoginModal(false)
                  onNavigate('login')
                }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <LogIn className="w-5 h-5 mr-2" />
                {language === 'english' ? 'Login' : 'लॉगिन'}
              </button>
              
              <button
                onClick={() => {
                  setShowLoginModal(false)
                  onNavigate('signup')
                }}
                className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                {language === 'english' ? 'Create Account' : 'खाता बनाएं'}
              </button>
              
              <button
                onClick={() => setShowLoginModal(false)}
                className="w-full text-gray-500 py-2 text-sm hover:text-gray-700 transition-colors"
              >
                {language === 'english' ? 'Cancel' : 'रद्द करें'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}