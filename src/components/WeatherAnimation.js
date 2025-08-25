export default function WeatherAnimation({ condition }) {
  const getAnimation = () => {
    switch (condition) {
      case 'Rain':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-8 bg-blue-400 opacity-60 animate-rain"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.5 + Math.random() * 0.5}s`
                }}
              />
            ))}
          </div>
        )
      case 'Snow':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-80 animate-snow"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )
      case 'Thunderstorm':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-6 bg-purple-400 opacity-70 animate-rain"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 1.5}s`,
                  animationDuration: `${0.3 + Math.random() * 0.3}s`
                }}
              />
            ))}
            <div className="absolute inset-0 bg-yellow-400 opacity-0 animate-lightning" />
          </div>
        )
      case 'Clear':
      case 'Sunny':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400 rounded-full animate-pulse opacity-80" />
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-float"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${10 + Math.random() * 30}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )
      case 'Clouds':
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-gray-300 dark:bg-gray-600 rounded-full opacity-60 animate-cloud"
                style={{
                  width: `${40 + Math.random() * 60}px`,
                  height: `${20 + Math.random() * 30}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${10 + Math.random() * 40}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${8 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        )
      default:
        return null
    }
  }

  return getAnimation()
}
