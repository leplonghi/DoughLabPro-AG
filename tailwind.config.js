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
                        soft: '#F8F9FA',
                        card: '#FFFFFF',
                        muted: '#F3F4F6',
                    },
                    text: {
                        primary: '#111827',
                        secondary: '#4B5563',
                        muted: '#6B7280',
                    },
                    accent: {
                        DEFAULT: '#84CC16',
                        hover: '#65A30D',
                        light: '#A3E635',
                    },
                    brand: {
                        green: '#84CC16',
                        lime: '#A3E635',
                    },
                    success: '#84CC16',
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
