/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        'btn': '4px 4px 0px 0px ',
      },
      fontFamily: {
        calibri: ['Calibri', 'sans-serif'],
        'sf-mono': ['SF Mono', 'monospace']
      },
      colors: {
        Navy: "#0a192f",
        LightNavy: "#112240",
        LightestNavy: "#233554",
        Slate: "#8892b0",
        LightSlate: "#a8b2d1",
        LightestSlate: "#ccd6f6",
        White: "#e6f1ff",
        Green: "#64ffda",
        

      },
      textColor: {
        // Change the default text color here
        'primary': '#ffffff', // Replace with your desired color code
        'secondary' : "#64ffda"
      },
    },
  },
  plugins: [],
}



