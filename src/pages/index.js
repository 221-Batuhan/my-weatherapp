import { useState, useEffect } from 'react'
import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import WeatherForecast from '../components/WeatherForecast'
import FavoriteCities from '../components/FavoriteCities'
import WeatherAnimation from '../components/WeatherAnimation'
import ThemeToggle from '../components/ThemeToggle'

export default function Home({ theme, toggleTheme }) {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [currentCity, setCurrentCity] = useState('')

  useEffect(() => {
    const savedFavorites = localStorage.getItem('weatherFavorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const handleSearch = async (city) => {
    setLoading(true)
    setError(null)
    setWeather(null)
    setCurrentCity(city)

    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch weather data')
      }

      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleToggleFavorite = (city) => {
    const newFavorites = favorites.includes(city)
      ? favorites.filter(fav => fav !== city)
      : [...favorites, city]
    
    setFavorites(newFavorites)
    localStorage.setItem('weatherFavorites', JSON.stringify(newFavorites))
  }

  const isFavorite = (city) => favorites.includes(city)

  return (
    <>
      <Head>
        <title>NextWeather - Professional Weather App</title>
        <meta name="description" content="NextWeather - Professional weather app with real-time data, detailed forecasts, and beautiful UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent opacity-50"></div>
        
        <header className="relative z-10 container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  NextWeather
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Your personal weather companion</p>
              </div>
            </div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </header>

        <main className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Get Real-Time Weather Information
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Access detailed weather data for any city worldwide. Get current conditions, forecasts, and comprehensive weather insights.
              </p>
              <SearchBar onSearch={handleSearch} />
            </div>

            {loading && (
              <div className="flex justify-center items-center py-16">
                <div className="relative">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-700"></div>
                  <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Loading weather data...</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Please wait while we fetch the latest information</p>
                </div>
              </div>
            )}

            {error && (
              <div className="max-w-2xl mx-auto">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-6 py-4 rounded-2xl shadow-lg">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Error Loading Weather Data</h3>
                      <p className="text-sm mt-1">{error}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {weather && (
              <>
                <WeatherCard 
                  weather={weather} 
                  onToggleFavorite={handleToggleFavorite}
                  isFavorite={isFavorite(weather.city)}
                />
                <WeatherAnimation condition={weather.condition} />
                {weather.forecast && <WeatherForecast forecast={weather.forecast} />}
              </>
            )}

            {favorites.length > 0 && (
              <FavoriteCities 
                onCitySelect={handleSearch}
                currentCity={currentCity}
              />
            )}

            {!weather && !loading && !error && (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Search for a City</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enter a city name above to get detailed weather information and forecasts.
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>

        <footer className="relative z-10 container mx-auto px-4 py-8 mt-16">
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>© 2025 NextWeather. Powered by OpenWeatherMap API.</p>
            <p className="mt-2 text-xs">Developed with ❤️ by Batuhan Açan</p>
          </div>
        </footer>
      </div>
    </>
  )
}
