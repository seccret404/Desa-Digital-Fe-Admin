/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    borderWidth: {
      'border': '', // Menambahkan kelas border-border dengan ketebalan 1px
    },
    borderColor: theme => ({
      'border': theme('colors.none'), // Menambahkan warna untuk kelas border-border
    }),
    backgroundColor: {
      'background': '', // Ganti dengan warna yang Anda inginkan
    },
    textColor: {
      'foreground': '', // Ganti dengan warna yang Anda inginkan
    },
  },
};
export const plugins = [];