import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './header.module.css'

const Header = () => {
  const { asPath } = useRouter()

  return (
    <header className={styles['site-header']}>
      <nav className={styles.menu}>
        <ul className="list-none">
          <li className={asPath === '/' ? styles.active : ''}>
            <Link href="/">Home</Link>
          </li>
          <li className={asPath === '/gallery' ? styles.active: ''}>
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header