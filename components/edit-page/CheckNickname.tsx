import { NicknameProps } from '../../types';

function CheckNickname(props: NicknameProps) {
  const { nickname, user, userId } = props;
  let check = 0;
  if (user.some(inform => inform.nickname === nickname) || nickname === '') {
    check = 2;
  }
  if (check !== 2) {
    user[userId - 1].nickname = nickname;
    check = 1;
  }
  return check;
}
export default CheckNickname;
