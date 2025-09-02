import { UserPlus, Eye, EyeOff, Mail, Lock, Globe } from 'lucide-react'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function SignupScreen({ onNavigate }) {
  const [language, setLanguage] = useState('english')
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'hindi' : 'english')
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setMessage('')
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password
    })
    if (error) {
      setMessage(language === 'english' ? error.message : 'साइनअप विफल!')
    } else {
      setMessage(language === 'english'
        ? 'Signup successful! Check your email for confirmation.'
        : 'साइनअप सफल! पुष्टि के लिए अपना ईमेल देखें।')
      setTimeout(() => onNavigate('login'), 2000)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 border border-green-100 shadow-xl max-w-md w-full text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
            <span className="text-3xl text-white font-bold">C</span>
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">
              {language === 'english' ? 'Crop Intel' : 'क्रॉप इंटेल'}
            </h1>
            <p className="text-green-600 font-semibold text-lg">
              {language === 'english' ? 'Smart Farming Solutions' : 'स्मार्ट कृषि समाधान'}
            </p>
          </div>
        </div>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-green-500" />
            <input
              type="email"
              placeholder={language === 'english' ? 'Email' : 'ईमेल'}
              value={formData.email}
              onChange={e => handleInputChange('email', e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-green-500" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder={language === 'english' ? 'Password' : 'पासवर्ड'}
              value={formData.password}
              onChange={e => handleInputChange('password', e.target.value)}
              required
              className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-green-500"
              onClick={() => setShowPassword(s => !s)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            {language === 'english' ? 'Sign Up' : 'साइन अप'}
          </button>
          {message && (
            <p className="mt-2 text-center text-green-600">{message}</p>
          )}
        </form>
        <div className="flex justify-center mt-4">
          <button
            className="text-green-700 font-bold underline"
            onClick={() => onNavigate('login')}
          >
            {language === 'english'
              ? 'Already have an account? Login'
              : 'पहले से खाता है? लॉगिन करें'}
          </button>
        </div>
        <button
          onClick={toggleLanguage}
          className="mt-6 flex items-center space-x-2 bg-green-100 hover:bg-green-200 px-3 py-2 rounded-full border border-green-300 transition-all duration-300 shadow-sm mx-auto"
        >
          <Globe className="w-4 h-4 text-green-700" />
          <span className="text-sm font-bold text-green-700">
            {language === 'english' ? 'हिं' : 'EN'}
          </span>
        </button>
      </div>
    </div>
  )
}