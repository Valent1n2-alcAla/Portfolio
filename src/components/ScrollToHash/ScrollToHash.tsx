import { useEffect } from 'react'
import { useLocation } from 'react-router'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1))
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      element?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToHash