import { ArrowLeft, MapPin, Thermometer, Droplets, Wind, Eye, Sunrise, Sunset, CalendarDays } from 'lucide-react'
import { useState } from 'react'

export default function WeatherScreen({ onNavigate }) {
  const [city, setCity] = useState('Nagpur')
  const [weatherData, setWeatherData] = useState(null)
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async (e) => {
  e.preventDefault()
  setLoading(true)
  setError('')
  setWeatherData(null)
  setForecast([])
  try {
    const apiKey = 'c87cdfb7ea4ba3cbc9d5494ac6f7be87'
    // 1. Get current weather
    const currentRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${apiKey}&units=metric`
    )
    const currentData = await currentRes.json()
    if (!currentData.main) throw new Error('City not found')
    setWeatherData({
      location: `${currentData.name}, ${currentData.sys.country}`,
      temperature: Math.round(currentData.main.temp),
      condition: currentData.weather[0].main,
      icon: currentData.weather[0].icon === '01d' ? '☀️' : currentData.weather[0].icon === '02d' ? '⛅' : '🌧',
      humidity: currentData.main.humidity,
      windSpeed: Math.round(currentData.wind.speed),
      visibility: currentData.visibility ? Math.round(currentData.visibility / 1000) : 'N/A',
      sunrise: new Date(currentData.sys.sunrise * 1000).toLocaleTimeString().slice(0,5),
      sunset: new Date(currentData.sys.sunset * 1000).toLocaleTimeString().slice(0,5),
    })

    // 2. Get 5-day forecast (every 3 hours)
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city.trim()}&appid=${apiKey}&units=metric`
    )
    const forecastData = await forecastRes.json()
    if (!forecastData.list) throw new Error('Forecast data not found')

    // Group forecast by day
    const daily = {}
    forecastData.list.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString()
      if (!daily[date]) daily[date] = []
      daily[date].push(item)
    })
    // Get one forecast per day (e.g., midday)
    const forecastArr = Object.values(daily).slice(0, 5).map(dayArr => {
      const midIdx = Math.floor(dayArr.length / 2)
      return dayArr[midIdx]
    })
    setForecast(forecastArr)
  } catch (err) {
    setError(err.message)
  }
  setLoading(false)
}

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 xl:p-12 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100">
      <header className="flex items-center justify-between mb-8">
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
       <form onSubmit={fetchWeather} className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
  <input
    type="text"
    value={city}
    onChange={e => setCity(e.target.value)}
    placeholder="Enter city"
    className="px-4 py-2 rounded border w-full"
    required
  />
  <button
    type="submit"
    className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded font-bold transition-all duration-200 hover:bg-blue-700 active:scale-95"
    disabled={loading}
  >
    {loading ? 'Loading...' : 'Get Weather'}
  </button>
</form>
      </header>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {weatherData && (
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 to-blue-300/50 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-sky-200 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="bg-sky-100 rounded-2xl p-3 mr-4">
                  <MapPin className="w-6 h-6 text-sky-700" />
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-800">{weatherData.location}</p>
                </div>
              </div>
              <div className="text-6xl sm:text-7xl">{weatherData.icon}</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent mb-2">{weatherData.temperature}°C</div>
                <p className="text-gray-800 font-bold text-xl">{weatherData.condition}</p>
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
                  <Sunset className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{weatherData.sunset}</div>
                  <div className="text-amber-600 text-sm font-medium">Sunset</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {forecast.length > 0 && (
        <div className="mb-8 ">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CalendarDays className="w-6 h-6 text-blue-600" />
            5-Day Forecast
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
  {forecast.map((day, idx) => (
    <div key={idx} className="bg-white rounded-xl shadow p-4 text-center border border-blue-100">
      <div className="font-bold text-lg mb-2">
        {new Date(day.dt * 1000).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
      </div>
      <div className="text-4xl mb-2">
        {day.weather[0].icon === '01d' ? '☀️' : day.weather[0].icon === '02d' ? '⛅' : '🌧'}
      </div>
      <div className="text-xl font-bold">{Math.round(day.main.temp)}°C</div>
      <div className="text-gray-600">{day.weather[0].main}</div>
      <div className="text-sm text-blue-600">
        Min: {Math.round(day.main.temp_min)}°C / Max: {Math.round(day.main.temp_max)}°C
      </div>
    </div>
  ))}
</div>
        </div>
      )}

      {!weatherData && !loading && (
        <div className="text-center text-gray-500 mt-12">
          Enter a city to see live weather and forecast.
        </div>
      )}
    </div>
  )
}