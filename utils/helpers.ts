import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SuccessResponse, FailedResponse } from '../api/types';

/**
 * 주어진 오류가 FetchBaseQueryError의 인스턴스인지 확인합니다.
 * @param error - 확인할 오류입니다.
 * @returns FetchBaseQueryError인지 여부를 나타내는 부울 값입니다.
 */
export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

/**
 * 알 수 없는 오류를 문자열 'message' 속성을 가진 객체로 좁히는 타입 프레디케이트입니다.
 * @param error - 확인할 오류입니다.
 * @returns 'message' 속성이 문자열 타입인지 여부를 나타내는 부울 값입니다.
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

/**
 * 주어진 응답이 SuccessResponse의 인스턴스인지 확인합니다.
 * @param response - 확인할 응답입니다.
 * @returns SuccessResponse인지 여부를 나타내는 부울 값입니다.
 */
export function isSuccessResponse(
  response: unknown,
): response is SuccessResponse {
  return (
    typeof response === 'object' && response !== null && 'message' in response
  );
}

/**
 * 주어진 응답이 FailedResponse의 인스턴스인지 확인합니다.
 * @param response - 확인할 응답입니다.
 * @returns FailedResponse인지 여부를 나타내는 부울 값입니다.
 */
export function isFailedResponse(
  response: unknown,
): response is FailedResponse {
  return (
    typeof response === 'object' &&
    response !== null &&
    'errorMessage' in response
  );
}
