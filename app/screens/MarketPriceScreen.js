import { ArrowLeft, TrendingUp, MapPin, Star, BarChart3, Activity, Bell, RefreshCw } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function MarketPriceScreen({ onNavigate }) {
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [isLive, setIsLive] = useState(true)
  
  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (isLive) {
        setLastUpdated(new Date())
        // Update prices with small random fluctuations
        setMarketData(prev => prev.map(crop => ({
          ...crop,
          markets: crop.markets.map(market => ({
            ...market,
            price: Math.max(1000, market.price + (Math.random() - 0.5) * 100)
          }))
        })))
      }
    }, 5000) // Update every 5 seconds
    
    return () => clearInterval(interval)
  }, [isLive])
  
  const [marketData, setMarketData] = useState([
    {
      crop: 'Soybean',
      cropHi: 'सोयाबीन',
      icon: '🌰',
      markets: [
        { name: 'Nagpur', nameHi: 'नागपुर', price: 5200, isHighest: false },
        { name: 'Amravati', nameHi: 'अमरावती', price: 5500, isHighest: true },
        { name: 'Wardha', nameHi: 'वर्धा', price: 5350, isHighest: false },
      ]
    },
    {
      crop: 'Cotton',
      cropHi: 'कपास',
      icon: '🌾',
      markets: [
        { name: 'Nagpur', nameHi: 'नागपुर', price: 6800, isHighest: false },
        { name: 'Wardha', nameHi: 'वर्धा', price: 7100, isHighest: true },
        { name: 'Akola', nameHi: 'अकोला', price: 6950, isHighest: false },
      ]
    },
    {
      crop: 'Tur Dal',
      cropHi: 'तुअर दाल',
      icon: '🫘',
      markets: [
        { name: 'Nagpur', nameHi: 'नागपुर', price: 8200, isHighest: true },
        { name: 'Amravati', nameHi: 'अमरावती', price: 7950, isHighest: false },
        { name: 'Yavatmal', nameHi: 'यवतमाल', price: 8100, isHighest: false },
      ]
    },
    {
      crop: 'Wheat',
      cropHi: 'गेहूं',
      icon: '🌾',
      markets: [
        { name: 'Nagpur', nameHi: 'नागपुर', price: 2350, isHighest: false },
        { name: 'Akola', nameHi: 'अकोला', price: 2420, isHighest: true },
        { name: 'Buldhana', nameHi: 'बुलढाणा', price: 2380, isHighest: false },
      ]
    },
    {
      crop: 'Rice',
      cropHi: 'चावल',
      icon: '🌾',
      markets: [
        { name: 'Nagpur', nameHi: 'नागपुर', price: 2850, isHighest: false },
        { name: 'Raipur', nameHi: 'रायपुर', price: 2950, isHighest: true },
        { name: 'Bhopal', nameHi: 'भोपाल', price: 2900, isHighest: false },
      ]
    },
    {
      crop: 'Maize',
      cropHi: 'मक्का',
      icon: '🌽',
      markets: [
        { name: 'Indore', nameHi: 'इंदौर', price: 1850, isHighest: true },
        { name: 'Ujjain', nameHi: 'उज्जैन', price: 1800, isHighest: false },
        { name: 'Dewas', nameHi: 'देवास', price: 1820, isHighest: false },
      ]
    }
  ])
  
  // Calculate market insights
  const getMarketInsights = () => {
    const totalCrops = marketData.length
    const avgPriceIncrease = 2.5
    const highestGainer = 'Soybean'
    const mostVolatile = 'Cotton'
    
    return { totalCrops, avgPriceIncrease, highestGainer, mostVolatile }
  }
  
  const insights = getMarketInsights()
  
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    })
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8 xl:p-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100">
      {/* Aesthetic Header */}
      <header className="flex items-center justify-between mb-8 animate-fadeInUp">
        <div className="flex items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="group mr-4 p-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-orange-200 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-6 h-6 text-orange-700 group-hover:scale-110 transition-transform duration-300" />
          </button>
          <div>
            <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Market Prices</h1>
            <p className="text-orange-600 font-semibold text-lg">बाजार भाव</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full">
            <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
            <span className="text-orange-700 text-sm font-medium">
              {isLive ? 'LIVE' : 'PAUSED'}
            </span>
          </div>
          <button
            onClick={() => setIsLive(!isLive)}
            className="p-2 bg-orange-100 hover:bg-orange-200 rounded-full border border-orange-300 transition-all duration-300"
          >
            {isLive ? <RefreshCw className="w-4 h-4 text-orange-700 animate-spin" /> : <RefreshCw className="w-4 h-4 text-orange-700" />}
          </button>
        </div>
      </header>

      {/* Aesthetic Info Banner */}
      <div className="relative mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200/50 to-amber-200/50 rounded-3xl blur-xl"></div>
        <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-orange-200 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-4 mr-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-800 mb-1">Live Market Rates</h2>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <p className="text-orange-600 font-medium">Last updated: {formatTime(lastUpdated)}</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 rounded-2xl p-4 text-center border border-orange-200">
              <p className="text-gray-800 font-bold text-lg">Per Quintal</p>
              <p className="text-orange-600 font-medium">(100kg) प्रति क्विंटल</p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Market Prices Grid */}
      <div className="space-y-6 sm:space-y-8">
        {marketData.map((crop, cropIndex) => (
          <div key={cropIndex} className="group relative animate-fadeInUp" style={{ animationDelay: `${0.2 + cropIndex * 0.1}s` }}>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/80 to-amber-100/80 rounded-3xl blur-sm group-hover:blur-none transition-all duration-300"></div>
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Aesthetic Crop Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-orange-100 rounded-2xl p-4 mr-4 border border-orange-200">
                    <span className="text-4xl">{crop.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-800">{crop.crop}</h3>
                    <p className="text-orange-600 font-semibold">{crop.cropHi}</p>
                  </div>
                </div>
                <div className="bg-orange-100 px-4 py-2 rounded-full border border-orange-300">
                  <span className="text-orange-700 text-sm font-bold">LIVE</span>
                </div>
              </div>

              {/* Enhanced Market Prices */}
              <div className="space-y-3">
                {crop.markets.map((market, marketIndex) => (
                  <div 
                    key={marketIndex} 
                    className={`relative p-4 rounded-2xl transition-all duration-300 ${
                      market.isHighest 
                        ? 'bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300' 
                        : 'bg-orange-50 hover:bg-orange-100 border border-orange-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="bg-orange-200 rounded-xl p-2 mr-3 flex-shrink-0">
                          <MapPin className="w-5 h-5 text-orange-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-lg text-gray-800 truncate">{market.name}</p>
                              <p className="text-orange-600 font-medium truncate">{market.nameHi}</p>
                            </div>
                            {market.isHighest && (
                              <div className="ml-2 flex items-center bg-amber-200 px-2 py-1 rounded-full border border-amber-300 flex-shrink-0">
                                <Star className="w-3 h-3 text-amber-700 fill-current mr-1" />
                                <span className="text-amber-800 font-bold text-xs">BEST</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right ml-4 flex-shrink-0">
                        <p className={`text-xl font-black ${
                          market.isHighest ? 'text-amber-700' : 'text-gray-800'
                        }`}>
                          ₹{market.price.toLocaleString()}
                        </p>
                        <p className="text-orange-600 text-xs font-medium">per quintal</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Aesthetic Best Price Recommendation */}
              {crop.markets.find(m => m.isHighest) && (
                <div className="mt-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-200/50 to-emerald-200/50 rounded-2xl blur-sm"></div>
                  <div className="relative bg-green-50 rounded-2xl p-4 border border-green-200">
                    <div className="flex items-center">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-2 mr-3">
                        <span className="text-white text-xl">🎯</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">
                          Best: {crop.markets.find(m => m.isHighest).name} - ₹{crop.markets.find(m => m.isHighest).price.toLocaleString()}
                        </p>
                        <p className="text-green-600 font-medium">
                          सबसे अच्छा: {crop.markets.find(m => m.isHighest).nameHi}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Market Analysis Dashboard */}
      <div className="mt-12 space-y-8">
        {/* Market Insights */}
        <div className="relative animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-indigo-200/50 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-4 mr-6 shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-800">Market Analysis</h3>
                <p className="text-blue-600 font-semibold text-lg">बाजार विश्लेषण</p>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-200">
                <div className="text-3xl font-black text-blue-600 mb-2">{insights.totalCrops}</div>
                <p className="text-gray-800 font-bold text-sm">Active Crops</p>
                <p className="text-blue-600 text-xs">सक्रिय फसलें</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-200">
                <div className="text-3xl font-black text-green-600 mb-2">+{insights.avgPriceIncrease}%</div>
                <p className="text-gray-800 font-bold text-sm">Avg Growth</p>
                <p className="text-green-600 text-xs">औसत वृद्धि</p>
              </div>
              <div className="bg-amber-50 rounded-2xl p-4 text-center border border-amber-200">
                <div className="text-xl font-black text-amber-600 mb-2">{insights.highestGainer}</div>
                <p className="text-gray-800 font-bold text-sm">Top Gainer</p>
                <p className="text-amber-600 text-xs">सर्वोच्च लाभ</p>
              </div>
              <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-200">
                <div className="text-xl font-black text-red-600 mb-2">{insights.mostVolatile}</div>
                <p className="text-gray-800 font-bold text-sm">Most Volatile</p>
                <p className="text-red-600 text-xs">सबसे अस्थिर</p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Price Alerts */}
        <div className="relative animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200/50 to-pink-200/50 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-purple-200 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-4 mr-6 shadow-lg">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-800">Price Alerts</h3>
                  <p className="text-purple-600 font-semibold text-lg">मूल्य अलर्ट</p>
                </div>
              </div>
              <div className="bg-purple-100 px-4 py-2 rounded-full border border-purple-300">
                <span className="text-purple-700 text-sm font-bold">3 ACTIVE</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-2xl p-4 border border-green-200 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <p className="font-bold text-gray-800">Soybean crossed ₹5,400</p>
                    <p className="text-green-600 text-sm">Target price reached in Amravati</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{formatTime(new Date(Date.now() - 120000))}</span>
              </div>
              <div className="bg-orange-50 rounded-2xl p-4 border border-orange-200 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <p className="font-bold text-gray-800">Cotton price surge +5%</p>
                    <p className="text-orange-600 text-sm">Unexpected increase in Wardha market</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{formatTime(new Date(Date.now() - 300000))}</span>
              </div>
              <div className="bg-blue-50 rounded-2xl p-4 border border-blue-200 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                  <div>
                    <p className="font-bold text-gray-800">Rice demand increasing</p>
                    <p className="text-blue-600 text-sm">Festival season driving prices up</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{formatTime(new Date(Date.now() - 600000))}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Market Trends */}
        <div className="relative animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-green-200/50 to-emerald-200/50 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-green-200 shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 mr-6 shadow-lg">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-800">Live Market Activity</h3>
                <p className="text-green-600 font-semibold text-lg">लाइव बाजार गतिविधि</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-2xl p-4 text-center border border-green-200">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
                  <span className="text-2xl font-black text-green-600">+3.2%</span>
                </div>
                <p className="text-gray-800 font-bold">Soybean Rally</p>
                <p className="text-green-600 text-sm">Strong buying interest</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-200">
                <div className="flex items-center justify-center mb-2">
                  <Activity className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-2xl font-black text-blue-600">~0%</span>
                </div>
                <p className="text-gray-800 font-bold">Cotton Stable</p>
                <p className="text-blue-600 text-sm">Sideways movement</p>
              </div>
              <div className="bg-red-50 rounded-2xl p-4 text-center border border-red-200">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl mr-2">🔥</span>
                  <span className="text-2xl font-black text-red-600">HOT</span>
                </div>
                <p className="text-gray-800 font-bold">Tur Dal Surge</p>
                <p className="text-red-600 text-sm">Record high demand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
