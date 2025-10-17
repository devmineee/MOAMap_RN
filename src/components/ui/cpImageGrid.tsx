import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface CpImageGridProps {
  imageUrls?: string[];
}

/**
 * @author 김영준
 * @date 2025-10-17
 * @description 이미지 개수에 따라 다른 레이아웃으로 표시하는 그리드 컴포넌트
 * - 1개: 전체 영역 사용
 * - 2개: 좌우 분할
 * - 3개 이상: 좌측 큰 이미지 + 우측 2개 (더보기 표시)
 */
export const CpImageGrid: React.FC<CpImageGridProps> = ({ imageUrls }) => {
  if (!imageUrls || imageUrls.length === 0) {
    // 이미지 없을 때 플레이스홀더
    return (
      <View style={styles.placeholder}>
        <View style={styles.placeholderIcon} />
      </View>
    );
  }

  // 1개 - 전체 영역
  if (imageUrls.length === 1) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: imageUrls[0] }} style={styles.soloImage} />
      </View>
    );
  }

  // 2개 - 좌우 분할
  if (imageUrls.length === 2) {
    return (
      <View style={styles.container}>
        <View style={styles.halfContainer}>
          <Image source={{ uri: imageUrls[0] }} style={styles.halfImage} />
        </View>
        <View style={styles.halfContainer}>
          <Image source={{ uri: imageUrls[1] }} style={styles.halfImage} />
        </View>
      </View>
    );
  }

  // 3개 이상 - 좌측 큰 이미지 + 우측 2개 이미지 (더보기)
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: imageUrls[0] }} style={styles.leftImage} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightBottomContainer}>
          <Image source={{ uri: imageUrls[2] }} style={styles.rightImage} />
          {imageUrls.length > 3 && (
            <View style={styles.moreOverlay}>
              <Text style={styles.moreText}>+{imageUrls.length - 2}</Text>
            </View>
          )}
        </View>
        <View style={styles.rightTopContainer}>
          <Image source={{ uri: imageUrls[1] }} style={styles.rightImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E8F4FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#0088FE',
    borderRadius: 6,
  },

  // 1개 이미지
  soloImage: {
    width: '100%',
    height: '100%',
  },

  // 2개 이미지 (좌우 분할)
  halfContainer: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 1,
  },
  halfImage: {
    width: '100%',
    height: '100%',
  },

  // 3개 이상 이미지 (좌측 큰 이미지 + 우측 2개)
  leftContainer: {
    flex: 1,
    height: '100%',
    paddingRight: 1,
  },
  leftImage: {
    width: '100%',
    height: '100%',
  },
  rightContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    paddingLeft: 1,
  },
  rightTopContainer: {
    flex: 1,
    paddingBottom: 1,
  },
  rightBottomContainer: {
    flex: 1,
    paddingTop: 1,
    position: 'relative',
  },
  rightImage: {
    width: '100%',
    height: '100%',
  },
  moreOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
