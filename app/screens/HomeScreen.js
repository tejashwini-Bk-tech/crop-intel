import { CloudRain, TrendingUp, Sprout, Mic, Camera, Globe, User, LogIn, UserPlus } from 'lucide-react'
import { useState } from 'react'

export default function HomeScreen({ onNavigate }) {
  const [language, setLanguage] = useState('english')
  const [farmStats, setFarmStats] = useState(null)
  const [form, setForm] = useState({ crops: '', acres: '', health: '' })
  const [saving, setSaving] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'hindi' : 'english')
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSaving(true)
    setTimeout(() => {
      setFarmStats({
        crops: Number(form.crops),
        acres: Number(form.acres),
        health: Number(form.health)
      })
      setSaving(false)
      setForm({ crops: '', acres: '', health: '' })
    }, 500)
  }

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 pb-24 lg:pb-8 relative">
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

      {/* Farm Stats Input Section */}
      <div className="max-w-xl mx-auto mb-10 bg-white/90 rounded-2xl p-6 border border-green-100 shadow">
        <h2 className="text-xl font-bold mb-4 text-green-700">Add/Update Your Farm Stats</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="number"
            name="crops"
            value={form.crops}
            onChange={handleChange}
            placeholder="Number of Crops"
            className="px-4 py-2 rounded border"
            required
          />
          <input
            type="number"
            name="acres"
            value={form.acres}
            onChange={handleChange}
            placeholder="Farm Acres"
            className="px-4 py-2 rounded border"
            required
          />
          <input
            type="number"
            name="health"
            value={form.health}
            onChange={handleChange}
            placeholder="Crop Health (%)"
            min="0"
            max="100"
            className="px-4 py-2 rounded border"
            required
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-3 bg-green-600 text-white px-4 py-2 rounded font-bold mt-2"
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Save Stats'}
          </button>
        </form>
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
          {farmStats ? (
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-8 text-center">
              <div className="group animate-bounceIn animate-delay-600">
                <div className="bg-green-100 p-6 rounded-2xl mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <div className="text-4xl font-black text-green-600 group-hover:scale-110 transition-transform duration-300">{farmStats.crops}</div>
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
                  <div className="text-4xl font-black text-orange-600 group-hover:scale-110 transition-transform duration-300">{farmStats.acres}</div>
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
                  <div className="text-4xl font-black text-blue-600 group-hover:scale-110 transition-transform duration-300">{farmStats.health}%</div>
                </div>
                <div className="text-lg font-bold text-gray-900 animate-fadeInUp animate-delay-800">
                  {language === 'english' ? 'Healthy' : 'स्वस्थ'}
                </div>
                <div className="text-sm text-gray-600 animate-fadeInUp animate-delay-800">
                  {language === 'english' ? 'Crop Health' : 'फसल स्वास्थ्य'}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              No farm stats found. Please add your farm details above.
            </div>
          )}
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