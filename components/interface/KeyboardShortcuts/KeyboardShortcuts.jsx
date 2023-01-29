import { useHotkeys } from '@mantine/hooks'
import { useTheme } from 'next-themes'

const KeyboardShortcuts = props => {
  const { theme, setTheme } = useTheme()
  useHotkeys([['ctrl+J', () => console.log('first')]])
  useHotkeys([['mod+J', () => console.log('first')]])

  return null
}

export default KeyboardShortcuts
