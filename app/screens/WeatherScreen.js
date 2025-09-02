import { ArrowLeft, MapPin, Thermometer, Droplets, Wind, Eye, Sunrise, Sunset } from 'lucide-react'

export default function WeatherScreen({ onNavigate }) {
  const weatherData = {
    location: 'Nagpur, Maharashtra',
    locationHi: 'नागपुर, महाराष्ट्र',
    temperature: 28,
    condition: 'Partly Cloudy',
    conditionHi: 'आंशिक बादल',
    icon: '⛅',
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    sunrise: '06:15',
    sunset: '18:45',
    forecast: [
      { day: 'Today', dayHi: 'आज', icon: '⛅', high: 32, low: 24, rain: 20 },
      { day: 'Tomorrow', dayHi: 'कल', icon: '🌧', high: 29, low: 22, rain: 80 },
      { day: 'Wed', dayHi: 'बुध', icon: '☀️', high: 35, low: 26, rain: 10 },
      { day: 'Thu', dayHi: 'गुरु', icon: '⛅', high: 33, low: 25, rain: 30 },
    ]
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 xl:p-12 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100">
      {/* Aesthetic Header */}
      <header className="flex items-center justify-between mb-8 animate-fadeInUp">
        <div className="flex items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="group mr-4 p-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-sky-200 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-6 h-6 text-sky-700 group-hover:scale-110 transition-transform duration-300" />
          </button>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">Weather Forecast</h1>
            <p className="text-sky-600 font-semibold text-lg">मौसम का हाल</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sky-700 text-sm font-medium">Live Data</span>
        </div>
      </header>

      {/* Aesthetic Current Weather Card */}
      <div className="relative mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 to-blue-300/50 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="bg-sky-100 rounded-2xl p-3 mr-4">
                <MapPin className="w-6 h-6 text-sky-700" />
              </div>
              <div>
                <p className="font-bold text-xl text-gray-800">{weatherData.location}</p>
                <p className="text-sky-600 font-medium">{weatherData.locationHi}</p>
              </div>
            </div>
            <div className="text-6xl sm:text-7xl animate-bounce" style={{animationDuration: '3s'}}>{weatherData.icon}</div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-center lg:text-left">
              <div className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent mb-2">{weatherData.temperature}°C</div>
              <p className="text-gray-800 font-bold text-xl">{weatherData.condition}</p>
              <p className="text-sky-600 font-medium">{weatherData.conditionHi}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sky-50 rounded-2xl p-4 text-center border border-sky-200">
                <Droplets className="w-8 h-8 text-sky-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{weatherData.humidity}%</div>
                <div className="text-sky-600 text-sm font-medium">Humidity</div>
              </div>
              <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-200">
                <Wind className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{weatherData.windSpeed}</div>
                <div className="text-blue-600 text-sm font-medium">km/h</div>
              </div>
              <div className="bg-indigo-50 rounded-2xl p-4 text-center border border-indigo-200">
                <Eye className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{weatherData.visibility}</div>
                <div className="text-indigo-600 text-sm font-medium">km</div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-200">
                <Sunrise className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">{weatherData.sunrise}</div>
                <div className="text-amber-600 text-sm font-medium">Sunrise</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Advisory Box */}
      <div className="relative mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/50 to-orange-200/50 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-2xl">
          <div className="flex items-start">
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-4 mr-6 flex-shrink-0 shadow-lg">
              <span className="text-white text-2xl">💡</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <h3 className="font-black text-2xl text-gray-800 mr-3">Farming Advisory</h3>
                <div className="bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  <span className="text-amber-700 text-sm font-bold">URGENT</span>
                </div>
              </div>
              <p className="text-amber-600 font-semibold mb-4">कृषि सलाह</p>
              <div className="bg-amber-50 rounded-2xl p-4 mb-4 border border-amber-200">
                <p className="text-gray-800 font-bold text-lg mb-2">
                  🌧️ Rain expected tomorrow. Delay irrigation for cotton and soybean crops.
                </p>
                <p className="text-amber-700 font-medium">
                  कल बारिश की संभावना है। कपास और सोयाबीन की फसलों में सिंचाई में देरी करें।
                </p>
              </div>
              <div className="flex items-center text-amber-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">Updated 2 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic 4-Day Forecast */}
      <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
        <h3 className="text-3xl font-black bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent mb-8 text-center sm:text-left">4-Day Forecast</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/80 to-blue-100/80 rounded-3xl blur-sm group-hover:blur-none transition-all duration-300"></div>
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 border border-sky-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{day.icon}</div>
                  <div className="mb-4">
                    <p className="font-black text-xl text-gray-800">{day.day}</p>
                    <p className="text-sky-600 font-medium">{day.dayHi}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-black text-gray-800">{day.high}°</span>
                      <span className="text-lg font-bold text-gray-500">{day.low}°</span>
                    </div>
                    
                    <div className="bg-sky-50 rounded-2xl p-3 flex items-center justify-center border border-sky-200">
                      <Droplets className="w-5 h-5 text-sky-600 mr-2" />
                      <span className="text-gray-800 font-bold">{day.rain}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
