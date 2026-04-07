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
                        DEFAULT: '#F5FBF4',
                        soft: '#EEF7EF',
                        card: '#FFFFFFF2',
                        muted: '#F2F8F2',
                        surface: '#FFFFFFF2',
                    },
                    text: {
<<<<<<< HEAD
                        primary: '#0D1B12',
                        secondary: '#294031',
                        muted: '#5F7868',
=======
                        primary: '#111827',
                        secondary: '#7d8692ff',
                        muted: '#a6acb8ff',
                        inverted: '#FFFFFF',
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
                    },
                    accent: {
                        DEFAULT: '#43b05d',
                        hover: '#2f8b49',
                        light: '#DCFCE7',
                        dark: '#194a2d',
                    },
                    brand: {
<<<<<<< HEAD
                        DEFAULT: '#43b05d',
                        hover: '#2f8b49',
                        light: '#DCFCE7',
                        green: '#43b05d',
                        dark: '#194a2d',
                        lime: '#8DE0A1',
                    },
                    success: '#43b05d',
=======
                        DEFAULT: '#51a145',
                        hover: '#36782c',
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
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
                    warning: '#F59E0B',
                    error: '#EF4444',
                    border: '#D7E9DB',
                }
            },
            fontFamily: {
<<<<<<< HEAD
                sans: ['Manrope', 'sans-serif'],
=======
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
>>>>>>> 89c086a8769ca6110a35413482560dfd7ca5b839
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
