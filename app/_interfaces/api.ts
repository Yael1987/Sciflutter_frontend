export interface User {
  photos: {
    profile: string
    cover: string
  },
  _id: string,
  name: string,
  email: string,
  lastName: string,
  role: string,
  twoStepsAuthentication: boolean,
  status: string,
  socialLinks: string[],
  __v: number
}

interface ApiResponseBase {
  success: boolean,
  message: string
}

export interface ApiErrorResponse extends ApiResponseBase {
  success: false,
  status: string
}

export interface ApiSuccessResponse extends ApiResponseBase {
  success: true,
  data: {
    user?: User;
  };
  token?: string;
}