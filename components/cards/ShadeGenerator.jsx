import { ColorPicker, Stack } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import Values from 'values.js'
import ToggleSwitch from '../interface/ToggleSwitch'
import tinycolor from 'tinycolor2'
import { Card } from '../layout'
import SelectBox from '../forms/SelectBox'
import _ from 'lodash'
import { useTheme } from 'next-themes'

function splitRGB(color) {
  let splitColor = color.trimStart().split(' ')

  let splitRGB = `rgb(${splitColor[0]}, ${splitColor[1]}, ${splitColor[2]})`

  return splitRGB
}

function Swatch({ shade, color, onClick }) {
  return (
    <div className="flex h-12 flex-col items-center justify-center">
      <div
        onClick={onClick}
        className={classNames('h-[1.4rem] w-[1.4rem] rounded-full', {
          'bg-primary-50': shade === 50,
          'bg-primary-100': shade === 100,
          'bg-primary-200': shade === 200,
          'bg-primary-300': shade === 300,
          'bg-primary-400': shade === 400,
          'bg-primary-500': shade === 500,
          'bg-primary-600': shade === 600,
          'bg-primary-700': shade === 700,
          'bg-primary-800': shade === 800,
          'bg-primary-900': shade === 900,
          'bg-primary-1000': shade === 1000,
        })}
        style={{ backgroundColor: color }}
      />
    </div>
  )
}

function ModePicker({ mode, setMode, value }) {
  return (
    <div className="mb-0.5 flex w-full flex-row items-center justify-start">
      <span
        className="mr-3.5 h-[2.475rem] w-[2.475rem] shrink-0 rounded-full shadow"
        style={{
          backgroundColor: value,
        }}
      />

      <SelectBox
        value={mode}
        options={['primary', 'background']}
        onChange={setMode}
      />

      {/* <select
        className="block w-full appearance-none rounded-md border-slate-900/15 py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-0 dark:border-slate-50/20 dark:bg-slate-50/20 dark:text-white dark:shadow"
        value={mode}
        onChange={e => setMode(e.target.value)}>
        <option value="primary">Primary</option>
        <option value="background">Background</option>
      </select> */}
    </div>
  )
}

export default function ShadeGenerator() {
  const body = document.body

  const startColor = splitRGB(
    getComputedStyle(body).getPropertyValue('--color-primary-500'),
  )

  const [value, setValue] = useState(startColor)
  const [shades, setShades] = useState(new Values(value).all(16.5).slice(1, -1))

  const [userTheme, setUserTheme] = useLocalStorage({
    key: 'userTheme',
    defaultValue: {
      primary: '',
      background: '',
      themeColors: {},
      invertButtons: false,
      disableBackgroundBlur: false,
    },
    // getInitialValueInEffect: true,
  })

  const [themeColors, setThemeColors] = useState({
    50: userTheme?.themeColors[50] || '239 246 255',
    100: userTheme?.themeColors[100] || '219 234 254',
    200: userTheme?.themeColors[200] || '191 219 254',
    300: userTheme?.themeColors[300] || '147 197 253',
    400: userTheme?.themeColors[400] || '96 165 250',
    500: userTheme?.themeColors[500] || '59 130 246',
    600: userTheme?.themeColors[600] || '37 99 235',
    700: userTheme?.themeColors[700] || '29 78 216',
    800: userTheme?.themeColors[800] || '30 64 175',
    900: userTheme?.themeColors[900] || '30 58 138',
    1000: userTheme?.themeColors[1000] || '5 18 39',
  })

  // const [primaryColor, setPrimaryColor] = useState(userTheme.primary)
  // const [backgroundColor, setBackgroundColor] = useState(userTheme.background)

  // const [invertButtons, setInvertButtons] = useState(userTheme.invertButtons)
  // const [disableBackgroundBlur, setDisableBackgroundBlur] = useState(
  //   userTheme.disableBackgroundBlur,
  // )

  const [mode, setMode] = useState('primary')

  // useEffect(() => {
  //   // let primaryVal = `rgb(${shades[5].rgb[0]}, ${shades[5].rgb[1]}, ${shades[5].rgb[2]})`
  //   // let bgVal = `rgb(${shades[10].rgb[0]}, ${shades[10].rgb[1]}, ${shades[10].rgb[2]})`

  //   setUserTheme({
  //     ...userTheme,
  //     primary: primaryColor,
  //     background: backgroundColor,
  //     invertButtons,
  //     disableBackgroundBlur,
  //   })
  // }, [primaryColor, backgroundColor])

  useEffect(() => {
    if (mode === 'primary') {
      shades.map((shade, idx) => {
        if (idx === 10) {
          return
        }

        setThemeColors({
          ...themeColors,
          50: `${shades[0].rgb[0]} ${shades[0].rgb[1]} ${shades[0].rgb[2]}`,
          100: `${shades[1].rgb[0]} ${shades[1].rgb[1]} ${shades[1].rgb[2]}`,
          200: `${shades[2].rgb[0]} ${shades[2].rgb[1]} ${shades[2].rgb[2]}`,
          300: `${shades[3].rgb[0]} ${shades[3].rgb[1]} ${shades[3].rgb[2]}`,
          400: `${shades[4].rgb[0]} ${shades[4].rgb[1]} ${shades[4].rgb[2]}`,
          500: `${shades[5].rgb[0]} ${shades[5].rgb[1]} ${shades[5].rgb[2]}`,
          600: `${shades[6].rgb[0]} ${shades[6].rgb[1]} ${shades[6].rgb[2]}`,
          700: `${shades[7].rgb[0]} ${shades[7].rgb[1]} ${shades[7].rgb[2]}`,
          800: `${shades[8].rgb[0]} ${shades[8].rgb[1]} ${shades[8].rgb[2]}`,
          900: `${shades[9].rgb[0]} ${shades[9].rgb[1]} ${shades[9].rgb[2]}`,
        })

        console.log(themeColors)

        // if (idx === 0) {
        //   body.style.setProperty(
        //     `--color-primary-${50}`,
        //     `${shades[idx].rgb[0]} ${shades[idx].rgb[1]} ${shades[idx].rgb[2]}`,
        //   )
        // }

        // body.style.setProperty(
        //   `--color-primary-${idx * 100}`,
        //   `${shades[idx].rgb[0]} ${shades[idx].rgb[1]} ${shades[idx].rgb[2]}`,
        // )
      })
    } else if (mode === 'background') {
      shades.map((shade, idx) => {
        // if (idx === 10) {
        //   body.style.setProperty(
        //     `--color-primary-${1000}`,
        //     value.replace(/rgb\(/g, '').replace(/\)/g, '').replace(/,/g, ''),
        //   )
        // }
      })
    }

    setUserTheme({
      ...userTheme,
      themeColors: themeColors,
    })
  }, [shades, value])

  useEffect(() => {
    if (mode === 'primary') {
      setValue(startColor)
    } else {
      setValue(
        splitRGB(
          getComputedStyle(body).getPropertyValue('--color-primary-1000'),
        ),
      )
    }
  }, [mode])

  function handleOnChange(color) {
    setValue(color)

    if (mode === 'primary') {
      setShades(new Values(color).all(16.5).slice(1, -1))

      setUserTheme({
        ...userTheme,
        primary: color,
      })
    } else if (mode === 'background') {
      setUserTheme({
        ...userTheme,
        background: color,
        themeColors: {
          ...themeColors,
          1000: color
            .replace(/rgb\(/g, '')
            .replace(/\)/g, '')
            .replace(/,/g, ''),
        },
      })
    }
  }

  const throttledHandleOnChange = _.throttle(handleOnChange, 100)

  function resetAll() {
    // setValue('rgb(59, 130, 246)')

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
      body.style.setProperty('--color-primary-' + color, defaultColors[color])
    }

    setMode('primary')
    handleOnChange('rgb(59, 130, 246)')
  }

  function handleInvertButtons() {
    setUserTheme({
      ...userTheme,
      invertButtons: !userTheme.invertButtons,
    })
  }

  function handleDisableBackgroundBlur() {
    setUserTheme({
      ...userTheme,
      disableBackgroundBlur: !userTheme.disableBackgroundBlur,
    })
  }

  return (
    <div>
      <Stack align="center">
        <ModePicker mode={mode} setMode={setMode} value={value} />

        <ColorPicker
          fullWidth
          format="rgb"
          value={mode === 'primary' ? userTheme.primary : userTheme.background}
          onChange={val => throttledHandleOnChange(val)}
        />
        {/* <Text>{value}</Text> */}
      </Stack>

      <div className="mt-2 -mb-1.5 flex items-center justify-between gap-2">
        {shades.map((shade, index) => (
          <Swatch
            onClick={() => {
              if (index !== 10) {
                setMode('primary')
              } else {
                setMode('background')
              }
            }}
            key={index}
            color={
              index !== 10 &&
              splitRGB(`${shade.rgb[0]} ${shade.rgb[1]} ${shade.rgb[2]}`)
            }
            shade={index === 10 && 1000}
          />
        ))}
      </div>

      <Card.Line className={'my-3.5'} />

      <div className="flex items-center justify-between gap-2">
        <label className="flex items-center gap-1.5 text-[15px] font-normal text-slate-600 dark:text-primary-50/80">
          Invert Button Text
        </label>
        <ToggleSwitch
          enabled={userTheme.invertButtons}
          onChange={handleInvertButtons}
        />
      </div>

      <Card.Line className={'my-3.5'} />

      <div className="flex items-center justify-between gap-2">
        <label className="flex items-center gap-1.5 text-[15px] font-normal text-slate-600 dark:text-primary-50/80">
          Disable Backdrop Blur
        </label>
        <ToggleSwitch
          enabled={userTheme.disableBackgroundBlur}
          onChange={handleDisableBackgroundBlur}
        />
      </div>

      <Card.Line className={'my-3.5'} />

      <span
        className="flex w-full cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-100 p-1.5 text-center text-sm font-medium dark:bg-opacity-20 dark:shadow"
        onClick={resetAll}>
        Reset All
      </span>
    </div>
  )
}
