/**
 * @author 김영준
 * @date 2025-10-17
 * @description 이미지 리소스 타입 정의
 * React Native의 이미지 모듈에 대한 TypeScript 타입 선언
 */

declare module '*.png' {
  const value: number;
  export default value;
}

declare module '*.jpg' {
  const value: number;
  export default value;
}

declare module '*.jpeg' {
  const value: number;
  export default value;
}

declare module '*.gif' {
  const value: number;
  export default value;
}

declare module '*.webp' {
  const value: number;
  export default value;
}
