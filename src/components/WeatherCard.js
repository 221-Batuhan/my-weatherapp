export default function WeatherCard({ weather, onToggleFavorite, isFavorite }) {
  if (!weather) return null

  const getWeatherIcon = (condition) => {
    const icons = {
      'Clear': '☀️',
      'Clouds': '☁️',
      'Rain': '🌧️',
      'Drizzle': '🌦️',
      'Thunderstorm': '⛈️',
      'Snow': '❄️',
      'Mist': '🌫️',
      'Smoke': '🌫️',
      'Haze': '🌫️',
      'Dust': '🌫️',
      'Fog': '🌫️',
      'Sand': '🌫️',
      'Ash': '🌫️',
      'Squall': '🌬️',
      'Tornado': '🌪️',
      'Sunny': '☀️'
    }
    return icons[condition] || '🌤️'
  }

  const getWeatherGradient = (condition) => {
    const gradients = {
      'Clear': 'from-yellow-400 via-orange-500 to-red-500',
      'Clouds': 'from-gray-400 via-blue-500 to-indigo-600',
      'Rain': 'from-blue-400 via-indigo-500 to-purple-600',
      'Drizzle': 'from-blue-300 via-blue-400 to-indigo-500',
      'Thunderstorm': 'from-purple-500 via-indigo-600 to-gray-700',
      'Snow': 'from-blue-200 via-blue-300 to-indigo-400',
      'Mist': 'from-gray-300 via-gray-400 to-blue-500',
      'Smoke': 'from-gray-400 via-gray-500 to-gray-600',
      'Haze': 'from-gray-300 via-gray-400 to-blue-500',
      'Dust': 'from-yellow-300 via-orange-400 to-red-500',
      'Fog': 'from-gray-300 via-gray-400 to-blue-500',
      'Sand': 'from-yellow-300 via-orange-400 to-red-500',
      'Ash': 'from-gray-400 via-gray-500 to-gray-600',
      'Squall': 'from-blue-400 via-indigo-500 to-purple-600',
      'Tornado': 'from-gray-500 via-gray-600 to-black',
      'Sunny': 'from-yellow-400 via-orange-500 to-red-500'
    }
    return gradients[condition] || 'from-blue-400 via-purple-500 to-pink-500'
  }

  const formatTime = () => {
    return new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  const formatDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className={`bg-gradient-to-br ${getWeatherGradient(weather.condition)} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 overflow-hidden relative`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <div className="relative z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2">{weather.city}</h2>
                  <p className="text-lg opacity-90">{weather.country}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => onToggleFavorite(weather.city)}
                    className="p-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-200"
                  >
                    <svg className={`w-6 h-6 ${isFavorite ? 'text-yellow-400 fill-current' : 'text-white'}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                  <div className="text-right">
                    <p className="text-sm opacity-80">{formatTime()}</p>
                    <p className="text-sm opacity-80">{formatDate()}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="text-8xl">{getWeatherIcon(weather.condition)}</div>
                <div>
                  <div className="text-6xl font-light mb-2">{Math.round(weather.temperature)}°C</div>
                  <p className="text-2xl opacity-90 capitalize">{weather.condition}</p>
                  <p className="text-lg opacity-80 capitalize">{weather.description}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Weather Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Humidity</span>
                  <span className="font-semibold">{weather.humidity}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Wind Speed</span>
                  <span className="font-semibold">{weather.windSpeed} m/s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Feels Like</span>
                  <span className="font-semibold">{Math.round(weather.temperature)}°C</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Pressure</span>
                  <span className="font-semibold">{weather.pressure || '1013'} hPa</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Visibility</span>
                  <span className="font-semibold">{(weather.visibility || 10000) / 1000} km</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🌅</div>
              <p className="text-sm opacity-80">Sunrise</p>
              <p className="font-semibold">6:30 AM</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🌇</div>
              <p className="text-sm opacity-80">Sunset</p>
              <p className="font-semibold">7:45 PM</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🌡️</div>
              <p className="text-sm opacity-80">Min/Max</p>
              <p className="font-semibold">{Math.round(weather.temperature - 5)}° / {Math.round(weather.temperature + 5)}°</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">💨</div>
              <p className="text-sm opacity-80">Wind Dir</p>
              <p className="font-semibold">NE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
