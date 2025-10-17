/**
 * @author 김영준
 * @date 2025-10-17
 * @description 이미지 리소스 중앙 관리 파일
 *
 * 사용 방법:
 * import { Images } from '@/assets/images';
 * <Image source={Images.icons.home} />
 *
 * 장점:
 * 1. 타입 안정성 - TypeScript 자동완성 지원
 * 2. 중앙 관리 - 모든 이미지를 한 곳에서 관리
 * 3. 리팩토링 용이 - 경로 변경 시 이곳만 수정
 * 4. 오타 방지 - import로 참조하므로 오타 시 빌드 에러 발생
 */

// ============================================================================
// 아이콘 이미지
// ============================================================================
// 📏 해상도 관리 규칙:
// - icon.png (1x - 24x24px)
// - icon@2x.png (2x - 48x48px) 
// - icon@3x.png (3x - 72x72px)
// React Native가 디바이스 해상도에 따라 자동 선택
export const icons = {
  // 로고 아이콘
  simpleLogo: require('./icons/simple-logo.png'),

  // 네비게이션 아이콘
  home: require('./icons/home.png'),
  map: require('./icons/map.png'),
  add_circle: require('./icons/add_circle.png'),
  bookmark: require('./icons/bookmark.png'),
  person: require('./icons/person.png'),

  // 액션 아이콘
  left: require('./icons/left.png'),
  notification: require('./icons/notification.png'),
  close: require('./icons/close.png'),
  search: require('./icons/search.png'),
  // add: require('./icons/add.png'),
  // edit: require('./icons/edit.png'),
  // delete: require('./icons/delete.png'),
  // share: require('./icons/share.png'),

  // 상태 아이콘
  premium: require('./icons/premium.png'),
  // close: require('./icons/close.png'),
  // info: require('./icons/info.png'),
  // warning: require('./icons/warning.png'),

  // 소셜 아이콘
  kakao: require('./icons/kakaotalk.png'),
  naver: require('./icons/naver.png'),
  google: require('./icons/google.png'),
  facebook: require('./icons/facebook.png'),
} as const;

// ============================================================================
// 로고 이미지
// ============================================================================
export const logos = {
  appLogo: require('./logos/app-logo.png'),
  // appLogoWhite: require('./logos/app-logo-white.png'),
  // splashLogo: require('./logos/splash-logo.png'),
} as const;

// ============================================================================
// 배경 이미지
// ============================================================================
export const backgrounds = {
  // mainBg: require('./backgrounds/main-bg.png'),
  // patternBg: require('./backgrounds/pattern-bg.png'),
} as const;

// ============================================================================
// 플레이스홀더 이미지
// ============================================================================
export const placeholders = {
  // user: require('./placeholders/user-placeholder.png'),
  // map: require('./placeholders/map-placeholder.png'),
  // image: require('./placeholders/image-placeholder.png'),
} as const;

// ============================================================================
// 통합 export
// ============================================================================
export const Images = {
  icons,
  logos,
  backgrounds,
  placeholders,
} as const;

export default Images;
