import React, { useState, createContext, useContext, useMemo } from 'react';
import { MyPageStateType } from '../../types';

export interface MyPageContextType {
  myPageState: MyPageStateType;
  setMyPageState: React.Dispatch<React.SetStateAction<MyPageStateType>>;
}

const defaultMyPageContextType: MyPageStateType = {
  user_id: 1, // 로그인한 유저의 user_id
  username: 'john_doe',
  mbti: 'INTJ',
  interested_location: ['성산일출봉', '만장굴'],
  interested_hobby: ['독서', '요리'],
  interested_food: ['고기국수', '해물라면'],
  sticker: [
    {
      sticker_id: 1,
      user_id: 1,
      sticker_text: '배려심이 깊어요',
      sticker_count: 5,
    }, // 스티커 API를 통해 받아온 데이터
    {
      sticker_id: 2,
      user_id: 1,
      sticker_text: '항상 웃음을 잃지 않아요',
      sticker_count: 3,
    },
  ],
};

const MyPageContext = createContext<MyPageContextType>({
  myPageState: defaultMyPageContextType,
  setMyPageState: () => {},
});

const MyPageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [myPageState, setMyPageState] = useState<MyPageStateType>(
    defaultMyPageContextType,
  );

  const myPageContextState = useMemo(
    () => ({
      myPageState,
      setMyPageState,
    }),
    [myPageState, setMyPageState],
  );

  return (
    <MyPageContext.Provider value={myPageContextState}>
      {children}
    </MyPageContext.Provider>
  );
};

export const useMyPageContext = () => {
  const context = useContext(MyPageContext);
  if (context === undefined) {
    throw new Error(
      'useSearchContext must be used within a SearchContextProvider',
    );
  }
  return context;
};

export default MyPageContextProvider;
