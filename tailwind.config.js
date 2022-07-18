/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "green-1": "#37C49F",
                "green-2": "#27E48C",
                "secondary-1": "#1F1D29",
                "secondary-2": "rgba(255,255,255,0.05)",
                "secondary-3": "#1F1D29",
            },
        },
    },
    plugins: [],
};
