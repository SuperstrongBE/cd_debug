import { Inter } from '@next/font/google'
import styles from './page.module.css'
import ProtonAuthProvider from '@/components/providers/AuthProvider'
import ProtonButton from '@/components/ProtonButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <ProtonAuthProvider>
        <ProtonButton></ProtonButton>
      </ProtonAuthProvider>
    </main>
  )
}
