/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
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
                        primary: '#0D1B12',
                        secondary: '#23372B',
                        tertiary: '#2D4436',
                        muted: '#385141',
                    },
                    primary: {
                        DEFAULT: '#43b05d',
                        hover: '#2f8b49',
                        light: '#DCFCE7',
                        green: '#43b05d',
                        dark: '#194a2d',
                        lime: '#8DE0A1',
                    },
                    success: '#43b05d',
                    warning: '#F59E0B',
                    error: '#EF4444',
                    border: '#D7E9DB',
                }
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
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
