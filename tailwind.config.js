/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-1': '#F0F0F0',
        'gray-2': '#C2C2C2',
        'gray-3': '#D9D9D9',
        'primary-1': '#C6F3F3',
        'primary-2': '#39C3C5',
        point: '#F19B22',
        failed: '#FF0000',
        'mbti-green': '#33A373',
        'mbti-blue': '#00F4FF',
        'mbti-yellow': '#E4C728',
        'mbti-pink': '#C0226D',
      },
      fontFamily: {
        'inter-sb': ['Inter-SemiBold'],
        'inter-m': ['Inter-Medium'],
        'inter-b': ['Inter-Bold'],
        'inter-r': ['Inter-Regular'],
      },
      fontSize: {
        'hs-s': '14px',
        'hs-m': '16px',
        'hs-l': '18px',
        'hs-xl': '20px',
        'hs-2xl': '25px',
      },
    },
  },
  plugins: [],
};
