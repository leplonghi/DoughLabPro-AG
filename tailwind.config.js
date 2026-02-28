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
                        DEFAULT: 'var(--dlp-bg)',
                        soft: 'var(--dlp-bg-soft)',
                        card: 'var(--dlp-bg-card)',
                        muted: '#F8FAFC',
                    },
                    text: {
                        primary: 'var(--dlp-text-primary)',
                        secondary: 'var(--dlp-text-secondary)',
                        muted: 'var(--dlp-text-muted)',
                        inverted: '#FFFFFF',
                    },
                    // Primary Brand Color (Lime-Green)
                    brand: {
                        DEFAULT: 'var(--dlp-brand)',
                        hover: 'var(--dlp-brand-hover)',
                        light: 'var(--dlp-brand-light)',
                        dark: 'var(--dlp-brand-dark)',
                    },
                    // Action/Accent Color (Often same as brand, but semantic separation)
                    accent: {
                        DEFAULT: 'var(--dlp-accent)',
                        hover: 'var(--dlp-accent-hover)',
                        warm: 'var(--dlp-accent-warm)',
                    },
                    // Status Colors
                    success: '#669225', // Consider moving to var if used often
                    warning: '#F59E0B',
                    error: '#EF4444',
                    info: '#3B82F6',
                    border: {
                        DEFAULT: 'var(--dlp-border)',
                        strong: 'var(--dlp-border-strong)',
                    },
                }
            },
            zIndex: {
                '0': '0',
                '10': '10',  // Badges, decor
                '20': '20',  // Sticky elements
                '30': '30',  // Dropdowns, popovers
                '40': '40',  // Modals, drawers
                '50': '50',  // Critical overlays (Nav)
                'toast': '100', // Toasts, Notifications
                'max': '9999',  // Debug, Critical
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'dlp-sm': 'var(--dlp-shadow-sm)',
                'dlp-md': 'var(--dlp-shadow-md)',
                'dlp-lg': 'var(--dlp-shadow-lg)',
                'dlp-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                'premium': 'var(--dlp-shadow-premium)',
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
