import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'

import styles from './layout.module.css'

import Header from '../header/header'
import Footer from '../footer/footer'

export const siteTitle = 'Unsplash Gallery';

const BaseLayout: FC<PropsWithChildren> = (props) => {
  return (
    <div className="container mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default BaseLayout