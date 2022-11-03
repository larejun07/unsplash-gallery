import { useCallback, useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import BaseLayout, { siteTitle } from '@components/layout/base-layout'
import { getPhotos, searchPhotos } from '@lib/photo.service'
import Photos from '@components/photo/photos'
import PageNav from '@components/nav/page-nav'
import Search from '@components/search/search'

interface GalleryProps {
  data?: Photo[];
  page: number;
  q?: string;
}

const Gallery = ({ data, page, q }: GalleryProps) => {
  const [photos, setPhotos] = useState(data)
  const [searchQ, setSearchQ] = useState(q)
  const [currentPage, setCurrentPage] = useState(page)
  const router = useRouter()

  useEffect(() => {
    setPhotos(data)
    setCurrentPage(page)
  }, [data, page, setCurrentPage])

  const handleSearch = useCallback(async (query: string) => {
    try {
      if (query) {
        const result = await searchPhotos(query)
        setPhotos(result)
        setSearchQ(query)
        router.push(`/gallery?q=${query}`)
      } else {
        setSearchQ('')
        setCurrentPage(1)
        router.push('/gallery')
      }
    } catch (error) {
      return error
    }
  }, [setPhotos, setSearchQ, setCurrentPage]);

  return (
    <BaseLayout>
      <Head>
        <title>{`${siteTitle} - The Gallery`}</title>
      </Head>

      <div className="content-wrap">
        <Search onSearch={handleSearch} query={q} />
        {photos && photos.length > 0
          ? (
            <>
              <Photos data={photos} />
              <PageNav page={currentPage} query={searchQ} />
            </>
          )
          : <p className="text-center">No results found</p>
        }
      </div>
    </BaseLayout>
  )
}

export default Gallery

export const getServerSideProps: GetServerSideProps<GalleryProps> = async ({query}) => {
  const page = Number(query.page) || 1
  const keyword = query.q ? String(query.q) : ''
  let data = null

  if (query.q) {
    data = await searchPhotos(keyword, page)
  } else {
    data = await getPhotos(page)
  }

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data,
      page,
      q: keyword
    },
  }
}