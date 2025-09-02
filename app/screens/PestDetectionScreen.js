import { ArrowLeft, Camera, Upload, CheckCircle, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

export default function PestDetectionScreen({ onNavigate }) {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [detectionResult, setDetectionResult] = useState(null)
  const [error, setError] = useState('')

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedImage(URL.createObjectURL(file))
      setIsAnalyzing(true)
      setShowResult(false)
      setError('')

      // Prepare form data
      const formData = new FormData()
      formData.append('image', file)

      try {
        const res = await fetch('https://api.crop.health/v1/detect', {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer lRDphvYHawiQNqYsPgFcJTNG5pJw67MvtjwvOroSXPyedkjEuk'
          },
          body: formData
        })
        if (!res.ok) throw new Error('Detection failed')
        const result = await res.json()
        setDetectionResult(result)
        setShowResult(true)
      } catch (err) {
        setError('Failed to detect pest/disease')
      }
      setIsAnalyzing(false)
    }
  }

  const resetDetection = () => {
    setUploadedImage(null)
    setIsAnalyzing(false)
    setShowResult(false)
    setDetectionResult(null)
    setError('')
  }

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <header className="flex items-center mb-6">
        <button 
          onClick={() => onNavigate('home')}
          className="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Pest Detection</h1>
          <p className="text-red-600 font-medium">कीट पहचान</p>
        </div>
      </header>

      {/* Upload Options */}
      {!uploadedImage && !isAnalyzing && !showResult && (
        <div className="space-y-6">
          <div className="card text-center">
            <div className="mb-6">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Upload Leaf Photo</h3>
              <p className="text-gray-600 mb-1">पत्ती की फोटो अपलोड करें</p>
              <p className="text-sm text-gray-500">
                Take a clear photo of the affected leaf for accurate disease detection
              </p>
            </div>
            <label className="block">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="w-full py-4 bg-gradient-to-r from-farm-green-500 to-green-600 hover:from-farm-green-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center">
                <Upload className="w-6 h-6 mr-3" />
                <div>
                  <p>Upload from Gallery</p>
                  <p className="text-sm opacity-90">गैलरी से अपलोड करें</p>
                </div>
              </div>
            </label>
          </div>
        </div>
      )}

      {/* Analyzing State */}
      {isAnalyzing && (
        <div className="card text-center">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-farm-green-400 to-green-500 flex items-center justify-center animate-pulse">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Analyzing Image...</h3>
            <p className="text-farm-green-600">छवि का विश्लेषण कर रहे हैं...</p>
          </div>
          {uploadedImage && (
            <div className="mb-4">
              <img 
                src={uploadedImage} 
                alt="Uploaded leaf" 
                className="w-32 h-32 object-cover rounded-xl mx-auto border-4 border-farm-green-200"
              />
            </div>
          )}
          <div className="bg-farm-green-50 p-4 rounded-xl">
            <p className="text-sm text-farm-green-700">
              Our AI is analyzing the leaf for diseases and pests...
            </p>
            <p className="text-xs text-farm-green-600 mt-1">
              हमारा एआई पत्ती में बीमारियों और कीटों का विश्लेषण कर रहा है...
            </p>
          </div>
        </div>
      )}

      {/* Detection Result */}
      {showResult && detectionResult && (
        <div className="space-y-6">
          {uploadedImage && (
            <div className="card text-center">
              <img 
                src={uploadedImage} 
                alt="Analyzed leaf" 
                className="w-40 h-40 object-cover rounded-xl mx-auto border-4 border-gray-200 mb-4"
              />
              <p className="text-sm text-gray-600">Analyzed Image / विश्लेषित छवि</p>
            </div>
          )}
          <div className="card bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🍂</span>
              <div>
                <h3 className="text-lg font-bold text-red-800">Disease Detected</h3>
                <p className="text-sm text-red-600">बीमारी का पता चला</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-sm text-gray-600">Confidence</p>
                <p className="text-lg font-bold text-red-700">{detectionResult.confidence ? `${detectionResult.confidence}%` : 'N/A'}</p>
              </div>
            </div>
            <div className="mb-4 p-4 bg-white rounded-xl border border-red-200">
              <h4 className="font-bold text-red-800 mb-1">{detectionResult.disease || 'Unknown Disease'}</h4>
              <div className="flex items-center">
                <AlertTriangle className="w-4 h-4 text-orange-500 mr-2" />
                <span className="text-sm text-orange-700">
                  Severity: {detectionResult.severity || 'N/A'}
                </span>
              </div>
            </div>
          </div>
          {/* Treatment Plan */}
          {detectionResult.treatment && (
            <div className="card bg-gradient-to-br from-farm-green-50 to-green-100 border-farm-green-200">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">💊</span>
                <div>
                  <h3 className="text-lg font-bold text-farm-green-800">Treatment Plan</h3>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-farm-green-200">
                  <h4 className="font-semibold text-farm-green-800 mb-2 flex items-center">
                    <span className="mr-2">🧪</span>
                    Recommended Spray
                  </h4>
                  <p className="text-farm-green-700 font-medium mb-1">{detectionResult.treatment.spray || 'N/A'}</p>
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dosage:</span>
                      <span className="font-medium">{detectionResult.treatment.dosage || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-medium">{detectionResult.treatment.frequency || 'N/A'}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-sky-blue-50 rounded-xl border border-sky-blue-200">
                  <h4 className="font-semibold text-sky-blue-800 mb-2 flex items-center">
                    <span className="mr-2">⏰</span>
                    Best Time to Apply
                  </h4>
                  <p className="text-sky-blue-700">{detectionResult.treatment.timing || 'N/A'}</p>
                </div>
              </div>
            </div>
          )}
          {/* Prevention Tips */}
          {detectionResult.prevention && (
            <div className="card bg-gradient-to-br from-harvest-yellow-50 to-orange-50 border-harvest-yellow-200">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🛡️</span>
                <div>
                  <h3 className="text-lg font-bold text-harvest-yellow-800">Prevention Tips</h3>
                </div>
              </div>
              <div className="space-y-3">
                {detectionResult.prevention.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-farm-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 text-sm">{tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={resetDetection}
              className="btn-outline py-4"
            >
              <div>
                <p>Scan Again</p>
                <p className="text-sm">फिर से स्कैन करें</p>
              </div>
            </button>
            <button
              onClick={() => onNavigate('voice')}
              className="btn-primary py-4"
            >
              <div>
                <p>Ask Expert</p>
                <p className="text-sm">विशेषज्ञ से पूछें</p>
              </div>
            </button>
          </div>
        </div>
      )}
      {error && (
        <div className="text-center text-red-500 mt-6">{error}</div>
      )}
    </div>
  )
}