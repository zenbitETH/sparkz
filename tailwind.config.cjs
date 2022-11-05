/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
				exo: ['Exo'],
			},
      plugins: [
        require('@tailwindcss/forms'),
        // ...
      ],
    },
  },
  plugins: [],
};
