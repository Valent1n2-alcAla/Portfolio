import { useEffect } from 'react'

// Fait apparaître les sections au défilement.
// Rien ne se passe si l'utilisateur préfère réduire les animations.
function useReveal(selector: string) {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion || !('IntersectionObserver' in window)) return

    const elements = document.querySelectorAll<HTMLElement>(selector)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px' },
    )

    elements.forEach((element) => {
      element.classList.add('reveal')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [selector])
}

export default useReveal
