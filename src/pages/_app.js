import { useState, useEffect } from 'react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <div className={`min-h-screen transition-theme ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}
