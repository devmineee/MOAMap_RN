# MOAMap React Native

모두의 지도 앱 버전, Expo + TypeScript를 사용한 React Native 프로젝트

## � 환경 세팅 과정

### 1. 프로젝트 초기 생성
```bash
# Expo TypeScript 템플릿으로 프로젝트 생성
npx create-expo-app@latest . --template blank-typescript
```

### 2. 추가 패키지 설치
```bash
# UI 및 네비게이션 관련 패키지
npm install @expo/vector-icons react-native-safe-area-context react-native-screens

# 개발 도구 패키지
npm install --save-dev @types/react-native eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 3. 개발 환경 설정 파일들

#### ESLint 설정 (`.eslintrc.json`)
```json
{
  "extends": ["expo", "@expo/typescript"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "react-native/no-inline-styles": "warn"
  }
}
```

#### VS Code 설정 (`.vscode/settings.json`)
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.formatOnSave": true,
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "typescriptreact",
    "javascript": "javascriptreact"
  },
  "typescript.suggest.autoImports": true,
  "editor.tabSize": 2,
  "editor.insertSpaces": true
}
```

#### TypeScript 설정 (tsconfig.json 업데이트)
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/screens/*": ["src/screens/*"],
      "@/types/*": ["src/types/*"],
      "@/utils/*": ["src/utils/*"],
      "@/hooks/*": ["src/hooks/*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### 4. 네이밍 컨벤션 적용

모든 파일명과 컴포넌트명을 카멜케이스로 통일하고 접두사를 적용:

- **컴포넌트**: `cp` 접두사 (예: `cpButton.tsx`)
- **화면**: `scr` 접두사 (예: `scrHome.tsx`)
- **훅**: `hk` 접두사 (예: `hkAsyncStorage.ts`)
- **타입**: `tp` 접두사 (예: `tpCommon.ts`)
- **유틸**: `ut` 접두사 (예: `utCommon.ts`)

### 5. 패키지.json 스크립트 추가
```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "eslint . --ext .ts,.tsx --fix",
    "type-check": "tsc --noEmit",
    "clean": "expo r -c"
  }
}
```

## �🚀 시작하기

### 필수 조건

- Node.js (v18 이상)
- npm 또는 yarn
- Expo CLI

### 설치 및 실행

1. 의존성 설치
```bash
npm install
```

2. 개발 서버 시작
```bash
npm start
```

3. 플랫폼별 실행
```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

## 📁 프로젝트 구조 및 네이밍 컨벤션

```
src/
├── components/     # 재사용 가능한 컴포넌트 (cp 접두사)
│   ├── cpButton.tsx
│   └── index.ts
├── screens/        # 화면 컴포넌트 (scr 접두사)
│   ├── scrHome.tsx
│   └── index.ts
├── hooks/          # 커스텀 훅 (hk 접두사)
│   ├── hkAsyncStorage.ts
│   └── index.ts
├── types/          # TypeScript 타입 정의 (tp 접두사)
│   ├── tpCommon.ts
│   └── index.ts
└── utils/          # 유틸리티 함수 (ut 접두사)
    ├── utCommon.ts
    └── index.ts
```

### 🏷 네이밍 컨벤션

- **파일명**: 카멜케이스 (camelCase) 사용
- **컴포넌트**: `cp` 접두사 + 카멜케이스 (예: `cpButton.tsx`)
- **화면**: `scr` 접두사 + 카멜케이스 (예: `scrHome.tsx`)
- **훅**: `hk` 접두사 + 카멜케이스 (예: `hkAsyncStorage.ts`)
- **타입**: `tp` 접두사 + 카멜케이스 (예: `tpCommon.ts`)
- **유틸**: `ut` 접두사 + 카멜케이스 (예: `utCommon.ts`)

## 🛠 개발 도구 및 환경 설정

### 설치된 개발 도구

#### 1. ESLint 설정
- **@typescript-eslint/parser**: TypeScript 파싱
- **@typescript-eslint/eslint-plugin**: TypeScript 규칙
- **expo eslint config**: Expo 권장 설정

#### 2. VS Code 확장 프로그램 추천
프로젝트의 `.vscode/extensions.json`에 포함된 추천 확장 프로그램:
- TypeScript and JavaScript Language Features
- ESLint
- Prettier
- React Native Tools

#### 3. 자동화된 개발 스크립트
```bash
# 코드 품질 검사
npm run lint              # ESLint 실행
npm run lint:fix          # ESLint 자동 수정
npm run type-check        # TypeScript 타입 검사

# 개발 서버
npm start                 # Expo 개발 서버 시작
npm run clean             # 캐시 정리 후 재시작
```

### 개발 환경 특징

#### 1. 자동 저장 시 포맷팅
- 파일 저장 시 자동으로 ESLint 규칙 적용
- 코드 포맷팅 자동화
- import 구문 자동 정렬

#### 2. TypeScript 패스 별칭
```typescript
// 절대 경로 import 사용 가능
import { CpButton } from '@/components';
import { ScrHome } from '@/screens';
import { User } from '@/types';
import { formatDate } from '@/utils';
```

#### 3. 타입 안전성
- 모든 컴포넌트와 함수에 TypeScript 타입 적용
- 인터페이스 기반 props 검증
- 컴파일 타임 에러 검출

## 📦 주요 의존성 및 버전

### 프로덕션 의존성
- **expo**: ~54.0.13 - React Native 개발 플랫폼
- **expo-status-bar**: ~3.0.8 - 상태바 관리
- **react**: 19.1.0 - UI 라이브러리
- **react-native**: 0.81.4 - 네이티브 플랫폼
- **@expo/vector-icons**: ^15.0.2 - 아이콘 라이브러리
- **react-native-safe-area-context**: ^5.6.1 - 안전 영역 처리
- **react-native-screens**: ^4.16.0 - 네이티브 화면 최적화

### 개발 의존성
- **typescript**: ~5.9.2 - 정적 타입 검사
- **@types/react**: ~19.1.0 - React 타입 정의
- **@types/react-native**: ^0.72.8 - React Native 타입 정의
- **eslint**: ^9.37.0 - 코드 품질 도구
- **@typescript-eslint/parser**: ^8.46.1 - TypeScript ESLint 파서
- **@typescript-eslint/eslint-plugin**: ^8.46.1 - TypeScript ESLint 플러그인

## 🎯 개발 가이드

### 새 컴포넌트 생성

1. `src/components/` 폴더에 `cp` 접두사로 파일 생성
2. `src/components/index.ts`에서 익스포트

```typescript
// src/components/cpMyComponent.tsx
import React from 'react';
import { View, Text } from 'react-native';

interface CpMyComponentProps {
  title: string;
}

export const CpMyComponent: React.FC<CpMyComponentProps> = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

// src/components/index.ts
export { CpMyComponent } from './cpMyComponent';
```

### 새 화면 생성

1. `src/screens/` 폴더에 `scr` 접두사로 파일 생성
2. `src/screens/index.ts`에서 익스포트

```typescript
// src/screens/scrProfile.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { ScreenProps } from '@/types';

export const ScrProfile: React.FC<ScreenProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

// src/screens/index.ts
export { ScrProfile } from './scrProfile';
```

### 타입 정의

공통 타입은 `src/types/tpCommon.ts`에 정의하거나 새로운 타입 파일 생성:

```typescript
// src/types/tpUser.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

// src/types/index.ts
export * from './tpUser';
```

### 커스텀 훅 생성

```typescript
// src/hooks/hkCounter.ts
import { useState } from 'react';

export const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);
  
  return { count, increment, decrement, reset };
};

// src/hooks/index.ts
export { useCounter } from './hkCounter';
```

### 유틸리티 함수 생성

```typescript
// src/utils/utValidation.ts
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10,11}$/;
  return phoneRegex.test(phone.replace(/[-\s]/g, ''));
};

// src/utils/index.ts
export * from './utValidation';
```

### 개발 워크플로우

1. **개발 시작**
   ```bash
   npm start  # 개발 서버 시작
   ```

2. **코드 작성 후 검증**
   ```bash
   npm run type-check  # TypeScript 검사
   npm run lint       # ESLint 검사
   ```

3. **자동 수정**
   ```bash
   npm run lint:fix   # 자동 수정 가능한 오류들 수정
   ```

4. **문제 해결**
   ```bash
   npm run clean     # 캐시 문제 시 사용
   ```

## 📱 빌드 및 배포

### 개발 빌드

```bash
# Android APK 생성
expo build:android

# iOS IPA 생성 (macOS 필요)
expo build:ios
```

### 프로덕션 빌드

```bash
# EAS Build 사용 (권장)
npm install -g @expo/cli
eas build --platform android
eas build --platform ios
```

## 🐛 문제 해결

### 일반적인 문제들

#### 캐시 문제
```bash
npm run clean
```

#### TypeScript 타입 에러
```bash
npm run type-check
```

#### ESLint 에러
```bash
npm run lint:fix
```

#### 패키지 호환성 문제
```bash
# 특정 버전 설치 (예: react-native-screens)
npm install react-native-screens@4.16.0
```

#### Metro 번들러 문제
```bash
# Metro 캐시 초기화
npx expo start --clear
```

## 📋 환경 설정 체크리스트

- [x] Expo CLI 설치
- [x] TypeScript 설정 완료
- [x] ESLint 설정 완료
- [x] VS Code 확장 프로그램 설치
- [x] 패스 별칭 설정
- [x] 네이밍 컨벤션 적용
- [x] 개발 스크립트 설정
- [x] 프로젝트 구조 생성