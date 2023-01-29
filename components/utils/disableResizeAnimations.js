import { useEffect } from 'react'

function handleResize() {
  const bodyClassList = document.body.classList
  let resizeTimer

  if (!bodyClassList.contains('disableAnimations')) {
    bodyClassList.add('disableAnimations')
  }

  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    bodyClassList.remove('disableAnimations')
  }, 400)
}

export default function disableResizeAnimations() {
  useEffect(() => {
    window.addEventListener('resize', () => handleResize())

    return () => {
      window.removeEventListener('resize', () => handleResize())
    }
  }, [])
}
