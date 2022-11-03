export const getPhotos = async (page: number) => {
  const res = await fetch(`${process.env.API_URL}/photos?page=${page}`)
  const responseJson = await res.json()

  return responseJson
}

export const searchPhotos = async (q: string, page?: number) => {
  const params = [`q=${q}`];
  const apiUrl = process.env.API_URL ?? '/api'

  if (page) {
    params.push(`page=${page}`)
  }

  const res = await fetch(`${apiUrl}/photos/search?${params.join('&')}`)
  const responseJson = await res.json()

  return responseJson
}
