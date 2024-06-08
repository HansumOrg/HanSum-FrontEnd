import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SuccessResponse, FailedResponse } from '../api/types';

/**
 * Type predicate to narrow an unknown error to `FetchBaseQueryError`
 */
export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

/**
 * Type predicate to narrow an unknown error to an object with a string 'message' property
 */
export function isErrorWithMessage(
  error: unknown,
): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof error.message === 'string'
  );
}

// 요청이 성공한 응답인지 구분하는 함수입니다.
export function isSuccessResponse(
  response: unknown,
): response is SuccessResponse {
  return (
    typeof response === 'object' && response !== null && 'message' in response
  );
}

// 요청이 실패한 응답인지 구분하는 함수입니다.
export function isFailedResponse(
  response: unknown,
): response is FailedResponse {
  return (
    typeof response === 'object' &&
    response !== null &&
    'errorMessage' in response
  );
}

/**
 * 주어진 응답이 Access 토큰을 재발급해야 하는지 여부를 나타내는지 확인합니다
 * @param response - 확인할 응답입니다.
 * @returns Access 토큰을 재발급해야 하는지 여부를 나타내는 부울 값입니다.
 */
export function isAccessTokenExpired(response: unknown): boolean {
  return (
    typeof response === 'object' &&
    response !== null &&
    'errorMessage' in response &&
    (response.errorMessage === 'access token expired' ||
      response.errorMessage === 'invalid access token')
  );
}
