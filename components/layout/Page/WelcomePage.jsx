import { useHotkeys } from '@mantine/hooks'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

const DefaultPage = ({ children }) => {
  const router = useRouter()

  // Hotkeys
  const { theme, setTheme } = useTheme()
  useHotkeys([['alt+T', () => setTheme(theme == 'light' ? 'dark' : 'light')]])
  useHotkeys([['alt+S', () => setTheme('system')]])

  return (
    <div className="w-full">
      <main className="gutter flex flex-col md:py-6 lg:grid lg:grid-cols-12 xl:motion-safe:transition-[padding,gap] 2xl:py-8  mobile:p-4">
        {children}
      </main>
    </div>
  )
}

DefaultPage.defaultProps = {
  children: 'Empty',
}

DefaultPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultPage
