import { ArrowLeft, Sprout, Beaker, Calendar, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function CropAdvisoryScreen({ onNavigate }) {
  const [soilType, setSoilType] = useState('')
  const [lastCrop, setLastCrop] = useState('')
  const [showRecommendation, setShowRecommendation] = useState(false)

  const soilOptions = [
    { value: 'black', label: 'Black Soil', labelHi: 'काली मिट्टी' },
    { value: 'red', label: 'Red Soil', labelHi: 'लाल मिट्टी' },
    { value: 'sandy', label: 'Sandy Soil', labelHi: 'बलुई मिट्टी' },
  ]

  const cropOptions = [
    { value: 'cotton', label: 'Cotton', labelHi: 'कपास' },
    { value: 'soybean', label: 'Soybean', labelHi: 'सोयाबीन' },
    { value: 'wheat', label: 'Wheat', labelHi: 'गेहूं' },
    { value: 'tur', label: 'Tur Dal', labelHi: 'तुअर दाल' },
    { value: 'rice', label: 'Rice', labelHi: 'चावल' },
    { value: 'none', label: 'First Time Farming', labelHi: 'पहली बार खेती' },
  ]

  const getRecommendation = () => {
    if (!soilType || !lastCrop) return null

    const recommendations = {
      'black-cotton': {
        crop: 'Soybean',
        cropHi: 'सोयाबीन',
        icon: '🌰',
        reason: 'Black soil is ideal for soybean after cotton rotation',
        reasonHi: 'कपास के बाद काली मिट्टी में सोयाबीन उत्तम है',
        fertilizer: '50 kg DAP + 20 kg Urea per acre',
        fertilizerHi: '50 किग्रा डीएपी + 20 किग्रा यूरिया प्रति एकड़',
        season: 'Kharif Season (June-October)',
        seasonHi: 'खरीफ सीजन (जून-अक्टूबर)'
      },
      'black-soybean': {
        crop: 'Tur Dal',
        cropHi: 'तुअर दाल',
        icon: '🫘',
        reason: 'Tur dal helps restore soil nitrogen after soybean',
        reasonHi: 'सोयाबीन के बाद तुअर दाल मिट्टी में नाइट्रोजन बहाल करती है',
        fertilizer: '40 kg DAP + 15 kg Urea per acre',
        fertilizerHi: '40 किग्रा डीएपी + 15 किग्रा यूरिया प्रति एकड़',
        season: 'Kharif Season (June-November)',
        seasonHi: 'खरीफ सीजन (जून-नवंबर)'
      },
      'red-wheat': {
        crop: 'Cotton',
        cropHi: 'कपास',
        icon: '🌾',
        reason: 'Cotton grows well in red soil after wheat harvest',
        reasonHi: 'गेहूं की कटाई के बाद लाल मिट्टी में कपास अच्छी होती है',
        fertilizer: '60 kg DAP + 30 kg Urea + 20 kg Potash per acre',
        fertilizerHi: '60 किग्रा डीएपी + 30 किग्रा यूरिया + 20 किग्रा पोटाश प्रति एकड़',
        season: 'Kharif Season (May-October)',
        seasonHi: 'खरीफ सीजन (मई-अक्टूबर)'
      },
      'sandy-rice': {
        crop: 'Wheat',
        cropHi: 'गेहूं',
        icon: '🌾',
        reason: 'Wheat is suitable for sandy soil after rice',
        reasonHi: 'चावल के बाद बलुई मिट्टी में गेहूं उपयुक्त है',
        fertilizer: '45 kg DAP + 25 kg Urea per acre',
        fertilizerHi: '45 किग्रा डीएपी + 25 किग्रा यूरिया प्रति एकड़',
        season: 'Rabi Season (November-April)',
        seasonHi: 'रबी सीजन (नवंबर-अप्रैल)'
      },
      'default': {
        crop: 'Soybean',
        cropHi: 'सोयाबीन',
        icon: '🌰',
        reason: 'Soybean is a versatile crop suitable for most soil types',
        reasonHi: 'सोयाबीन अधिकांश मिट्टी के प्रकारों के लिए उपयुक्त है',
        fertilizer: '50 kg DAP + 20 kg Urea per acre',
        fertilizerHi: '50 किग्रा डीएपी + 20 किग्रा यूरिया प्रति एकड़',
        season: 'Kharif Season (June-October)',
        seasonHi: 'खरीफ सीजन (जून-अक्टूबर)'
      }
    }

    const key = `${soilType}-${lastCrop}`
    return recommendations[key] || recommendations.default
  }

  const handleGetRecommendation = () => {
    if (soilType && lastCrop) {
      setShowRecommendation(true)
    }
  }

  const recommendation = getRecommendation()

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 xl:p-12">
      {/* Professional Header */}
      <header className="flex items-center justify-between mb-8 animate-fadeInUp">
        <div className="flex items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="group mr-4 p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">Crop Advisory</h1>
            <p className="text-white/80 font-semibold text-lg">फसल सलाह</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white/70 text-sm font-medium">AI Powered</span>
        </div>
      </header>

      {/* Professional Input Form */}
      <div className="relative mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/30 to-green-600/30 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-emerald-400 to-green-600 rounded-2xl p-4 mr-6 shadow-lg">
              <Sprout className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white">Farmer Inputs</h3>
              <p className="text-white/80 font-semibold">किसान की जानकारी</p>
            </div>
          </div>

          {/* Soil Type Selection */}
          <div className="mb-6">
            <label className="block text-xl font-bold text-white mb-4">
              Soil Type / मिट्टी का प्रकार
            </label>
          <div className="grid grid-cols-1 gap-3">
            {soilOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSoilType(option.value)}
                className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                  soilType === option.value
                    ? 'border-farm-green-500 bg-farm-green-50 text-farm-green-800'
                    : 'border-gray-200 bg-white hover:border-farm-green-300 hover:bg-farm-green-50'
                }`}
              >
                <p className="font-semibold">{option.label}</p>
                <p className="text-sm text-gray-600">{option.labelHi}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Last Crop Selection */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Last Crop / पिछली फसल
          </label>
          <div className="grid grid-cols-1 gap-3">
            {cropOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setLastCrop(option.value)}
                className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                  lastCrop === option.value
                    ? 'border-farm-green-500 bg-farm-green-50 text-farm-green-800'
                    : 'border-gray-200 bg-white hover:border-farm-green-300 hover:bg-farm-green-50'
                }`}
              >
                <p className="font-semibold">{option.label}</p>
                <p className="text-sm text-gray-600">{option.labelHi}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Get Recommendation Button */}
        <button
          onClick={handleGetRecommendation}
          disabled={!soilType || !lastCrop}
          className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
            soilType && lastCrop
              ? 'btn-primary'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Get Crop Recommendation
          <span className="block text-sm mt-1">फसल की सिफारिश पाएं</span>
        </button>
        </div>
      </div>

      {/* Recommendation Output */}
      {showRecommendation && recommendation && (
        <div className="card bg-gradient-to-br from-farm-green-50 to-green-100 border-farm-green-200 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">{recommendation.icon}</span>
            <div>
              <h3 className="text-lg font-bold text-farm-green-800">Recommended Crop</h3>
              <p className="text-sm text-farm-green-600">सुझाई गई फसल</p>
            </div>
          </div>

          {/* Crop Recommendation */}
          <div className="mb-6 p-4 bg-white rounded-xl border border-farm-green-200">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="text-xl font-bold text-farm-green-800">{recommendation.crop}</h4>
                <p className="text-farm-green-600">{recommendation.cropHi}</p>
              </div>
              <Calendar className="w-6 h-6 text-farm-green-600" />
            </div>
            <p className="text-gray-700 mb-2">{recommendation.reason}</p>
            <p className="text-sm text-gray-600">{recommendation.reasonHi}</p>
            
            <div className="mt-4 p-3 bg-sky-blue-50 rounded-lg border border-sky-blue-200">
              <div className="flex items-center mb-2">
                <Calendar className="w-4 h-4 text-sky-blue-600 mr-2" />
                <span className="font-semibold text-sky-blue-800">Planting Season</span>
              </div>
              <p className="text-sky-blue-700">{recommendation.season}</p>
              <p className="text-sm text-sky-blue-600">{recommendation.seasonHi}</p>
            </div>
          </div>

          {/* Fertilizer Plan */}
          <div className="p-4 bg-white rounded-xl border border-harvest-yellow-200">
            <div className="flex items-center mb-3">
              <Beaker className="w-6 h-6 text-harvest-yellow-600 mr-3" />
              <div>
                <h4 className="font-bold text-harvest-yellow-800">Fertilizer Plan</h4>
                <p className="text-sm text-harvest-yellow-600">उर्वरक योजना</p>
              </div>
            </div>
            <div className="bg-harvest-yellow-50 p-4 rounded-lg">
              <p className="text-lg font-semibold text-harvest-yellow-800 mb-2">
                {recommendation.fertilizer}
              </p>
              <p className="text-sm text-harvest-yellow-600">
                {recommendation.fertilizerHi}
              </p>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-blue-50 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">DAP</p>
                <p className="font-bold text-blue-700">50kg</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Urea</p>
                <p className="font-bold text-green-700">20kg</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Potash</p>
                <p className="font-bold text-purple-700">Optional</p>
              </div>
            </div>
          </div>

          {/* Additional Tips */}
          <div className="mt-4 p-4 bg-gradient-to-r from-sky-blue-50 to-blue-50 rounded-xl border border-sky-blue-200">
            <h4 className="font-bold text-sky-blue-800 mb-2 flex items-center">
              <span className="mr-2">💡</span>
              Farming Tips
              <span className="text-sm ml-2 text-sky-blue-600">कृषि सुझाव</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2">🌱</span>
                <div>
                  <p className="text-gray-700">Plant after first monsoon shower for better germination</p>
                  <p className="text-xs text-gray-600">बेहतर अंकुरण के लिए पहली बारिश के बाद बुआई करें</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">💧</span>
                <div>
                  <p className="text-gray-700">Maintain proper drainage to prevent waterlogging</p>
                  <p className="text-xs text-gray-600">जल भराव से बचने के लिए उचित जल निकासी बनाए रखें</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔄</span>
                <div>
                  <p className="text-gray-700">Crop rotation improves soil health and yield</p>
                  <p className="text-xs text-gray-600">फसल चक्र मिट्टी के स्वास्थ्य और उपज में सुधार करता है</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Reset Button */}
      {showRecommendation && (
        <button
          onClick={() => {
            setSoilType('')
            setLastCrop('')
            setShowRecommendation(false)
          }}
          className="w-full mt-4 btn-outline animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          Get New Recommendation
          <span className="block text-sm mt-1">नई सिफारिश पाएं</span>
        </button>
      )}
    </div>
  )
}
