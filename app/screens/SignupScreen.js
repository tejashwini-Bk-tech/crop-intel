import { ArrowLeft, UserPlus, Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react'
import { useState } from 'react'

export default function SignupScreen({ onNavigate }) {
  const [language, setLanguage] = useState('english')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSignup = () => {
    if (formData.password !== formData.confirmPassword) {
      alert(language === 'english' ? 'Passwords do not match!' : 'पासवर्ड मेल नहीं खाते!')
      return
    }
    // Simulate signup process
    alert(language === 'english' ? 'Account created successfully!' : 'खाता सफलतापूर्वक बनाया गया!')
    onNavigate('home')
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="flex items-center mb-8 animate-fadeInUp">
        <button 
          onClick={() => onNavigate('home')}
          className="mr-4 p-2 rounded-full hover:bg-white/50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-green-800">
            {language === 'english' ? 'Sign Up' : 'साइन अप'}
          </h1>
          <p className="text-green-600 font-medium">
            {language === 'english' ? 'Join Crop Intel community' : 'क्रॉप इंटेल समुदाय में शामिल हों'}
          </p>
        </div>
      </header>

      {/* Signup Form */}
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
                {language === 'english' ? 'Create Account' : 'खाता बनाएं'}
              </h2>
              <p className="text-gray-600">
                {language === 'english' ? 'Start your smart farming journey' : 'अपनी स्मार्ट खेती की यात्रा शुरू करें'}
              </p>
            </div>

            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                {language === 'english' ? 'Full Name' : 'पूरा नाम'}
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder={language === 'english' ? 'Enter your full name' : 'अपना पूरा नाम दर्ज करें'}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-4">
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

            {/* Phone Input */}
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                {language === 'english' ? 'Phone Number' : 'फोन नंबर'}
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder={language === 'english' ? 'Enter your phone number' : 'अपना फोन नंबर दर्ज करें'}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                {language === 'english' ? 'Password' : 'पासवर्ड'}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder={language === 'english' ? 'Create a password' : 'पासवर्ड बनाएं'}
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

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                {language === 'english' ? 'Confirm Password' : 'पासवर्ड की पुष्टि करें'}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder={language === 'english' ? 'Confirm your password' : 'अपने पासवर्ड की पुष्टि करें'}
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                />
                <button
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="mb-6">
              <label className="flex items-start">
                <input type="checkbox" className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-1" />
                <span className="ml-2 text-sm text-gray-600">
                  {language === 'english' 
                    ? 'I agree to the Terms of Service and Privacy Policy'
                    : 'मैं सेवा की शर्तों और गोपनीयता नीति से सहमत हूं'
                  }
                </span>
              </label>
            </div>

            {/* Signup Button */}
            <button
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              {language === 'english' ? 'Create Account' : 'खाता बनाएं'}
            </button>

            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                {language === 'english' ? 'Already have an account?' : 'पहले से खाता है?'}
                <button
                  onClick={() => onNavigate('login')}
                  className="ml-2 text-green-600 hover:text-green-700 font-bold"
                >
                  {language === 'english' ? 'Sign In' : 'साइन इन'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
