// src/types/tpCommon.ts - 공통 타입 정의
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
}

export type ScreenProps = {
  navigation: any;
  route: any;
};