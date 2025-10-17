# 프로젝트 구조 개선 제안

## 추천하는 폴더 구조

```
src/
├── components/          # 컴포넌트
│   ├── ui/             # 재사용 UI 컴포넌트 (cp)
│   ├── common/         # 공통 컴포넌트 (레이아웃, 로딩 등)
│   └── domain/         # 도메인 특화 컴포넌트 (MapCard, UserProfile 등)
├── screens/            # 화면 (scr)
├── navigation/         # 네비게이션 설정 (nv)
├── hooks/              # 커스텀 훅 (hk)
├── services/           # API/외부 서비스 (sv)
├── store/              # 상태관리 (Zustand/Redux) (st)
├── types/              # 타입 정의 (tp)
├── utils/              # 유틸리티 (ut)
├── constants/          # 상수 (cn)
├── styles/             # 공통 스타일 (theme, colors)
└── assets/             # 정적 파일 (이미지, 폰트 등)
```

## 폴더별 설명

### 1. components/ 세분화
- **ui/**: 버튼, 인풋, 배너 등 범용 UI
- **common/**: SafeAreaWrapper, LoadingSpinner, ErrorBoundary
- **domain/**: MapCard, MapList, UserCard 등 비즈니스 로직 포함

### 2. navigation/ (추가 필요)
React Navigation 설정 파일들

### 3. services/ (추가 필요)
```typescript
// svApi.ts - API 클라이언트
// svMap.ts - 지도 관련 서비스
// svAuth.ts - 인증 서비스
```

### 4. store/ (추가 필요)
전역 상태 관리 (Zustand 추천)

### 5. constants/ (추가 필요)
```typescript
// cnColors.ts - 색상 상수
// cnSizes.ts - 간격, 크기 상수
// cnConfig.ts - 앱 설정
```

### 6. styles/ (추가 필요)
```typescript
// theme.ts - 테마 시스템
// typography.ts - 폰트 스타일
```
