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
                        primary: '#0D1B12',
                        secondary: '#294031',
                        muted: '#5F7868',
                    },
                    accent: {
                        DEFAULT: '#43b05d',
                        hover: '#2f8b49',
                        light: '#DCFCE7',
                        dark: '#194a2d',
                    },
                    brand: {
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
            },
            boxShadow: {
                'dlp-sm': '0 1px 2px rgba(0, 0, 0, 0.04)',
                'dlp-md': '0 4px 6px rgba(0, 0, 0, 0.06)',
            }
        },
    },
    plugins: [],
}
