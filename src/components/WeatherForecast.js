export default function WeatherForecast({ forecast }) {
  if (!forecast || forecast.length === 0) return null

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
      'Squall': '💨',
      'Tornado': '🌪️',
      'Sunny': '☀️'
    }
    return icons[condition] || '🌤️'
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
          <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          5-Day Forecast
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {forecast.map((day, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-4 text-center hover:scale-105 transition-all duration-300 border border-blue-100 dark:border-gray-600">
              <div className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                {index === 0 ? 'Today' : formatDate(day.date)}
              </div>
              
              <div className="text-3xl mb-3">
                {getWeatherIcon(day.condition)}
              </div>
              
              <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                {Math.round(day.temp)}°C
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-300 mb-3 capitalize">
                {day.condition}
              </div>
              
              <div className="space-y-1 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Humidity</span>
                  <span className="font-medium">{day.humidity}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Wind</span>
                  <span className="font-medium">{day.windSpeed} m/s</span>
                </div>
                {day.temp_min && day.temp_max && (
                  <div className="flex justify-between">
                    <span>Range</span>
                    <span className="font-medium">{Math.round(day.temp_min)}° / {Math.round(day.temp_max)}°</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
