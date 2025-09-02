# 🌱 Plantix - Digital Farming Companion

A comprehensive mobile-first web application designed for Indian farmers, providing weather forecasts, market prices, crop advisory, pest detection, and voice assistance in multiple languages.

## 🚀 Features

### 📱 Core Screens

1. **🏠 Home Screen**
   - Personalized greeting for farmers (Hello, Ramesh 👋)
   - Quick access to all major features
   - Farm statistics dashboard
   - Bilingual support (English/Hindi)

2. **🌦 Weather Screen**
   - Hyperlocal weather forecasts for Nagpur region
   - 4-day weather predictions
   - Farming-specific advisory based on weather conditions
   - Temperature, humidity, wind speed, and visibility data

3. **💰 Market Price Screen**
   - Real-time mandi prices for major crops
   - Price comparison across different markets
   - Highlighted best prices for maximum profit
   - Market trends and insights

4. **🌱 Crop Advisory Screen**
   - Interactive soil type selection (Black, Red, Sandy)
   - Last crop rotation input
   - AI-powered crop recommendations
   - Detailed fertilizer plans with dosage information
   - Seasonal planting guidance

5. **📷 Pest Detection Screen**
   - AI-powered disease detection (Future Vision)
   - Camera integration for leaf photo analysis
   - Detailed treatment plans and spray recommendations
   - Prevention tips and best practices

6. **🎤 Voice Assistant Screen**
   - Voice-based queries in Hindi, Marathi, and English
   - Audio responses for low-literacy farmers
   - Quick question templates
   - Conversation history

### 🎨 Design Features

- **Agricultural Color Scheme**: Green (agriculture), Yellow (harvest), Blue (weather)
- **Bilingual Interface**: English + Hindi with Devanagari font support
- **Mobile-First Design**: Optimized for smartphones and tablets
- **Farmer-Friendly UI**: Large buttons, clear icons, minimal text
- **Smooth Animations**: Fade-in effects and hover interactions

## 🛠 Technology Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS with custom agricultural theme
- **Icons**: Lucide React
- **Fonts**: Inter + Noto Sans Devanagari
- **Language**: JavaScript/React

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd plantix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
plantix/
├── app/
│   ├── screens/
│   │   ├── HomeScreen.js           # Main dashboard
│   │   ├── WeatherScreen.js        # Weather forecasts
│   │   ├── MarketPriceScreen.js    # Market prices
│   │   ├── CropAdvisoryScreen.js   # Crop recommendations
│   │   ├── PestDetectionScreen.js  # Disease detection
│   │   └── VoiceAssistantScreen.js # Voice interface
│   ├── globals.css                 # Global styles
│   ├── layout.js                   # Root layout
│   └── page.js                     # Main app component
├── package.json                    # Dependencies
├── tailwind.config.js             # Tailwind configuration
└── README.md                      # Documentation
```

## 🎯 Key Components

### Navigation System
- **Bottom Navigation Bar**: 6 tabs with icons and bilingual labels
- **Screen Routing**: State-based navigation between screens
- **Active State**: Visual feedback for current screen

### Data Models
- **Weather Data**: Temperature, conditions, forecasts, farming advice
- **Market Data**: Crop prices across multiple mandis with best price highlighting
- **Crop Advisory**: Soil types, crop rotation, fertilizer recommendations
- **Pest Detection**: Disease identification, treatment plans, prevention tips

### Responsive Design
- **Mobile Container**: Max-width 640px for optimal mobile experience
- **Flexible Grid**: Responsive layouts for different screen sizes
- **Touch-Friendly**: Large tap targets and smooth interactions

## 🌐 Multilingual Support

- **Primary**: English
- **Secondary**: Hindi (हिंदी)
- **Future**: Marathi (मराठी)
- **Font**: Noto Sans Devanagari for proper Devanagari script rendering

## 🎨 Custom Theme

### Color Palette
- **Farm Green**: Primary agricultural green (#2d9c2d)
- **Harvest Yellow**: Secondary yellow/orange (#ffa500)
- **Sky Blue**: Weather-related blue (#0ea5e9)

### Typography
- **Primary**: Inter (Latin characters)
- **Secondary**: Noto Sans Devanagari (Hindi/Marathi)

## 📱 Mobile Optimization

- **Viewport**: Optimized for mobile devices
- **Touch Gestures**: Smooth scrolling and tap interactions
- **Performance**: Lightweight components and efficient rendering
- **Accessibility**: High contrast and readable fonts

## 🚀 Future Enhancements

1. **Real API Integration**
   - Live weather data from meteorological services
   - Real-time market prices from agricultural boards
   - Actual AI-powered pest detection

2. **Advanced Features**
   - GPS-based location services
   - Push notifications for weather alerts
   - Offline mode for remote areas
   - Social features for farmer communities

3. **Additional Languages**
   - Marathi, Telugu, Tamil, Gujarati support
   - Regional crop and market data

## 📊 Sample Data

The app currently uses mock data for demonstration:
- **Weather**: Nagpur region with 4-day forecasts
- **Markets**: Nagpur, Amravati, Wardha, Akola prices
- **Crops**: Soybean, Cotton, Tur Dal, Wheat
- **Diseases**: Leaf Spot Disease with treatment plans

## 🎯 Target Audience

- **Primary**: Indian farmers with smartphones
- **Secondary**: Agricultural extension workers
- **Tertiary**: Agricultural students and researchers

## 📈 Business Impact

- **Increased Crop Yield**: Better weather and crop advisory
- **Higher Profits**: Optimal market price information
- **Reduced Losses**: Early pest detection and treatment
- **Digital Literacy**: Voice assistance for low-literacy farmers

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and queries:
- Email: support@plantix.com
- Phone: +91-XXXX-XXXX-XX
- Website: www.plantix.com

---

**Built with ❤️ for Indian Farmers** 🇮🇳

NEXT_PUBLIC_SUPABASE_URL=https://cgiqqoyglahliouzwgqo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnaXFxb3lnbGFobGlvdXp3Z3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MjA5NTUsImV4cCI6MjA3MjM5Njk1NX0.ak0AroW1PrNeal8nZQYPkmiGDFVv79jVI4y8uW8hiqw