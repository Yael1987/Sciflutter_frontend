export interface UserStats {
  followers: number;
  articles: number;
  likes: number;
}

export interface UserPreview extends UserStats{
  _id?: string,
  name: string,
  lastName: string,
  discipline?: string | null,
  photos: {
    profile: string
  }
}

export interface User {
  photos: {
    profile: string;
    cover: string;
  };
  _id: string;
  name: string;
  role: string;
  lastName: string;
  socialLinks: string[];
  discipline?: string;
  description?: string;
}

export interface LoggedUser extends User{
  email: string;
  twoStepsAuthentication: boolean;
  status: string;
  isAdmin: boolean;
}

export interface ArticlePreview{
  _id: string,
  name: string,
  image: string,
  author: {
    photos: {
      profile: string
    },
    _id?: string,
    name: string,
    lastName: string
  },
  resume: string,
  discipline: string,
  createdAt: string
}

export interface DraftPreview{
  _id: string,
  name: string,
  image: string,
  resume: string,
  author: string,
  discipline: string,
  createdAt: string
}

export interface Article extends ArticlePreview{
  likes: number,
  introduction: string,
  content: string,
  bibliography: string
}

export interface Draft extends DraftPreview {
  introduction: string;
  content?: string;
  bibliography?: string;
  images: string[];
  requested: boolean
}

export interface ApiResponseBase {
  success: boolean,
  message: string
}

export interface ApiErrorResponse extends ApiResponseBase {
  success: false,
  status: string
}

export interface ApiSuccessResponse extends ApiResponseBase {
  success: true;
  results?: number;
  data: {
    user?: User | LoggedUser;
    users?: UserPreview[];
    article?: Article;
    draft?: Draft;
    drafts?: DraftPreview[];
    articles?: ArticlePreview[];
    saves?: ArticlePreview[];
    follow?: boolean;
    like?: boolean;
    stats?: UserStats;
  };
  token?: string;
}