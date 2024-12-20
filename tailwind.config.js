/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                appBackground: '#e3e1e1',           //
                appBackgroundDark: '#272626',       // Dark Green
                sidebarBackground: '#559655',
                sidebarBackgroundDark: '#012B01',   // Lighter Dark Green
                cardBackground: '#0E460E',
                cardBackgroundDark: '#559655',
                primaryText: '#1c1c1c',
                primaryTextDark: '#edf0f4',
                secondaryText: '#9399A1',
                primary: {
                    100: '#a9c3ea',
                    200: '#93b5e5',
                    300: '#7ba7e0',
                    400: '#0D1C0D',
                    500: '#077ad9',
                },
                secondary: {
                    100: '#9197af',
                    400: '#377637',
                },
            },
            boxShadow: {
                glow: '0 0 12px rgba(255, 255, 255, 0.7)',  // Customize the glow color and spread
            },
            fontFamily: {
                display: ['Ubuntu', 'betterVCR', 'sans-serif'],
                content: ['betterVCR', 'serif'],
            },
            animation: {
                'gradient-hover': 'gradient-x 3s ease infinite',
              },
              keyframes: {
                'gradient-x': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '100%': { backgroundPosition: '100% 50%' },
                },
              },
              backgroundSize: {
                '200%': '200%',
              },
        },
        screens: {
            sm: '640px', // Small devices (640px and up)
            md: '768px', // Medium devices (768px and up)
            lg: '1024px', // Large devices (1024px and up)
            xl: '1280px', // Extra large devices (1280px and up)
            '2xl': '1536px', // 2XL devices (1536px and up)
        },
    },
    darkMode: ['class'],
    plugins: [],
}
