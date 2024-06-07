/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    // 12 14 16 18 20 21 24 25 26 33 45
    fontSize: {
      xxs: [
        '8px',
        {
          lineHeight: '1.5',
          letterSpacing: '-0.24px',
          fontWeight: '300',
        },
      ],
      xss: [
        '10px',
        {
          lineHeight: '1.5',
          letterSpacing: '-0.24px',
          fontWeight: '300',
        },
      ],
      sss: [
        '12px',
        {
          lineHeight: '1.5',
          letterSpacing: '-0.24px',
          fontWeight: '300',
        },
      ],
      ss: [
        '14px',
        {
          lineHeight: '1.5',
          letterSpacing: '-0.24px',
          fontWeight: '500',
        },
      ],
      s: [
        '16px',
        {
          lineHeight: '1.5',
          letterSpacing: '-0.24px',
          fontWeight: '500',
        },
      ],
      sm: [
        '18px',
        {
          lineHeight: '1.5',
          letterSpacing: '-0.24px',
          fontWeight: '500',
        },
      ],
      md: [
        '20px',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.24px',
          fontWeight: '500',
        },
      ],
      lg: [
        '21px',
        {
          lineHeight: '1.5',
          letterSpacing: '-0.24px',
          fontWeight: '500',
        },
      ],
      xl: [
        '24px',
        {
          lineHeight: '1.5',
          letterSpacing: '-0.24px',
          fontWeight: '700',
        },
      ],
      xl2: [
        '25px',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.24px',
          fontWeight: '700',
        },
      ],
      '2xl': [
        '26.667px',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.24px',
          fontWeight: '700',
        },
      ],
      '2xl2': [
        '33.333px',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.24px',
          fontWeight: '800',
        },
      ],
      '4xl': [
        '45px',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.24px',
          fontWeight: '900',
        },
      ],
    },
    extend: {
      colors: {
        'gray-1': '#F0F0F0',
        'gray-2': '#C2C2C2',
        'gray-3': '#D9D9D9',
        'gray-4': '#F2F2F2',
        'gray-5': '#E5E5E5',
        'primary-1': '#C6F3F3',
        'primary-2': '#39C3C5',
        'red-1': '#FF0000',
        point: '#F19B22',
        failed: '#FF0000',
        'mbti-green': '#33A373',
        'mbti-blue': '#00F4FF',
        'mbti-yellow': '#E4C728',
        'mbti-pink': '#C0226D',
        'mbti-purple': '#C0226C',
      },
      fontFamily: {
        'inter-sb': ['Inter-SemiBold'],
        'inter-m': ['Inter-Medium'],
        'inter-b': ['Inter-Bold'],
        'inter-r': ['Inter-Regular'],
      },
    },
  },
  plugins: [],
};
