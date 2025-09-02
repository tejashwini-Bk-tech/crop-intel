'use client';

import { LogIn, UserPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LandingPage() {
  const router = useRouter();
  const [language, setLanguage] = useState('english');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'english' ? 'hindi' : 'english');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 border border-green-100 shadow-xl max-w-md w-full text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
            <span className="text-3xl text-white font-bold">C</span>
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">
              {language === 'english' ? 'Crop Intel' : 'क्रॉप इंटेल'}
            </h1>
            <p className="text-green-600 font-semibold text-lg">
              {language === 'english' ? 'Smart Farming Solutions' : 'स्मार्ट कृषि समाधान'}
            </p>
          </div>
        </div>
        <p className="text-xl text-gray-700 font-medium mb-6">
          {language === 'english'
            ? 'Welcome! Please sign up or login to continue.'
            : 'स्वागत है! आगे बढ़ने के लिए साइन अप या लॉगिन करें।'}
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => router.push('/signup')}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            {language === 'english' ? 'Sign Up' : 'साइन अप'}
          </button>
          <button
            onClick={() => router.push('/login')}
            className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
          >
            <LogIn className="w-5 h-5 mr-2" />
            {language === 'english' ? 'Login' : 'लॉगिन'}
          </button>
        </div>
        <button
          onClick={toggleLanguage}
          className="mt-6 flex items-center space-x-2 bg-green-100 hover:bg-green-200 px-3 py-2 rounded-full border border-green-300 transition-all duration-300 shadow-sm mx-auto"
        >
          <span className="text-sm font-bold text-green-700">
            {language === 'english' ? 'हिं' : 'EN'}
          </span>
        </button>
      </div>
    </div>
  );
}