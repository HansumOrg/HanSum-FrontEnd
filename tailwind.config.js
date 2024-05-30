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
      sss: [
        '12px',
        {
          lineHeight: '1.5',
          letterSpacing: '-0.24px',
          fontWeight: '500',
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
        '14px',
        {
          lineHeight: '17px',
          letterSpacing: '-0.24px',
          fontWeight: '500',
        },
      ],
      sm2: [
        '18.667px',
        {
          lineHeight: '22px',
          letterSpacing: '-0.24px',
          fontWeight: '500',
        },
      ],
      md: [
        '16px',
        {
          lineHeight: '19px',
          letterSpacing: '-0.24px',
          fontWeight: '600',
        },
      ],
      md2: [
        '21.333px',
        {
          lineHeight: '26px',
          letterSpacing: '-0.24px',
          fontWeight: '500',
        },
      ],
      lg: [
        '18px',
        {
          lineHeight: '21px',
          letterSpacing: '-0.24px',
          fontWeight: '500',
        },
      ],
      lg2: [
        '24px',
        {
          lineHeight: '28px',
          letterSpacing: '-0.24px',
          fontWeight: '500',
        },
      ],
      xl: [
        '20px',
        {
          lineHeight: '23px',
          letterSpacing: '-0.24px',
          fontWeight: '600',
        },
      ],
      xl2: [
        '26.667px',
        {
          lineHeight: '32px',
          letterSpacing: '-0.24px',
          fontWeight: '500',
        },
      ],
      '2xl': [
        '25px',
        {
          lineHeight: '28px',
          letterSpacing: '-0.24px',
          fontWeight: '700',
        },
      ],
      '2xl2': [
        '33.333px',
        {
          lineHeight: '40px',
          letterSpacing: '-0.24px',
          fontWeight: '500',
        },
      ],
      '4xl': [
        '45px',
        {
          lineHeight: '48px',
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
