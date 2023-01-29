import tinycolor from 'tinycolor2'

export default function useHueRotate(inputColor, color1, color2) {
  // Convert the colors to HSL using tinycolor's toHsl() method
  const hsl1 = tinycolor(color1).toHsl()
  const hsl2 = tinycolor(color2).toHsl()

  // Calculate the hue difference between the two colors
  const hueDiff = hsl2.h - hsl1.h

  // Rotate the input color by the hue difference
  const rotatedColor = tinycolor(inputColor).spin(hueDiff).toHexString()

  // Return the rotated color
  return rotatedColor
}
