import { useState, useEffect } from 'react'

export default function FavoriteCities({ onCitySelect, currentCity }) {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const savedFavorites = localStorage.getItem('weatherFavorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const addToFavorites = (city) => {
    if (!favorites.includes(city)) {
      const newFavorites = [...favorites, city]
      setFavorites(newFavorites)
      localStorage.setItem('weatherFavorites', JSON.stringify(newFavorites))
    }
  }

  const removeFromFavorites = (city) => {
    const newFavorites = favorites.filter(fav => fav !== city)
    setFavorites(newFavorites)
    localStorage.setItem('weatherFavorites', JSON.stringify(newFavorites))
  }

  const isFavorite = (city) => favorites.includes(city)

  if (favorites.length === 0) return null

  return (
    <div className="w-full max-w-6xl mx-auto mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Favorite Cities
        </h3>
        
        <div className="flex flex-wrap gap-3">
          {favorites.map((city) => (
            <div key={city} className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-xl px-4 py-2 border border-blue-200 dark:border-gray-600">
              <button
                onClick={() => onCitySelect(city)}
                className={`font-medium transition-colors duration-200 ${
                  currentCity === city 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {city}
              </button>
              <button
                onClick={() => removeFromFavorites(city)}
                className="ml-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
