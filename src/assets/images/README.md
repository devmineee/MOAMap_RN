# 이미지 리소스 관리 가이드

## 📁 디렉토리 구조

```
src/assets/images/
├── icons/           # 아이콘 이미지 (24x24, 32x32, 48x48)
├── logos/           # 로고 이미지 (다양한 크기)
├── backgrounds/     # 배경 이미지
├── placeholders/    # 플레이스홀더 이미지
├── index.ts         # 이미지 중앙 관리 파일
├── images.d.ts      # TypeScript 타입 정의
└── README.md        # 이 파일
```

## 🎯 사용 방법

### 1. 기본 사용법

```typescript
import { Images } from '@/assets/images';
import { Image } from 'react-native';

// 아이콘 사용
<Image source={Images.icons.home} style={styles.icon} />

// 로고 사용
<Image source={Images.logos.appLogo} style={styles.logo} />

// 배경 이미지 사용
<ImageBackground source={Images.backgrounds.mainBg}>
  {/* 콘텐츠 */}
</ImageBackground>
```

### 2. 특정 카테고리만 import

```typescript
import { icons, logos } from '@/assets/images';

<Image source={icons.home} />
<Image source={logos.appLogo} />
```

## 📝 이미지 추가하기

### 1. 이미지 파일 추가
해당 카테고리 폴더에 이미지 파일을 추가합니다:
```
src/assets/images/icons/new-icon.png
```

### 2. index.ts에 등록
`src/assets/images/index.ts` 파일을 열고 해당 카테고리에 추가:

```typescript
export const icons = {
  // 기존 아이콘들...
  newIcon: require('./icons/new-icon.png'),  // 추가
} as const;
```

### 3. 사용
```typescript
import { Images } from '@/assets/images';
<Image source={Images.icons.newIcon} />
```

## 🎨 이미지 규칙

### 아이콘 (icons/)
- **크기**: 24x24, 32x32, 48x48, 64x64 (@1x 기준)
- **포맷**: PNG (투명 배경)
- **네이밍**: kebab-case (예: `home-icon.png`, `search-icon.png`)
- **용도**: 네비게이션, 버튼, UI 요소

### 로고 (logos/)
- **크기**: 다양한 크기 제공 권장
- **포맷**: PNG (투명 배경) 또는 SVG
- **네이밍**: 용도 명시 (예: `app-logo.png`, `app-logo-white.png`)
- **용도**: 앱 로고, 스플래시 화면

### 배경 (backgrounds/)
- **크기**: 화면 크기에 맞게 (1080x1920 이상 권장)
- **포맷**: PNG 또는 JPG
- **네이밍**: 용도 명시 (예: `main-bg.png`, `pattern-bg.png`)
- **용도**: 화면 배경, 패턴

### 플레이스홀더 (placeholders/)
- **크기**: 표시될 영역에 맞게
- **포맷**: PNG 또는 JPG
- **네이밍**: 대상 명시 (예: `user-placeholder.png`, `map-placeholder.png`)
- **용도**: 로딩 중이거나 이미지 없을 때 표시

## 📱 해상도별 이미지 (@1x, @2x, @3x)

React Native는 자동으로 디바이스 해상도에 맞는 이미지를 선택합니다:

```
icons/
├── home.png       (@1x - 기본)
├── home@2x.png    (@2x - Retina)
└── home@3x.png    (@3x - Retina HD)
```

같은 폴더에 `@2x`, `@3x` 파일을 추가하면 자동으로 인식됩니다.

## ✅ 장점

1. **타입 안정성**: TypeScript 자동완성으로 오타 방지
2. **중앙 관리**: 모든 이미지를 한 곳에서 관리
3. **리팩토링 용이**: 경로 변경 시 index.ts만 수정
4. **빌드 시 번들링**: 사용하는 이미지만 번들에 포함
5. **성능 최적화**: require()로 로컬 이미지 사전 로드

## 🚫 안티 패턴

### ❌ 하드코딩된 경로
```typescript
// 나쁜 예
<Image source={require('../../assets/images/icons/home.png')} />
```

### ✅ 중앙 관리 import
```typescript
// 좋은 예
import { Images } from '@/assets/images';
<Image source={Images.icons.home} />
```

## 🔗 원격 이미지

원격 이미지(URL)는 이 시스템을 사용하지 않고 직접 사용:

```typescript
<Image
  source={{ uri: 'https://example.com/image.png' }}
  style={styles.image}
/>
```

## 📚 참고 자료

- [React Native Image 공식 문서](https://reactnative.dev/docs/image)
- [이미지 최적화 가이드](https://reactnative.dev/docs/optimizing-flatlist-configuration)
