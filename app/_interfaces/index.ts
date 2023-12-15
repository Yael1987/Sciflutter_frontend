export interface ArticlePreviewI {
  author: {
    name: string,
    lastName: string,
    photos: {
      profile: string
    }
  },
  discipline: string,
  name: string,
  resume: string,
  image: string,
  createdAt: string,
  id: string
}

export interface AuthorsPreviewI {
  id: string,
  name: string,
  lastName: string,
  photos: {
    profile: string
  },
  discipline: string,
  followers: number,
  likes: number,
  articles: number
}

export interface SearchResultsI {
  articles?: ArticlePreviewI[];
  authors?: AuthorsPreviewI[];
}