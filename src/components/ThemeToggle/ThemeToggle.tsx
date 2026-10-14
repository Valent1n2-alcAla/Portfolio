import { useEffect, useState } from 'react'
import './ThemeToggle.css'

type Theme = 'light' | 'dark'

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.dataset.theme = savedTheme
    }
  }, [])

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'

    setTheme(newTheme)
    document.documentElement.dataset.theme = newTheme

    localStorage.setItem('theme', newTheme)
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Changer de thème"
    >
      {theme === 'light' ? '☾' : '☀'}
    </button>
  )
}

export default ThemeToggle