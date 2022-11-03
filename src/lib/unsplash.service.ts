import { createApi, OrderBy } from 'unsplash-js'

const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY ?? '',
  headers: {
    'Accept-Version': 'v1',
  },
})

export const getLatestPhotos = ({ page, perPage }: UnsplashPhotosArgs): Promise<UnsplashPhotosResponse> => {
  return new Promise((resolve, reject) => {
    unsplashApi.photos.list({
      page,
      perPage,
      orderBy: OrderBy.LATEST,
    })
      .then((result) => {
        if (result.type === 'error') {
          // console.log(result.errors)
          return reject({
            error: result.errors[0],
          })
        }

        const data = result.response
        const { results } = data
        // console.log(`Received ${results.length} photos out of ${total}`)
        // console.log('Data: ', results[0])
        return resolve({ data: results as Photo[] })
      })
  })
}

export const searchPhoto = ({ query, page, perPage }: UnsplashSearchArgs): Promise<UnsplashPhotosResponse> => {
  return new Promise((resolve, reject) => {
    unsplashApi.search.getPhotos({
      query,
      page,
      perPage,
      orderBy: 'relevant',
    })
      .then((result) => {
        if (result.type === 'error') {
          return reject({
            error: result.errors[0],
          })
        }

        const data = result.response
        const { total, results } = data
        return resolve({ data: results as Photo[] })
      })
  })
}