/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/views/pages/landing.html.erb',
    './app/views/pages/fake_ecommerce.html.erb',
    './app/assets/stylesheets/application.tailwind.css',
    './app/assets/stylesheets/landing.css',
    './app/assets/stylesheets/fake_ecommerce.css',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

