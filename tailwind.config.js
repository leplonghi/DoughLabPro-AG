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
                    success: '#669225ff',
                    warning: '#F59E0B',
                    error: '#EF4444',
                    border: '#E5E7EB',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'dlp-sm': '0 1px 2px rgba(0, 0, 0, 0.04)',
                'dlp-md': '0 4px 6px rgba(0, 0, 0, 0.06)',
            }
        },
    },
    plugins: [],
}
