export interface ApiError {
  code: number;
  message: string;
}

export function isApiError<T>(res: T | ApiError): res is ApiError {
  return !!(res as ApiError)?.message;
}
