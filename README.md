# Frontend Readme

## 기술 스택

- 언어 : Typescript
- 프레임워크 : React Native
- 라이브러리 : Redux Toolkit, RTK Query, React Navigation, Nativewind, ESLint, Prettier

## 역할 분담

- 신현규
    - 프론트엔드 팀장
    - Redux 비즈니스 로직 설계 및 구현
    - 네비게이션 설계 및 구현
    - 프로젝트 상태 관리
- 이지현
    - 전체 컴포넌트 수정
    - 네비게이션 및 라우터 수정
    - 화면 구현
    - 데이터 헨들링 보조
- 김민정
    - 화면 구현
    - 데이터 헨들링
    - 이벤트 헨들링 일부 구현

## 신경 쓴 부분

- **Redux 사용** : Redux를 사용하여 애플리케이션의 상태 관리를 중앙 집중화하였습니다. 상태의 예측 가능성을 높이고, 다양한 컴포넌트 간의 데이터 공유를 용이하게 만들었습니다. 또한, Redux DevTools를 통해 상태 변화를 쉽게 추적하고 디버깅을 효율화하였습니다.
- **RTKQ를 통한 데이터 처리** : RTK Query를 사용하여 서버와의 데이터 통신을 간소화하고 효율화하였습니다. RTK Query의 캐싱, 동기화, 쿼리 및 변이 처리를 통해 데이터의 일관성을 유지하고, 불필요한 네트워크 요청을 최소화하였습니다. 이를 통해 클라이언트와 서버 간의 데이터 흐름을 최적화하였습니다.
- **코드 컨벤션** : 일관된 코드 스타일을 유지하기 위해 ESLint와 Prettier를 도입하였습니다. 코드 리뷰 시 코드 스타일 관련 이슈를 줄이고, 유지 보수성을 높였습니다. 또한, 팀 내 협업 시 코드의 가독성과 일관성을 높이기 위해 코드 컨벤션을 문서화하여 공유하였습니다.
- **타입스크립트 사용** : 타입스크립트를 사용하여 코드의 안정성을 높였습니다. 명시적 타입 선언을 통해 컴파일 타임에 오류를 감지하고, IDE의 자동 완성 기능을 활용하여 개발 속도와 효율성을 향상시켰습니다. 또한, 타입 정의 파일을 작성하여 라이브러리 및 모듈의 재사용성을 높였습니다.
- **AsyncStorage를 통해 JWT 관리** : AsyncStorage를 사용하여 JWT를 로컬에 안전하게 저장하고 관리하였습니다. 사용자 로그인 시 JWT를 저장하고, 필요할 때마다 이를 사용하여 서버와의 인증을 처리하였습니다. 또한, 로그아웃 시 JWT를 삭제하여 보안성을 유지하고, 토큰 갱신 로직을 구현하여 만료된 토큰을 자동으로 갱신하였습니다.
- 컴포넌트 사용:컴포넌트 기반 아키텍처를 통해 애플리케이션을 모듈화하고 재사용성을 높였습니다. 각 기능을 독립적인 컴포넌트로 분리하여 유지보수와 확장성을 향상시켰습니다. 예를 들어, UI 요소를 재사용 가능한 컴포넌트로 작성하여 코드 중복을 줄이고, 공통된 스타일과 동작을 일관되게 유지했습니다. 또한, 컴포넌트 간의 명확한 인터페이스를 정의해 데이터와 이벤트를 효율적으로 전달했습니다.

## 트러블 슈팅

- **Query와 Mutation의 차이 이해** : RTK Query를 처음 사용하면서 Query와 Mutation의 차이에 대해 혼란이 왔습니다. Query는 데이터를 가져오는 데 사용되고, Mutation은 데이터를 변경하는 데 사용됩니다. 초기에는 두 가지 개념을 명확히 이해하지 못해 적절한 요청 방법을 선택하는 데 어려움을 겪었습니다. 공식 문서를 참고하며 이해를 돕는 예시와 설명을 찾아 공부하는 과정이 필요했습니다.
- **응답 후 처리와 캐싱 처리** : RTK Query를 사용하여 데이터를 요청하고 받은 후에 적절한 처리를 하는 과정에서 어려움을 겪었습니다. 특히, 비동기적으로 받은 데이터를 화면에 반영하고, 캐싱 처리를 통해 불필요한 네트워크 요청을 줄이는 방법을 습득하는 데 시간이 걸렸습니다. 여러 예시 코드와 공식 문서를 통해 응답 후 처리와 캐싱 처리의 원리를 이해하고, 실제로 구현하는 과정에서 트러블 슈팅을 진행했습니다.

## 시작 가이드

# Getting Started

> Note: Make sure you have completed the [React Native](https://reactnative.dev/docs/set-up-your-environment) setup instructions.
> 

## Step 1: Clone the Repository and Install Dependencies

Clone the repository from GitHub and install the necessary node modules.

```bash
# Clone the repository
git clone https://github.com/HansumOrg/HanSum-FrontEnd.git

# Navigate into the project directory
cd HanSum-FrontEnd

# Install node modules using npm
npm install

# OR install node modules using Yarn
yarn install

```

## Step 2: Configure Environment Variables

Create a .env file in the root of the project by referring to the .env.example file. Ensure that the API_BASE_URL in the .env file points to the backend server address.

```bash
# Copy the example environment file to create a new .env file
cp .env.example .env

# Edit the .env file to set the API_BASE_URL to your backend server address
# Example: API_BASE_URL=https://your-backend-server.com

```

## Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript bundler that comes with React Native.

To start Metro, run the following command from the root of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its own terminal. Open a new terminal from the root of your React Native project. Run the following command to start your Android app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android

```

### 디렉토리 구조

```
HanSum-FrontEnd
├── App.tsx                        # 애플리케이션 진입점
├── Gemfile
├── README.md
├── __tests__
├── android
├── api                            # API 관련 파일들
│   ├── endpoints                  # API 엔드포인트 정의
│   │   ├── authEndpoints.ts       # 인증 관련 엔드포인트
│   │   ├── dibsEndpoints.ts       # 관심 목록 관련 엔드포인트
│   │   ├── guestEndpoints.ts      # 게스트 관련 엔드포인트
│   │   ├── guesthouseEndpoints.ts # 게스트하우스 관련 엔드포인트
│   │   ├── joinEndpoints.ts       # 회원 가입 관련 엔드포인트
│   │   ├── recommendationEndpoints.ts # 추천 관련 엔드포인트
│   │   ├── reservationEndpoints.ts # 예약 관련 엔드포인트
│   │   ├── searchEndpoints.ts     # 검색 관련 엔드포인트
│   │   ├── userEndpoints.ts       # 사용자 관련 엔드포인트
│   │   └── validateEndpoints.ts   # 검증 관련 엔드포인트
│   ├── hooks.ts                   # API 호출에 사용하는 훅
│   ├── selectors.ts               # Redux 선택자
│   ├── slices                     # Redux 슬라이스 정의
│   │   ├── authSlice.ts           # 인증 슬라이스
│   │   ├── dibsSlice.ts           # 관심 목록 슬라이스
│   │   ├── guesthouseSlice.ts     # 게스트하우스 슬라이스
│   │   ├── joinSlice.ts           # 회원 가입 슬라이스
│   │   ├── searchSlice.ts         # 검색 슬라이스
│   │   ├── userSlice.ts           # 사용자 슬라이스
│   │   └── validateSlice.ts       # 검증 슬라이스
│   ├── store.ts                   # Redux 스토어 설정
│   └── types.ts                   # 타입 정의 파일
├── app.json                       # 애플리케이션 설정 파일
├── assets
├── babel.config.js                # Babel 설정 파일
├── components                     # 재사용 가능한 UI 컴포넌트
│   ├── edit-page                  # 프로필 수정 페이지 컴포넌트
│   │   ├── CheckNickname.tsx      # 닉네임 체크 컴포넌트
│   │   ├── EditPageStickerList.tsx # 스티커 리스트 컴포넌트
│   │   ├── InterestBorder.tsx     # 관심사 경계선 컴포넌트
│   │   ├── InterestList.tsx       # 관심사 리스트 컴포넌트
│   │   ├── MbtiCheck.tsx          # MBTI 체크 컴포넌트
│   │   └── StickerList.tsx        # 스티커 리스트 컴포넌트
│   └── my-page                    # 마이페이지 컴포넌트
│       └── ReservationBox.tsx     # 예약 박스 컴포넌트
├── declarations.d.ts
├── index.js
├── ios
├── jest.config.js
├── metro.config.js
├── nativewind-env.d.ts
├── navigation                     # 내비게이션 설정
│   ├── ApiTestNavigator.tsx       # API 테스트 내비게이터
│   ├── ChatNavigator.tsx          # 채팅 내비게이터
│   ├── EditProfileNavigator.tsx   # 프로필 수정 내비게이터
│   ├── GetStartedNavigator.tsx    # 시작 내비게이터
│   ├── GuesthouseDetailsNavigator.tsx # 게스트하우스 상세 내비게이터
│   ├── LoginNavigator.tsx         # 로그인 내비게이터
│   ├── MainNavigator.tsx          # 메인 내비게이터
│   ├── MyPageNavigator.tsx        # 마이페이지 내비게이터
│   ├── RegisterNavigator.tsx      # 회원가입 내비게이터
│   ├── SearchNavigator.tsx        # 검색 내비게이터
│   └── types.ts                   # 내비게이션 타입 정의 파일
├── node_modules
├── package.json
├── react-native.config.js
├── screens                        # 화면 컴포넌트들
│   ├── get-started                # 시작 화면
│   │   ├── GetStartedScreen.tsx   # 시작 화면
│   │   ├── login                  # 로그인 관련 화면
│   │   │   ├── FindIdScreen.tsx   # 아이디 찾기 화면
│   │   │   ├── FindPasswordScreen.tsx # 비밀번호 찾기 화면
│   │   │   └── LoginScreen.tsx    # 로그인 화면
│   │   └── register               # 회원가입 관련 화면
│   │       ├── AgreeTosScreen.tsx # 약관 동의 화면
│   │       ├── EnterNicknameScreen.tsx # 닉네임 입력 화면
│   │       ├── EnterPersonalInformationScreen.tsx # 개인정보 입력 화면
│   │       ├── RegisterScreen.tsx # 회원가입 화면
│   │       ├── SelectMbtiScreen.tsx # MBTI 선택 화면
│   │       └── StartScreen.tsx    # 시작 화면
│   ├── main                       # 메인 화면
│   │   ├── FavoritesScreen.tsx    # 즐겨찾기 화면
│   │   ├── RecommendationsScreen.tsx # 추천 화면
│   │   ├── chat                   # 채팅 관련 화면
│   │   │   ├── ChatListScreen.tsx # 채팅 리스트 화면
│   │   │   └── ChatPageScreen.tsx # 채팅 페이지 화면
│   │   ├── guesthouse-details     # 게스트하우스 상세 화면
│   │   │   ├── ChatGuideScreen.tsx # 채팅 가이드 화면
│   │   │   ├── GuesthouseDetailsScreen.tsx # 게스트하우스 상세 화면
│   │   │   ├── ReservationCompleteScreen.tsx # 예약 완료 화면
│   │   │   └── ReservationScreen.tsx # 예약 화면
│   │   └── my-page                # 마이페이지 관련 화면
│   │       ├── LogoutScreen.tsx   # 로그아웃 화면
│   │       ├── MyPageScreen.tsx   # 마이페이지 화면
│   │       ├── NotificationsScreen.tsx # 알림 화면
│   │       ├── ReviewsScreen.tsx  # 리뷰 화면
│   │       └── edit-profile       # 프로필 수정 화면
│   │           ├── AddInterestScreen.tsx # 관심사 추가 화면
│   │           ├── ChangeNicknameScreen.tsx # 닉네임 변경 화면
│   │           ├── EditProfileScreen.tsx # 프로필 수정 화면
│   │           └── ViewReceivedStickerScreen.tsx # 받은 스티커 보기 화면
│   └── search                     # 검색 관련 화면
│       ├── CalendarScreen.tsx     # 캘린더 화면
│       ├── FilterScreen.tsx       # 필터 화면
│       ├── SearchResultScreen.tsx # 검색 결과 화면
│       └── SearchScreen.tsx       # 검색 화면
├── tailwind.config.js
├── tsconfig.json
├── types.ts                      # 타입 정의 파일
├── utils                         # 유틸리티 함수들
│   └── helpers.ts                # 유틸리티 함수 모음
├── yarn.lock

```
