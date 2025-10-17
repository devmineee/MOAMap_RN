import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface CpKeywordButtonProps {
  keyword: string;
  isSelected?: boolean;
  onPress?: () => void;
}

/**
 * @author 김영준
 * @date 2025-10-17
 * @description 키워드 검색용 태그 버튼 컴포넌트
 * - 선택 상태: 파란 배경 + 흰 글자 (현재 스타일)
 * - 미선택 상태: 흰 배경 + 파란 글자
 */
export const CpKeywordButton: React.FC<CpKeywordButtonProps> = ({
  keyword,
  isSelected = false,
  onPress
}) => (
  <TouchableOpacity
    style={[
      styles.keywordButton,
      isSelected ? styles.selectedButton : styles.unselectedButton
    ]}
    onPress={onPress}
  >
    <Text
      style={[
        styles.keywordText,
        isSelected ? styles.selectedText : styles.unselectedText
      ]}
    >
      # {keyword}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  keywordButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1,
  },
  keywordText: {
    fontSize: 14,
    fontWeight: '500',
  },

  // 선택된 상태 (기존 스타일)
  selectedButton: {
    backgroundColor: '#0088FE',
    borderColor: '#0088FE',
  },
  selectedText: {
    color: '#FFFFFF',
  },

  // 미선택 상태 (반대 스타일)
  unselectedButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#0088FE',
  },
  unselectedText: {
    color: '#0088FE',
  },
});
