export const getPhotos = async (page: number) => {
  const res = await fetch(`${process.env.API_URL}/photos?page=${page}`)
  const responseJson = await res.json()

  return responseJson
}