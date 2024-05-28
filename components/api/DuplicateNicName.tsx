import {
  CheckNicknameProps,
  CheckNicknameResponse,
} from '../../screens/get-started/register/types';
// API의 기본 URL 설정
const API_BASE_URL = 'https://example.com'; // 실제 백엔드 서버 URL로 대체

// 아이디 중복 확인 함수
export default async function DuplicateNicName({
  nickName,
  onCheck,
}: CheckNicknameProps): Promise<void> {
  try {
    const url = `${API_BASE_URL}/users/nickname?nickname=${encodeURIComponent(
      nickName,
    )}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }
    const data = (await response.json()) as CheckNicknameResponse;
    onCheck(data.is_available);
  } catch (error) {
    onCheck(false);
    console.error('중복 확인 중 오류 발생:', error);
  }
}
