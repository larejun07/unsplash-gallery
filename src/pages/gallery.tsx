import Head from 'next/head'

import BaseLayout, { siteTitle } from '../components/layout/base-layout'

export default function Gallery() {
  return (
    <BaseLayout>
      <Head>
        <title>{siteTitle} - The Gallery</title>
      </Head>

      <div className="content-wrap">
        The gallery
      </div>
    </BaseLayout>
  )
}