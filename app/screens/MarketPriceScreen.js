import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'

const crops = [
  'Soybean', 'Cotton', 'Tur Dal', 'Wheat', 'Rice', 'Maize', 'Gram', 'Groundnut', 'Sugarcane', 'Onion', 'Potato', 'Tomato', 'Chilli', 'Paddy', 'Barley', 'Mustard', 'Peas', 'Sunflower', 'Jowar', 'Bajra'
]

const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
]

export default function MarketPriceScreen({ onNavigate }) {
  const [selectedCrop, setSelectedCrop] = useState(crops[0])
  const [selectedState, setSelectedState] = useState(states[0])
  const [marketPrices, setMarketPrices] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const apiKey = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b'

  const fetchPrices = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMarketPrices([])
    try {
      const url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${apiKey}&format=json&filters[commodity]=${selectedCrop}&filters[state]=${selectedState}`
      const res = await fetch(url)
      const data = await res.json()
      if (!data.records || data.records.length === 0) throw new Error('No data found')
      setMarketPrices(data.records.slice(0, 10)) // Show top 10
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100">
      <header className="flex items-center justify-between mb-8">
        <button onClick={() => onNavigate('home')} className="p-2 rounded bg-white border">Back</button>
        <h1 className="text-3xl font-bold text-orange-700">Market Prices</h1>
      </header>
      <form onSubmit={fetchPrices} className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto mb-6">
        <select
          value={selectedCrop}
          onChange={e => setSelectedCrop(e.target.value)}
          className="px-4 py-2 rounded border w-full"
        >
          {crops.map(crop => (
            <option key={crop} value={crop}>{crop}</option>
          ))}
        </select>
        <select
          value={selectedState}
          onChange={e => setSelectedState(e.target.value)}
          className="px-4 py-2 rounded border w-full"
        >
          {states.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full sm:w-auto bg-orange-600 text-white px-4 py-2 rounded font-bold transition-all duration-200 hover:bg-orange-700 active:scale-95"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Prices'}
        </button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {marketPrices.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {marketPrices.map((market, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4 border border-orange-100">
              <div className="font-bold text-lg mb-2">{market.market}</div>
              <div className="text-xl font-bold text-orange-700">₹{market.modal_price}</div>
              <div className="text-gray-600">{market.state}</div>
              <div className="text-xs text-orange-600">{market.arrival_date}</div>
            </div>
          ))}
        </div>
      )}
      {!loading && marketPrices.length === 0 && !error && (
        <div className="text-center text-gray-500 mt-12">
          Select crop and state, then click "Get Prices" to see live market rates.
        </div>
      )}
    </div>
  )
}