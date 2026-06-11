export type ApiSuccessResponse<T> = {
  success: true;
  message: string;
  data: T;
};

export type ApiErrorResponse = {
  success: false;
  message: string;
  errors?: unknown[];
};

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export type ApiClientOptions = {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | object | null;
  cache?: RequestCache;
};
