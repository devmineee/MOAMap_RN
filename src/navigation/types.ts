import { NativeStackNavigationProp } from '@react-navigation/native-stack';

/**
 * @author 김영준
 * @date 2025-10-17
 * @description React Navigation 타입 정의
 * - 모든 스크린의 파라미터 타입 리스트 정의
 */
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  // SignUp: undefined;
  // FindPassword: undefined;

  // TODO: 향후 추가될 스크린들
  // PublicMap: undefined;
  // CreateMap: undefined;
  // Bookmarks: undefined;
  // Profile: undefined;
};

// 251017 | 김영준 | 네비게이션 prop 타입 - 각 스크린에서 사용할 네비게이션 타입
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

/**
 * @author 김영준
 * @date 2025-10-17
 * @description 특정 스크린의 네비게이션 prop 타입
 * @example
 * type HomeScreenNavigationProp = ScreenNavigationProp<'Home'>;
 */
export type ScreenNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
