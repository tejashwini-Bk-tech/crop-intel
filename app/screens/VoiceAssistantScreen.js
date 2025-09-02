import { ArrowLeft, Mic, Volume2, MessageCircle, Play, Pause } from 'lucide-react'
import { useState } from 'react'

export default function VoiceAssistantScreen({ onNavigate }) {
  const [isListening, setIsListening] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [conversation, setConversation] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState('')

  const farmingKnowledgeBase = {
    "What crop should I grow this season?": {
      farmer: "What crop should I grow this season?",
      farmerHi: "इस सीजन में कौन सी फसल उगानी चाहिए?",
      assistant: "Based on your black soil and current weather, I recommend Soybean for Kharif season. It's profitable and suitable for your region with good market demand.",
      assistantHi: "आपकी काली मिट्टी और मौजूदा मौसम के आधार पर, मैं खरीफ सीजन के लिए सोयाबीन की सिफारिश करता हूं।"
    },
    "When should I apply fertilizer?": {
      farmer: "When should I apply fertilizer?",
      farmerHi: "उर्वरक कब डालना चाहिए?",
      assistant: "Apply DAP at sowing time and Urea after 20-25 days when plants are 6 inches tall. For better results, add organic compost.",
      assistantHi: "बुआई के समय डीएपी और 20-25 दिन बाद जब पौधे 6 इंच के हों तो यूरिया डालें।"
    },
    "What's the weather today?": {
      farmer: "What's the weather today?",
      farmerHi: "आज मौसम कैसा है?",
      assistant: "Today's weather is partly cloudy with 28°C temperature. Humidity is 65% with light winds. Good conditions for field work.",
      assistantHi: "आज का मौसम आंशिक रूप से बादल है, तापमान 28°C है। आर्द्रता 65% है और हल्की हवा है।"
    },
    "Best market prices?": {
      farmer: "Best market prices?",
      farmerHi: "सबसे अच्छे बाजार भाव?",
      assistant: "Current best prices: Soybean ₹5,400/quintal at Indore, Cotton ₹7,100/quintal at Nagpur. Prices are trending upward.",
      assistantHi: "वर्तमान सर्वोत्तम भाव: इंदौर में सोयाबीन ₹5,400/क्विंटल, नागपुर में कपास ₹7,100/क्विंटल।"
    },
    "Fertilizer for cotton?": {
      farmer: "Fertilizer for cotton?",
      farmerHi: "कपास के लिए उर्वरक?",
      assistant: "For cotton: Use 100kg DAP + 50kg Urea per acre at sowing. Apply 50kg Urea at flowering stage. Add potash for better fiber quality.",
      assistantHi: "कपास के लिए: बुआई के समय प्रति एकड़ 100 किग्रा डीएपी + 50 किग्रा यूरिया का उपयोग करें।"
    },
    "How to prevent pests?": {
      farmer: "How to prevent pests?",
      farmerHi: "कीटों से कैसे बचें?",
      assistant: "Use neem oil spray weekly, maintain field hygiene, crop rotation, and install pheromone traps. Monitor regularly for early detection.",
      assistantHi: "साप्ताहिक नीम तेल का छिड़काव करें, खेत की स्वच्छता बनाए रखें, फसल चक्र अपनाएं।"
    },
    "मेरी फसल में पीले पत्ते क्यों हैं?": {
      farmer: "Why are my crop leaves turning yellow?",
      farmerHi: "मेरी फसल में पीले पत्ते क्यों हैं?",
      assistant: "Yellow leaves indicate nitrogen deficiency or overwatering. Check soil drainage and apply urea fertilizer. Also check for pest damage.",
      assistantHi: "पीले पत्ते नाइट्रोजन की कमी या अधिक पानी का संकेत हैं। मिट्टी की जल निकासी जांचें और यूरिया डालें।"
    },
    "कल बारिश होगी क्या?": {
      farmer: "Will it rain tomorrow?",
      farmerHi: "कल बारिश होगी क्या?",
      assistant: "Tomorrow shows 40% chance of light rain in the evening. Cloud cover increasing. Good time to prepare fields for irrigation.",
      assistantHi: "कल शाम को हल्की बारिश की 40% संभावना है। बादल बढ़ रहे हैं। सिंचाई के लिए खेत तैयार करने का अच्छा समय है।"
    },
    "सोयाबीन का भाव क्या है?": {
      farmer: "What is the soybean price?",
      farmerHi: "सोयाबीन का भाव क्या है?",
      assistant: "Current soybean price is ₹5,400 per quintal in Indore market, ₹5,200 in local mandis. Prices are stable with slight upward trend.",
      assistantHi: "वर्तमान सोयाबीन का भाव इंदौर मंडी में ₹5,400 प्रति क्विंटल है, स्थानीय मंडियों में ₹5,200।"
    },
    "कौन सा बीज बेहतर है?": {
      farmer: "Which seed is better?",
      farmerHi: "कौन सा बीज बेहतर है?",
      assistant: "For soybean, JS-335 variety is excellent for black soil. For cotton, Bt cotton varieties like RCH-659 give good yield and pest resistance.",
      assistantHi: "सोयाबीन के लिए, JS-335 किस्म काली मिट्टी के लिए उत्कृष्ट है। कपास के लिए, RCH-659 जैसी Bt किस्में अच्छी हैं।"
    }
  }

  const getRandomQuestion = () => {
    const questions = Object.keys(farmingKnowledgeBase)
    return questions[Math.floor(Math.random() * questions.length)]
  }

  const findBestMatch = (userInput) => {
    const input = userInput.toLowerCase()
    
    // Direct match
    if (farmingKnowledgeBase[userInput]) {
      return farmingKnowledgeBase[userInput]
    }
    
    // Keyword matching
    for (const [question, response] of Object.entries(farmingKnowledgeBase)) {
      const questionWords = question.toLowerCase().split(' ')
      const inputWords = input.split(' ')
      
      const matchCount = inputWords.filter(word => 
        questionWords.some(qWord => qWord.includes(word) || word.includes(qWord))
      ).length
      
      if (matchCount >= 2) {
        return response
      }
    }
    
    // Hindi keyword matching
    const hindiKeywords = {
      'फसल': 'What crop should I grow this season?',
      'उर्वरक': 'When should I apply fertilizer?',
      'मौसम': "What's the weather today?",
      'भाव': 'Best market prices?',
      'कपास': 'Fertilizer for cotton?',
      'कीट': 'How to prevent pests?',
      'पीले': 'मेरी फसल में पीले पत्ते क्यों हैं?',
      'बारिश': 'कल बारिश होगी क्या?',
      'सोयाबीन': 'सोयाबीन का भाव क्या है?',
      'बीज': 'कौन सा बीज बेहतर है?'
    }
    
    for (const [keyword, question] of Object.entries(hindiKeywords)) {
      if (input.includes(keyword)) {
        return farmingKnowledgeBase[question]
      }
    }
    
    // Default response for unmatched questions
    return {
      farmer: userInput,
      farmerHi: userInput,
      assistant: "I understand your question about farming. Let me connect you with our agricultural experts for detailed guidance on this topic.",
      assistantHi: "मैं कृषि के बारे में आपका प्रश्न समझता हूं। इस विषय पर विस्तृत मार्गदर्शन के लिए मैं आपको हमारे कृषि विशेषज्ञों से जोड़ता हूं।"
    }
  }

  const handleMicClick = () => {
    if (!isListening) {
      setIsListening(true)
      const randomQuestion = getRandomQuestion()
      setCurrentQuestion(randomQuestion)
      
      // Simulate voice recognition
      setTimeout(() => {
        setIsListening(false)
        const response = farmingKnowledgeBase[randomQuestion]
        addToConversation(response)
      }, 3000)
    } else {
      setIsListening(false)
    }
  }

  const addToConversation = (conv) => {
    setConversation(prev => [...prev, conv])
    setCurrentQuestion('')
  }

  const handlePlayAudio = (index) => {
    setIsPlaying(index)
    setTimeout(() => setIsPlaying(false), 2000)
  }

  const quickQuestions = [
    { 
      question: "What's the weather today?", 
      questionHi: "आज मौसम कैसा है?",
      icon: "🌤️"
    },
    { 
      question: "Best market prices?", 
      questionHi: "सबसे अच्छे बाजार भाव?",
      icon: "💰"
    },
    { 
      question: "Fertilizer for cotton?", 
      questionHi: "कपास के लिए उर्वरक?",
      icon: "🌾"
    },
    { 
      question: "How to prevent pests?", 
      questionHi: "कीटों से कैसे बचें?",
      icon: "🛡️"
    }
  ]

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
          <h1 className="text-2xl font-bold text-green-800">Voice Assistant</h1>
          <p className="text-green-600 font-medium">आवाज़ सहायक</p>
        </div>
      </header>

      {/* Voice Interface */}
      <div className="card text-center mb-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
        <div className="mb-6">
          <h3 className="text-lg font-bold text-green-800 mb-2">Ask by Voice</h3>
          <p className="text-green-600 text-sm">आवाज़ से पूछें</p>
        </div>

        {/* Microphone Button */}
        <div className="relative mb-6">
          <button
            onClick={handleMicClick}
            className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center transition-all duration-300 shadow-lg ${
              isListening 
                ? 'bg-gradient-to-r from-red-500 to-orange-500 animate-pulse scale-110' 
                : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:scale-105'
            }`}
          >
            <Mic className="w-10 h-10 text-white" />
          </button>
          
          {isListening && (
            <div className="absolute -inset-4 border-4 border-green-300 rounded-full animate-ping"></div>
          )}
        </div>

        {/* Status */}
        <div className="mb-4">
          {isListening ? (
            <div>
              <p className="text-green-800 font-semibold">Listening...</p>
              <p className="text-sm text-green-600">सुन रहे हैं...</p>
              {currentQuestion && (
                <p className="text-sm text-gray-600 mt-2 italic">"{currentQuestion}"</p>
              )}
            </div>
          ) : (
            <div>
              <p className="text-gray-700">Tap to ask a question</p>
              <p className="text-sm text-gray-600">सवाल पूछने के लिए दबाएं</p>
            </div>
          )}
        </div>

        {/* Language Support */}
        <div className="flex items-center justify-center space-x-4 text-sm">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-gray-600">English</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
            <span className="text-gray-600">हिंदी</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
            <span className="text-gray-600">मराठी</span>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Questions</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickQuestions.map((q, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentQuestion(q.question)
                const response = findBestMatch(q.question)
                addToConversation(response)
              }}
              className="p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 text-left"
            >
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">{q.icon}</span>
                <span className="text-sm font-semibold text-gray-800">{q.question}</span>
              </div>
              <p className="text-xs text-gray-600">{q.questionHi}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Conversation History */}
      {conversation.length > 0 && (
        <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-lg font-bold text-gray-800">Conversation</h3>
          {conversation.map((conv, index) => (
            <div key={index} className="space-y-3">
              {/* Farmer Question */}
              <div className="flex justify-end">
                <div className="max-w-xs bg-green-500 text-white p-4 rounded-2xl rounded-tr-sm">
                  <div className="flex items-center mb-2">
                    <Mic className="w-4 h-4 mr-2" />
                    <span className="text-xs opacity-90">You asked:</span>
                  </div>
                  <p className="mb-1">{conv.farmer}</p>
                  <p className="text-xs opacity-90">{conv.farmerHi}</p>
                </div>
              </div>

              {/* Assistant Response */}
              <div className="flex justify-start">
                <div className="max-w-xs bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-sm shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-xs text-green-600">Assistant:</span>
                    </div>
                    <button
                      onClick={() => handlePlayAudio(index)}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      {isPlaying === index ? (
                        <Pause className="w-4 h-4 text-gray-600" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-gray-600" />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-800 mb-1">{conv.assistant}</p>
                  <p className="text-xs text-gray-600">{conv.assistantHi}</p>
                  
                  {isPlaying === index && (
                    <div className="mt-2 flex items-center">
                      <div className="flex space-x-1">
                        <div className="w-1 h-3 bg-green-500 rounded animate-pulse"></div>
                        <div className="w-1 h-4 bg-green-500 rounded animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1 h-2 bg-green-500 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1 h-4 bg-green-500 rounded animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                      </div>
                      <span className="text-xs text-green-600 ml-2">Playing audio...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Help Section */}
      <div className="card mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-3">💡</span>
          <div>
            <h3 className="font-bold text-blue-800">How to Use</h3>
            <p className="text-sm text-blue-600">उपयोग कैसे करें</p>
          </div>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="mr-2">🎤</span>
            <div>
              <p className="text-gray-700">Press and hold the microphone to ask questions</p>
              <p className="text-xs text-gray-600">सवाल पूछने के लिए माइक्रोफोन दबाएं और पकड़ें</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">🔊</span>
            <div>
              <p className="text-gray-700">Tap the speaker icon to hear responses</p>
              <p className="text-xs text-gray-600">जवाब सुनने के लिए स्पीकर आइकन दबाएं</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">🌐</span>
            <div>
              <p className="text-gray-700">Ask in Hindi, Marathi, or English</p>
              <p className="text-xs text-gray-600">हिंदी, मराठी या अंग्रेजी में पूछें</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Sample Questions */}
      <div className="card mt-4 bg-gradient-to-br from-green-50 to-emerald-100 border-green-200 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-3">❓</span>
          <div>
            <h3 className="font-bold text-green-800">Sample Questions</h3>
            <p className="text-sm text-green-600">नमूना प्रश्न</p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-gray-700 italic">"मेरी फसल में पीले पत्ते क्यों हैं?"</p>
          <p className="text-gray-700 italic">"कल बारिश होगी क्या?"</p>
          <p className="text-gray-700 italic">"सोयाबीन का भाव क्या है?"</p>
          <p className="text-gray-700 italic">"कौन सा बीज बेहतर है?"</p>
        </div>
      </div>
    </div>
  )
}
