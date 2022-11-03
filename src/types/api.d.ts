interface UnsplashPhotosArgs {
  page?: number;
  perPage?: number;
  orderBy?: string;
}

interface UnsplashSearchArgs extends UnsplashPhotosArgs {
  query: string;
}

interface UnsplashPhotosResponse {
  data?: Photo[];
  error?: string;
}

interface ApiErrorResponse {
  error: string;
  message?: string;
  data?: any;
  // detail?: string;
  // help?: string;
}

type ApiPhotosResponse = Photo[] | ApiErrorResponse;
