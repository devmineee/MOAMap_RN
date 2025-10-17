import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { CpKeywordButton } from './cpKeywordButton';

export interface CpKeywordSelectorProps {
  keywords: string[];
  defaultSelected?: string;
  onSelectionChange?: (selectedKeyword: string) => void; // 키워드 선택 시 호출되는 콜백 함수 (null 제거)
  style?: any;
}

/**
 * @author 김영준
 * @date 2025-10-17
 * @description 키워드 선택 리스트 컴포넌트
 * - 가로 스크롤 가능한 키워드 버튼 목록
 * - 선택/미선택 상태 자동 관리
 * - 단일 선택 모드 (해제 기능 없음)
 */
export const CpKeywordSelector: React.FC<CpKeywordSelectorProps> = ({
  keywords,
  defaultSelected = null,
  onSelectionChange,
  style,
}) => {
  // 선택된 키워드 상태 관리
  const [selectedKeyword, setSelectedKeyword] = useState<string>(defaultSelected || keywords[0]);

  // 키워드 선택 핸들러
  const handleKeywordPress = (keyword: string) => {
    // 이미 선택된 키워드를 다시 누르면 무시 (해제 기능 제거)
    if (selectedKeyword === keyword) return;

    setSelectedKeyword(keyword);

    // 외부 콜백 호출
    onSelectionChange?.(keyword);

    console.log('Selected keyword:', keyword);
  };

  return (
    <View style={[styles.container, style]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {keywords.map((keyword, index) => (
          <CpKeywordButton
            key={index}
            keyword={keyword}
            isSelected={selectedKeyword === keyword}
            onPress={() => handleKeywordPress(keyword)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // 컨테이너 기본 스타일
  },
  scrollView: {
    flexGrow: 0, // 높이 고정
  },
  scrollContent: {
    paddingRight: 20, // 마지막 키워드 여백
  },
});