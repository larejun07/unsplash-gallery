import styles from '../styles/Home.module.css'

import BaseLayout from '@components/layout/base-layout'

export default function Home() {
  return (
    <BaseLayout>
      <div className="content-wrap">
        <h1 className={styles.title}>Welcome</h1>
      </div>
    </BaseLayout>
  )
}
