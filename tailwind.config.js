/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dlp: {
                    bg: {
                        DEFAULT: '#FFFFFF',
                        soft: '#e9ecf0ff',
                        card: '#fffffffd',
                        muted: '#F3F4F6',
                    },
                    text: {
                        primary: '#111827',
                        secondary: '#7d8692ff',
                        muted: '#a6acb8ff',
                        inverted: '#FFFFFF',
                    },
                    accent: {
                        DEFAULT: '#3e8b32ff',
                        hover: '#36782c',
                        light: '#ECFCCB',
                        dark: '#216416ff',
                    },
                    brand: {
                        DEFAULT: '#51a145',
                        green: '#3e8b32ff',
                        dark: '#216416ff',
                        lime: '#51a145',
                    },
                    // Semantic names for Refactor
                    primary: '#51a145', // Brand Green
                    surface: {
                        flour: '#FDFBF7', // Off-white typical of flour
                        water: '#F0F9FF', // Light blue hint
                    },
                    success: '#669225ff',
                    warning: '#F59E0B',
                    error: '#EF4444',
                    border: '#E5E7EB',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'dlp-sm': '0 1px 2px rgba(0, 0, 0, 0.04)',
                'dlp-md': '0 4px 6px rgba(0, 0, 0, 0.06)',
                'dlp-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                'dlp-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            },
            animation: {
                'slide-up': 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'slide-down': 'slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'slide-in-left': 'slideInLeft 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'fade-in': 'fadeIn 0.4s ease-out forwards',
                'fade-in-scale': 'fadeInScale 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'bounce': 'bounce 1s ease-in-out infinite',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin': 'spin 1s linear infinite',
            },
            keyframes: {
                slideUp: {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    'from': { opacity: '0', transform: 'translateY(-20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    'from': { opacity: '0', transform: 'translateX(-30px)' },
                    'to': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    'from': { opacity: '0', transform: 'translateX(30px)' },
                    'to': { opacity: '1', transform: 'translateX(0)' },
                },
                fadeIn: {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                fadeInScale: {
                    'from': { opacity: '0', transform: 'scale(0.95)' },
                    'to': { opacity: '1', transform: 'scale(1)' },
                },
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            scale: {
                '98': '0.98',
            },
        },
    },
    plugins: [],
}
