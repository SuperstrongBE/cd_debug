import { Inter } from '@next/font/google'
import styles from './page.module.css'

import ProtonButton from '@/components/ProtonButton'
import RootLayout from './layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>
    <main className={styles.main}>
      
        <ProtonButton></ProtonButton>
      
      </main>
      </RootLayout>
  )
}
