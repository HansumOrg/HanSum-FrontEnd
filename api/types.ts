// this file contains api types that are used in the application

// Join 요청이 성공한 응답
export interface JoinSuccessResponse extends SuccessResponse {
  name: string;
  userId: number;
}

// 요청이 성공한 응답
export interface SuccessResponse {
  message: string;
}

// 요청이 실패한 응답
export interface FailedResponse {
  errorMessage: string;
}
