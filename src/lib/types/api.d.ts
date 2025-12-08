declare type SuccessfulResponse<T> = {
  message: "success";
} & T;

declare type ErrorResponse = {
  error: string;
  statusCode: number;
};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;

declare type Metadata = {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
};

declare type PaginatedResponse<T> = {
  metadata: Metadata;
} & T;
