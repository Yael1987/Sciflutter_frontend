"use server"
const REVALIDATE_TIME = 60 * 5

export const getArticlesOfAuthor = async (authorId: string) => {
  const response = await fetch(`${process.env.BACKEND_URL}/articles/?author=${authorId}`, { next: { revalidate: REVALIDATE_TIME } })
  const data = await response.json()

  return data
}