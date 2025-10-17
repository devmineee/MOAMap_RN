import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CpImageGrid } from './cpImageGrid';

export interface CpMapCardProps {
  title: string;
  creator: string;
  date: string;
  imageUrls?: string[];
  isRecent?: boolean;
  onPress?: () => void;
}

/**
 * @author 김영준
 * @date 2025-10-17
 * @update 2025-10-17 | CpImageGrid 컴포넌트로 이미지 그리드 표시
 * @description 개별 지도 정보를 표시하는 카드 컴포넌트
 * - 이미지 개수에 따라 다른 레이아웃으로 표시 (CpImageGrid 사용)
 * - 우측 하단: UP! 뱃지 (최근 수정된 지도)
 * - 하단 오버레이: 제목, 부제목, 날짜 정보
 */
export const CpMapCard: React.FC<CpMapCardProps> = ({
  title,
  creator,
  date,
  imageUrls,
  isRecent = false,
  onPress
}) => {
  // imageUrls을 배열로 정규화
  const imageArray = Array.isArray(imageUrls) ? imageUrls : imageUrls ? [imageUrls] : [];

  return (
    <TouchableOpacity style={styles.mapCard} onPress={onPress}>
      <View style={styles.mapImageContainer}>
        {/* 이미지 그리드 */}
        <CpImageGrid imageUrls={imageArray} />

        {/* 하단 오버레이 - UP! 뱃지 */}
        <View style={styles.bottomBadgeOverlay}>
          {/* 우측 하단: UP! 뱃지 */}
          {isRecent && (
            <View style={styles.upBadge}>
              <Text style={styles.upBadgeText}>UP!</Text>
            </View>
          )}
        </View>

        {/* 하단 오버레이 - 지도 정보 */}
        <View style={styles.bottomOverlay}>
          <Text style={styles.mapTitle} numberOfLines={1}>{title}</Text>
          <Text style={styles.mapCreator} numberOfLines={1}>{creator}</Text>
          <Text style={styles.mapDate}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mapCard: {
    width: 160,
    height: 160,
    marginRight: 12,
  },
  mapImageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  mapImagePlaceholder: {
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

  // 상단 오버레이 스타일
  bottomBadgeOverlay: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    flexDirection: 'row',
    zIndex: 2,
  },
  likeContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  likeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  upBadge: {
    backgroundColor: '#FF4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  upBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  // 하단 오버레이 스타일
  bottomOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 12,
    paddingVertical: 12,
    paddingTop: 12,
  },
  mapTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  mapCreator: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 2,
  },
  mapDate: {
    fontSize: 11,
    color: '#FFFFFF',
    opacity: 0.7,
  },
});
