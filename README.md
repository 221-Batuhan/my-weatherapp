# NextWeather

A beautiful, modern weather app built with Next.js and TailwindCSS. Features real-time weather data, dark/light mode toggle, and responsive design.

## Features

- 🌤️ Real-time weather data from OpenWeatherMap API
- 🌙 Dark/Light mode toggle with localStorage persistence
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🎨 Modern UI with smooth gradients and animations
- 🔍 Search functionality for any city worldwide
- ⚡ Fast and optimized with Next.js

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: TailwindCSS
- **Icons**: Emoji weather icons
- **API**: OpenWeatherMap API
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextweather
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your OpenWeather API key:
```
OPENWEATHER_API_KEY=your_api_key_here
```

4. Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/
│   ├── SearchBar.js
│   ├── WeatherCard.js
│   └── ThemeToggle.js
├── pages/
│   ├── _app.js
│   ├── index.js
│   └── api/
│       └── weather.js
└── styles/
    └── globals.css
```

## Usage

1. Enter a city name in the search bar
2. Click "Search" or press Enter
3. View the weather information displayed in a beautiful card
4. Toggle between light and dark modes using the theme button

## API Endpoints

- `GET /api/weather?city=<city_name>` - Fetches weather data for a specific city

## Environment Variables

- `OPENWEATHER_API_KEY` - Your OpenWeatherMap API key

## Deployment

The app can be deployed to Vercel, Netlify, or any other platform that supports Next.js.

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
