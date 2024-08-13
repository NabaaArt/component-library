/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  purge: ["./components/**/*.{tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

