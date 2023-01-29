import { ColorPicker, Text, Stack } from '@mantine/core'
import classNames from 'classnames'
import { rgb } from 'color'
import { useEffect } from 'react'
import { useState } from 'react'
import ShadeGenerator from './ShadeGenerator'

function splitRGB(color) {
  let splitColor = color.trimStart().split(' ')

  let colorRGB = {
    r: splitColor[0],
    g: splitColor[1],
    b: splitColor[2],
  }

  return colorRGB
}

function parseRGB(color) {
  let splitColor = color.replace('rgb(', '').replace(')', '').split(', ')

  let colorRGB = {
    r: splitColor[0],
    g: splitColor[1],
    b: splitColor[2],
  }

  return colorRGB
}

export default function DebugMenu() {
  const body = document.body

  const startColor = splitRGB(
    getComputedStyle(body).getPropertyValue('--color-primary-500'),
  )

  const [activeColor, setActiveColor] = useState('--color-primary-500')

  const [value, setValue] = useState(`
    rgb(${startColor.r}, ${startColor.g}, ${startColor.b})`)

  const [primaryColor, setPrimaryColor] = useState({
    50: getComputedStyle(body).getPropertyValue('--color-primary-50'),
    100: getComputedStyle(body).getPropertyValue('--color-primary-100'),
    200: getComputedStyle(body).getPropertyValue('--color-primary-200'),
    300: getComputedStyle(body).getPropertyValue('--color-primary-300'),
    400: getComputedStyle(body).getPropertyValue('--color-primary-400'),
    500: getComputedStyle(body).getPropertyValue('--color-primary-500'),
    600: getComputedStyle(body).getPropertyValue('--color-primary-600'),
    700: getComputedStyle(body).getPropertyValue('--color-primary-700'),
    800: getComputedStyle(body).getPropertyValue('--color-primary-800'),
    900: getComputedStyle(body).getPropertyValue('--color-primary-900'),
    1000: getComputedStyle(body).getPropertyValue('--color-primary-1000'),
  })

  useEffect(() => {
    setPrimaryColor({
      50: getComputedStyle(body).getPropertyValue('--color-primary-50'),
      100: getComputedStyle(body).getPropertyValue('--color-primary-100'),
      200: getComputedStyle(body).getPropertyValue('--color-primary-200'),
      300: getComputedStyle(body).getPropertyValue('--color-primary-300'),
      400: getComputedStyle(body).getPropertyValue('--color-primary-400'),
      500: getComputedStyle(body).getPropertyValue('--color-primary-500'),
      600: getComputedStyle(body).getPropertyValue('--color-primary-600'),
      700: getComputedStyle(body).getPropertyValue('--color-primary-700'),
      800: getComputedStyle(body).getPropertyValue('--color-primary-800'),
      900: getComputedStyle(body).getPropertyValue('--color-primary-900'),
      1000: getComputedStyle(body).getPropertyValue('--color-primary-1000'),
    })
  }, [value])

  function setColor(value) {
    const body = document.body
    let splitColor = parseRGB(value)

    body.style.setProperty(
      activeColor,
      splitColor.r + ' ' + splitColor.g + ' ' + splitColor.b,
    )

    setValue(`rgb(${splitColor.r}, ${splitColor.g}, ${splitColor.b})`)
  }

  function handleOnChange(val) {
    console.log(parseRGB(val))
    setColor(val)
  }

  let colorVar = getComputedStyle(body).getPropertyValue('--color-primary-600')

  function randomNumberUpTo255() {
    return Math.floor(Math.random() * 255)
  }

  function resetAll() {
    const defaultColors = {
      50: ' 239 246 255',
      100: ' 219 234 254',
      200: ' 191 219 254',
      300: ' 147 197 253',
      400: ' 96 165 250',
      500: ' 59 130 246',
      600: ' 37 99 235',
      700: ' 29 78 216',
      800: ' 30 64 175',
      900: ' 30 58 138',
      1000: ' 5 18 39',
    }

    for (let color of Object.keys(defaultColors)) {
      console.log('--color-primary-' + color)

      body.style.setProperty('--color-primary-' + color, primaryColor[color])
    }

    setActiveColor('--color-primary-500')
    setValue('rgb(59, 130, 246)')
    setPrimaryColor(defaultColors)
  }

  function setColorVar() {
    colorVar = `rgb(${randomNumberUpTo255()}, ${randomNumberUpTo255()}, ${randomNumberUpTo255()})`
    setColor(colorVar)
  }

  function Swatch({ color, cssVar }) {
    let splitColor = color.trimStart().split(' ')
    console.log(cssVar)

    let colorRGB = {
      r: splitColor[0],
      g: splitColor[1],
      b: splitColor[2],
    }

    // console.log(color, colorRGB)
    console.log(primaryColor)

    return (
      <div className="flex h-12 cursor-pointer flex-col items-center justify-center">
        <div
          onClick={() => {
            setActiveColor(cssVar)
            setValue(`rgb(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b})`)
          }}
          className={classNames('h-5 w-5 rounded-full', {
            ' border-transparent ring-2 ring-slate-200 ring-offset-2 dark:ring-slate-900/20 dark:ring-offset-0':
              activeColor === cssVar,
          })}
          style={{
            backgroundColor: `rgb(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b})`,
          }}></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <ShadeGenerator />

      {/* <Stack align="center">
        <ColorPicker
          fullWidth
          format="rgb"
          value={value}
          onChange={val => handleOnChange(val)}
        />
        <Text>{value}</Text>
      </Stack>

      <div className="flex items-center justify-center gap-2">
        {Object.keys(primaryColor).map(key => (
          <Swatch cssVar={'--color-primary-' + key} color={primaryColor[key]} />
        ))}
      </div>

      <span
        className="flex w-full items-center justify-center rounded-full bg-slate-100 p-1.5 text-center text-sm font-medium dark:bg-opacity-20"
        onClick={setColorVar}>
        Random Color
      </span>

      <span
        className="flex w-full items-center justify-center rounded-full bg-slate-100 p-1.5 text-center text-sm font-medium dark:bg-opacity-20"
        onClick={resetAll}>
        Reset All
      </span> */}
    </div>
  )
}
