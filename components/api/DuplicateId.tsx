import { CheckDuplicateProps, CheckDuplicateResponse } from '../../types'; // 타입 정의 import

// API의 기본 URL 설정
const API_BASE_URL = 'https://example.com'; // 실제 백엔드 서버 URL로 대체 혹은 현규 형이 설정해줄거임

// 아이디 중복 확인 함수
export default async function DuplicateId({
  loginId,
  onCheck,
}: CheckDuplicateProps): Promise<void> {
  try {
    const url = `${API_BASE_URL}/users/loginId?loginId=${encodeURIComponent(
      loginId,
    )}`;
    const response = await fetch(url);
    if (!response.ok) {
      // 서버에서 2xx 응답이 아닌 경우 오류 처리
      throw new Error(`HTTP status ${response.status}`);
    }
    const data = (await response.json()) as CheckDuplicateResponse;
    onCheck(data.is_available); // onCheck 콜백을 사용하여 결과를 전달
  } catch (error) {
    console.error('중복 확인 중 오류 발생:', error);
    onCheck(false); // 오류 발생 시 중복으로 간주하고 콜백 호출
  }
}
