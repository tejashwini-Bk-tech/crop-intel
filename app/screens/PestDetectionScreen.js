import { ArrowLeft, Camera, Upload, CheckCircle, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

export default function PestDetectionScreen({ onNavigate }) {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const mockDetectionResult = {
    disease: 'Leaf Spot Disease',
    diseaseHi: 'पत्ती धब्बा रोग',
    confidence: 92,
    severity: 'Moderate',
    severityHi: 'मध्यम',
    icon: '🍂',
    treatment: {
      spray: 'Copper Oxychloride 50% WP',
      sprayHi: 'कॉपर ऑक्सीक्लोराइड 50% WP',
      dosage: '2-3 grams per liter of water',
      dosageHi: '2-3 ग्राम प्रति लीटर पानी',
      frequency: 'Spray every 10-15 days',
      frequencyHi: 'हर 10-15 दिन में छिड़काव करें',
      timing: 'Early morning or evening',
      timingHi: 'सुबह जल्दी या शाम को'
    },
    prevention: [
      'Remove infected leaves immediately',
      'Ensure proper air circulation',
      'Avoid overhead watering',
      'Apply preventive fungicide spray'
    ],
    preventionHi: [
      'संक्रमित पत्तियों को तुरंत हटा दें',
      'उचित हवा का संचार सुनिश्चित करें',
      'ऊपर से पानी देने से बचें',
      'निवारक कवकनाशी स्प्रे का प्रयोग करें'
    ]
  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedImage(URL.createObjectURL(file))
      setIsAnalyzing(true)
      
      // Simulate AI analysis
      setTimeout(() => {
        setIsAnalyzing(false)
        setShowResult(true)
      }, 3000)
    }
  }

  const handleCameraCapture = () => {
    // Mock camera capture
    setUploadedImage('/api/placeholder/300/300')
    setIsAnalyzing(true)
    
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResult(true)
    }, 3000)
  }

  const resetDetection = () => {
    setUploadedImage(null)
    setIsAnalyzing(false)
    setShowResult(false)
  }

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <header className="flex items-center mb-6 animate-fadeInUp">
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

      {/* Future Vision Badge */}
      <div className="mb-6 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center">
          <span className="text-xl mr-3">🚀</span>
          <div>
            <p className="font-semibold text-purple-800">AI-Powered Feature</p>
            <p className="text-sm text-purple-600">एआई संचालित सुविधा</p>
          </div>
        </div>
      </div>

      {!uploadedImage && !isAnalyzing && !showResult && (
        <div className="space-y-6">
          {/* Upload Options */}
          <div className="card text-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Upload Leaf Photo</h3>
              <p className="text-gray-600 mb-1">पत्ती की फोटो अपलोड करें</p>
              <p className="text-sm text-gray-500">
                Take a clear photo of the affected leaf for accurate disease detection
              </p>
            </div>

            {/* Camera Button */}
            <button
              onClick={handleCameraCapture}
              className="w-full mb-4 py-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Camera className="w-6 h-6 mr-3" />
              <div>
                <p>Take Photo</p>
                <p className="text-sm opacity-90">फोटो लें</p>
              </div>
            </button>

            {/* Upload Button */}
            <label className="block">
              <input
                type="file"
                accept="image/*"
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

          {/* Instructions */}
          <div className="card bg-gradient-to-br from-sky-blue-50 to-blue-50 border-sky-blue-200 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold text-sky-blue-800 mb-3 flex items-center">
              <span className="mr-2">📋</span>
              Photo Guidelines
              <span className="text-sm ml-2 text-sky-blue-600">फोटो दिशानिर्देश</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">Take photo in good natural light</p>
                  <p className="text-xs text-gray-600">अच्छी प्राकृतिक रोशनी में फोटो लें</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">Focus on the affected leaf area</p>
                  <p className="text-xs text-gray-600">प्रभावित पत्ती के क्षेत्र पर ध्यान दें</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">Keep the image clear and stable</p>
                  <p className="text-xs text-gray-600">छवि को स्पष्ट और स्थिर रखें</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Analyzing State */}
      {isAnalyzing && (
        <div className="card text-center animate-fadeInUp">
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
      {showResult && (
        <div className="space-y-6 animate-fadeInUp">
          {/* Uploaded Image */}
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

          {/* Detection Result */}
          <div className="card bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{mockDetectionResult.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-red-800">Disease Detected</h3>
                <p className="text-sm text-red-600">बीमारी का पता चला</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-sm text-gray-600">Confidence</p>
                <p className="text-lg font-bold text-red-700">{mockDetectionResult.confidence}%</p>
              </div>
            </div>

            <div className="mb-4 p-4 bg-white rounded-xl border border-red-200">
              <h4 className="font-bold text-red-800 mb-1">{mockDetectionResult.disease}</h4>
              <p className="text-red-600 mb-2">{mockDetectionResult.diseaseHi}</p>
              <div className="flex items-center">
                <AlertTriangle className="w-4 h-4 text-orange-500 mr-2" />
                <span className="text-sm text-orange-700">
                  Severity: {mockDetectionResult.severity} / गंभीरता: {mockDetectionResult.severityHi}
                </span>
              </div>
            </div>
          </div>

          {/* Treatment Plan */}
          <div className="card bg-gradient-to-br from-farm-green-50 to-green-100 border-farm-green-200">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">💊</span>
              <div>
                <h3 className="text-lg font-bold text-farm-green-800">Treatment Plan</h3>
                <p className="text-sm text-farm-green-600">उपचार योजना</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Spray Recommendation */}
              <div className="p-4 bg-white rounded-xl border border-farm-green-200">
                <h4 className="font-semibold text-farm-green-800 mb-2 flex items-center">
                  <span className="mr-2">🧪</span>
                  Recommended Spray
                </h4>
                <p className="text-farm-green-700 font-medium mb-1">{mockDetectionResult.treatment.spray}</p>
                <p className="text-sm text-farm-green-600 mb-3">{mockDetectionResult.treatment.sprayHi}</p>
                
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dosage:</span>
                    <span className="font-medium">{mockDetectionResult.treatment.dosage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">मात्रा:</span>
                    <span className="font-medium">{mockDetectionResult.treatment.dosageHi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frequency:</span>
                    <span className="font-medium">{mockDetectionResult.treatment.frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">आवृत्ति:</span>
                    <span className="font-medium">{mockDetectionResult.treatment.frequencyHi}</span>
                  </div>
                </div>
              </div>

              {/* Application Timing */}
              <div className="p-4 bg-sky-blue-50 rounded-xl border border-sky-blue-200">
                <h4 className="font-semibold text-sky-blue-800 mb-2 flex items-center">
                  <span className="mr-2">⏰</span>
                  Best Time to Apply
                </h4>
                <p className="text-sky-blue-700">{mockDetectionResult.treatment.timing}</p>
                <p className="text-sm text-sky-blue-600">{mockDetectionResult.treatment.timingHi}</p>
              </div>
            </div>
          </div>

          {/* Prevention Tips */}
          <div className="card bg-gradient-to-br from-harvest-yellow-50 to-orange-50 border-harvest-yellow-200">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🛡️</span>
              <div>
                <h3 className="text-lg font-bold text-harvest-yellow-800">Prevention Tips</h3>
                <p className="text-sm text-harvest-yellow-600">रोकथाम के सुझाव</p>
              </div>
            </div>

            <div className="space-y-3">
              {mockDetectionResult.prevention.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-farm-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 text-sm">{tip}</p>
                    <p className="text-xs text-gray-600">{mockDetectionResult.preventionHi[index]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
    </div>
  )
}
