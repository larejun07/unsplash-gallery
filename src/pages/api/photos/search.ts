import type { NextApiRequest, NextApiResponse } from 'next'

import { searchPhoto } from '@lib/unsplash.service'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiPhotosResponse>
) {
  const { q, page, per_page } = req.query
  const offset = page ? Number(page) : 1;
  const limit = per_page ? Number(per_page) : 10;

  try {
    const result = await searchPhoto({
      query: String(q),
      page: offset,
      perPage: limit,
    })
    res.status(200).json(result.data ?? [])
  } catch (error: any) {
    res.status(400).json({
      error,
    })
  }
}
