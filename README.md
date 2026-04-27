# Weather App

A simple, responsive Weather App built with HTML, CSS and JavaScript. Enter a city (or allow location access) to view the current weather. Clean UI and easy to run locally.

![App Screenshot](./Screenshot%202024-05-28%20105542.png)

## Features
- Search weather by city name
- Responsive layout for desktop and mobile
- Clean, minimal user interface
- Lightweight — no build step required (pure HTML/CSS/JS)

## Technologies
- HTML
- CSS
- JavaScript (vanilla)

## Demo
Open `index.html` in your browser or host with GitHub Pages / any static host.

## Quick start — run locally
1. Clone the repository
   git clone https://github.com/BinaryVortex/Weather-App.git
2. Change into the project directory
   cd Weather-App
3. Open `index.html` in your browser:
   - Double-click the file, or
   - Serve with a static server (recommended for testing fetch/API features):
     - Using VS Code Live Server extension
     - Or: npx http-server . (requires Node.js)

## API / Configuration (if applicable)
If the app fetches weather data from a third-party API (e.g., OpenWeatherMap), you may need to:
1. Sign up for an API key at the provider (e.g., https://openweathermap.org/).
2. Add the key to the JavaScript file where requests are made:
   - Example: replace `const API_KEY = 'YOUR_API_KEY'` with your key.
3. For security in production, avoid committing API keys — use environment variables or a lightweight server proxy.

If you're unsure whether the project already includes an API key placeholder, open the main JS file (commonly `script.js` or `app.js`) and search for `API_KEY`, `OPENWEATHER`, or `fetch`.

## Project structure (example)
- index.html
- styles.css (or css/)
- script.js (or js/)
- Screenshot 2024-05-28 105542.png

(Adjust above to match the actual filenames in your repo.)

## Contributing
- Fix a bug or add an enhancement? Open a pull request.
- Keep changes focused, include screenshots for UI updates, and add a short description of your changes.

## Troubleshooting
- If the app shows no data, check the browser console for CORS or network errors.
- If weather data is stale, ensure your API key quota has not been exceeded.

## License
Add a LICENSE file to this repo (MIT is a common choice). If you want, I can add an MIT license file for you.

## Credits
Built by BinaryVortex. Thanks for checking out this project!
