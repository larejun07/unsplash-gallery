import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import BaseLayout, { siteTitle } from '@components/layout/base-layout'
import { getPhotos } from '@lib/photo.service';
import Photos from '@components/photo/photos';
import PageNav from '@components/nav/page-nav'

interface GalleryProps {
  data?: Photo[];
  page: number;
}

const Gallery = ({ data, page }: GalleryProps) => {
  const [photos, setPhotos] = useState(data)

  useEffect(() => {
    console.log('Pager:', page, data)
    setPhotos(data);
  }, [page, data])

  return (
    <BaseLayout>
      <Head>
        <title>{`${siteTitle} - The Gallery`}</title>
      </Head>

      <div className="content-wrap">        
        <Photos data={photos ?? []} />
        <PageNav page={page} />
      </div>
    </BaseLayout>
  )
}

export default Gallery

export const getServerSideProps: GetServerSideProps<GalleryProps> = async ({query}) => {
  const page = Number(query.page) || 1
  const data = await getPhotos(page)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
      page,
    },
  }
}