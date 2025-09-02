import { ArrowLeft, LogIn, Eye, EyeOff, Mail, Lock, Globe } from 'lucide-react'
import { useState } from 'react'

export default function LoginScreen({ onNavigate }) {
  const [language, setLanguage] = useState('english')
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'hindi' : 'english')
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleLogin = () => {
    // Simulate login process
    alert(language === 'english' ? 'Login successful!' : 'लॉगिन सफल!')
    onNavigate('home')
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="flex items-center justify-between mb-8 animate-fadeInUp">
        <div className="flex items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="mr-4 p-2 rounded-full hover:bg-white/50 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-green-800">
              {language === 'english' ? 'Login' : 'लॉगिन'}
            </h1>
            <p className="text-green-600 font-medium">
              {language === 'english' ? 'Welcome back to Crop Intel' : 'क्रॉप इंटेल में वापस स्वागत है'}
            </p>
          </div>
        </div>
        
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
      </header>

      {/* Login Form */}
      <div className="max-w-md mx-auto">
        <div className="relative animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-green-50/80 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-green-200 shadow-2xl">
            
            {/* Logo Section */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl text-white font-bold">C</span>
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">
                {language === 'english' ? 'Crop Intel' : 'क्रॉप इंटेल'}
              </h2>
              <p className="text-gray-600">
                {language === 'english' ? 'Sign in to your account' : 'अपने खाते में साइन इन करें'}
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                {language === 'english' ? 'Email Address' : 'ईमेल पता'}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder={language === 'english' ? 'Enter your email' : 'अपना ईमेल दर्ज करें'}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                {language === 'english' ? 'Password' : 'पासवर्ड'}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder={language === 'english' ? 'Enter your password' : 'अपना पासवर्ड दर्ज करें'}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                <span className="ml-2 text-sm text-gray-600">
                  {language === 'english' ? 'Remember me' : 'मुझे याद रखें'}
                </span>
              </label>
              <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                {language === 'english' ? 'Forgot password?' : 'पासवर्ड भूल गए?'}
              </button>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <LogIn className="w-5 h-5 mr-2" />
              {language === 'english' ? 'Sign In' : 'साइन इन'}
            </button>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                {language === 'english' ? "Don't have an account?" : 'कोई खाता नहीं है?'}
                <button
                  onClick={() => onNavigate('signup')}
                  className="ml-2 text-green-600 hover:text-green-700 font-bold"
                >
                  {language === 'english' ? 'Sign Up' : 'साइन अप'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
