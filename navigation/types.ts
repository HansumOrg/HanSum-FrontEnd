/* eslint-disable @typescript-eslint/consistent-type-definitions */
// this file contains navigation types that are used in the application
// The navigation type containing the mappings must be a type alias
// Using interface will result in incorrect type checking where it allows you to pass incorrect route names.

import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type GetStartedStackParamList = {
  GetStarted: undefined;
  LoginNavigator: NavigatorScreenParams<LoginStackParamList>;
  RegisterNavigator: NavigatorScreenParams<RegisterStackParamList>;
};

export type GetStartedStackScreenProps<
  T extends keyof GetStartedStackParamList,
> = StackScreenProps<GetStartedStackParamList, T>;

export type LoginStackParamList = {
  Login: undefined;
  FindId: undefined;
  FindPassword: undefined;
};

export type LoginStackScreenProps<T extends keyof LoginStackParamList> =
  CompositeScreenProps<
    StackScreenProps<LoginStackParamList, T>,
    GetStartedStackScreenProps<keyof GetStartedStackParamList>
  >;

export type RegisterStackParamList = {
  Register: undefined;
  EnterPersonalInformation: undefined;
  EnterNickname: undefined;
  SelectMbti: undefined;
  AgreeTos: undefined;
  Start: undefined;
};

export type RegisterStackScreenProps<T extends keyof RegisterStackParamList> =
  CompositeScreenProps<
    StackScreenProps<RegisterStackParamList, T>,
    GetStartedStackScreenProps<keyof GetStartedStackParamList>
  >;

export type MainTabParamList = {
  Recommendations: undefined;
  SearchNavigator: NavigatorScreenParams<SearchStackParamList>;
  ChatNavigator: NavigatorScreenParams<ChatStackParamList>;
  MyPageNavigator: NavigatorScreenParams<MyPageStackParamList>;
  Favorites: undefined;
  GuesthouseDetailsNavigator: NavigatorScreenParams<GuesthouseDetailsStackParamList>;
};

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  BottomTabScreenProps<MainTabParamList, T>;

export type SearchStackParamList = {
  Search: undefined;
  Filter: undefined;
  Calendar: undefined;
  SearchResult: undefined;
};

export type SearchStackScreenProps<T extends keyof SearchStackParamList> =
  CompositeScreenProps<
    StackScreenProps<SearchStackParamList, T>,
    MainTabScreenProps<keyof MainTabParamList>
  >;

export type ChatStackParamList = {
  ChatList: undefined;
  ChatPage: undefined;
};

export type ChatStackScreenProps<T extends keyof ChatStackParamList> =
  CompositeScreenProps<
    StackScreenProps<ChatStackParamList, T>,
    MainTabScreenProps<keyof MainTabParamList>
  >;

export type MyPageStackParamList = {
  MyPage: undefined;
  EditProfileNavigator: NavigatorScreenParams<EditProfileStackParamList>;
  Notifications: undefined;
  Reviews: undefined;
  Logout: undefined;
};

export type MyPageStackScreenProps<T extends keyof MyPageStackParamList> =
  CompositeScreenProps<
    StackScreenProps<MyPageStackParamList, T>,
    MainTabScreenProps<keyof MainTabParamList>
  >;

export type EditProfileStackParamList = {
  EditProfile: undefined;
  ChangeNickname: undefined;
  AddInterest: undefined;
  ViewReceivedSticker: undefined;
};

export type EditProfileStackScreenProps<
  T extends keyof EditProfileStackParamList,
> = CompositeScreenProps<
  StackScreenProps<EditProfileStackParamList, T>,
  CompositeScreenProps<
    StackScreenProps<MyPageStackParamList>,
    MainTabScreenProps<keyof MainTabParamList>
  >
>;

export type GuesthouseDetailsStackParamList = {
  GuesthouseDetails: undefined;
  Calendar: undefined;
  ChatGuide: undefined;
  Reservation: undefined;
  ReservationComplete: undefined;
  GuesthouseItem: undefined;
};

export type GuesthouseDetailsStackScreenProps<
  T extends keyof GuesthouseDetailsStackParamList,
> = CompositeScreenProps<
  StackScreenProps<GuesthouseDetailsStackParamList, T>,
  MainTabScreenProps<keyof MainTabParamList>
>;

export type ApiTestStackParamList = {
  ApiTest: undefined;
  Join: undefined;
  Login: undefined;
};

export type ApiTestStackScreenProps<T extends keyof ApiTestStackParamList> =
  StackScreenProps<ApiTestStackParamList, T>;
