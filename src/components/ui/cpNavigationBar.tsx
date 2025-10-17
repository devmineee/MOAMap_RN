import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { Images } from '@/assets/images';

interface NavigationItem {
  id: string;
  label: string;
  icon: ImageSourcePropType;
}

interface CpNavigationBarProps {
  activeTab: string;
  onTabPress: (tabId: string) => void;
}

const navigationItems: NavigationItem[] = [
  { id: 'home', label: '홈', icon: Images.icons.home },
  { id: 'public-map', label: '공개지도', icon: Images.icons.map },
  { id: 'create-map', label: '지도만들기', icon: Images.icons.add_circle },
  { id: 'bookmarks', label: '즐겨찾기', icon: Images.icons.bookmark },
  { id: 'profile', label: '마이', icon: Images.icons.person },
];

/**
 * @author 김영준
 * @date 2025-10-16
 * @update 2025-10-17

 * @description 하단 탭 네비게이션 바 컴포넌트
 * - 5개의 탭 제공 (홈, 공개지도, 지도만들기, 즐겨찾기, 마이)
 * - 활성 탭 하이라이트 표시
 */
export const CpNavigationBar: React.FC<CpNavigationBarProps> = ({
  activeTab,
  onTabPress
}) => {
  return (
    <View style={styles.container}>
      {navigationItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.tabItem}
          onPress={() => onTabPress(item.id)}
        >
          <Image
            source={item.icon}
            style={[
              styles.tabIcon,
              activeTab === item.id && styles.activeTabIcon
            ]}
            resizeMode="contain"
          />
          <Text style={[
            styles.tabLabel,
            activeTab === item.id && styles.activeTabLabel
          ]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 8,
    paddingBottom: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  tabIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
    opacity: 0.6,
  },
  activeTabIcon: {
    opacity: 1,
  },
  tabLabel: {
    fontSize: 12,
    color: '#000000',
    textAlign: 'center',
  },
  activeTabLabel: {
    color: '#0088FE',
    fontWeight: '600',
  },
});