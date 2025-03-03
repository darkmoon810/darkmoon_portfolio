/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        blob: "blob 7s infinite",
        blink: "blink 1s step-end infinite",
        'fade-in': "fadeIn 0.5s ease-in forwards",
        'spin-slow': "spin 3s linear infinite",
        'float': "float 6s ease-in-out infinite",
        'gradient': "gradient 3s linear infinite",
        'particle': "particle 4s ease-in-out infinite",
        'shape': "shape 8s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        blink: {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "currentColor" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        particle: {
          "0%, 100%": { 
            transform: "translate(0, 0)",
            opacity: "0.5"
          },
          "25%": { 
            transform: "translate(10px, -10px)",
            opacity: "0.8"
          },
          "50%": { 
            transform: "translate(0, -20px)",
            opacity: "0.5"
          },
          "75%": { 
            transform: "translate(-10px, -10px)",
            opacity: "0.8"
          }
        },
        shape: {
          "0%, 100%": { 
            transform: "rotate(0deg) scale(1)",
            opacity: "0.3"
          },
          "25%": { 
            transform: "rotate(90deg) scale(1.2)",
            opacity: "0.5"
          },
          "50%": { 
            transform: "rotate(180deg) scale(1)",
            opacity: "0.3"
          },
          "75%": { 
            transform: "rotate(270deg) scale(0.8)",
            opacity: "0.5"
          }
        }
      },
    },
  },
  plugins: [],
}