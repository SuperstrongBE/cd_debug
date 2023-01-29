import { useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './../../tailwind.config.js'
import useWindowSize from './useWindowSize'

const twConfig = resolveConfig(tailwindConfig)
const breakpoints = twConfig.theme.screens

export default function useAbbreviated(screenSize) {
  const windowSize = useWindowSize()
  const [abbreviated, setAbbreviated] = useState()

  let threshold = screenSize

  switch (screenSize) {
    // Todo: Define more breakpoint ranges here if needed
    case 'mobile':
      threshold = parseInt(breakpoints.mobile.max.replace('px', ''))
      break
    case 'tablet':
      threshold = parseInt(breakpoints.tablet.max.replace('px', ''))
      break
    case '2xl':
      threshold = '1536'
      break
  }

  useEffect(() => {
    if (windowSize.width <= threshold) {
      setAbbreviated(true)
    } else if (windowSize.width > threshold) {
      setAbbreviated(false)
    }
  }, [windowSize])

  return [abbreviated, setAbbreviated]
}
