import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CpMapCard } from './cpMapCard';
import { CpKeywordSelector } from './cpKeywordSelector';
import { CpButton } from './cpButton';

/**
 * @author 김영준
 * @date 2025-10-16
 * @update 2025-10-17 | mapCard, keywordSelector 컴포넌트로 분리
 * @description 홈 화면의 메인 콘텐츠 영역 컴포넌트
 * - 키워드 검색 섹션 (CpKeywordSelector로 분리)
 * - 지도 카드 가로 스크롤 (Carousel) 섹션
 * - 최근 참여한 지도 섹션 (빈 상태)
 * - 각 섹션간 적절한 간격 유지
 */
export const CpMainContent: React.FC = () => {
  // 251017 | 김영준 | 선택된 키워드 상태 관리
  const [selectedKeyword, setSelectedKeyword] = useState<string>('# 빵집');

  // 251016 | 김영준 | 키워드 목록 (샘플 데이터)
  const sampleKeywords = ['빵집', '카페', '맛집', '전국', '익산'];

  // 251017 | 김영준 | 전체 지도 데이터 목록 (확장된 더미 데이터)
  const allMapData = [
    // 빵집 관련
    {
      title: '서울 유명 빵집 지도',
      creator: '빵순이',
      date: '2024-10-15',
      keywords: ['빵집'],
      imageUrl: 'https://avatars.githubusercontent.com/u/156628546?v=4'
    },
    {
      title: '부산 동래 빵집 투어',
      creator: '부산빵러버',
      date: '2024-10-10',
      keywords: ['빵집'],
      isRecent: true,
      imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200130_59%2F1580369608061baqAf_JPEG%2FeEseEYtcXO7K5vFJzcFCrzIx.jpg'
    },
    {
      title: '대구 빵집 베스트',
      creator: '대구맛집탐험가',
      date: '2024-10-08',
      keywords: ['빵집'],
      imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250124_145%2F1737710531781fu5Ww_JPEG%2FKakaoTalk_20250124_182043156.jpg'
    },

    // 카페 관련
    {
      title: '강서구 카페 지도',
      creator: '전영한 팝코어',
      date: '2024-10-12',
      keywords: ['카페'],
      imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250724_193%2F1753342766642unIMG_JPEG%2FAAA_6258.jpg',
      isRecent: true,
    },
    {
      title: '제주 숨은 카페',
      creator: '제주도민',
      date: '2024-10-05',
      keywords: ['카페'],
      imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240905_260%2F17255340471458stuB_JPEG%2FIMG_6726.jpeg'
    },
    {
      title: '홍대 감성 카페 모음',
      creator: '홍대러버',
      date: '2024-10-01',
      keywords: ['카페'],
    },

    // 맛집 관련
    {
      title: '흑백요리사 맛집',
      creator: '불타는 돌고래',
      date: '2024-10-14',
      keywords: ['맛집'],
      imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyNDExMDVfMjU2%2FMDAxNzMwNzQ2MjkyODgw.siNptPsGtI7qg46Fwn7znrcj1cAv1YKCtJTEhggt2hsg.Bc7QsM_i-SEN35Ub_AcdyH84HxpldH8YOvAF52RjHBQg.JPEG%2F6E40E2FA-1061-4F1D-A9A8-DB1F488494A6.jpeg%3Ftype%3Dw1500_60_sharpen'
    },
    {
      title: '국밥 천국',
      creator: '국밥 마스터',
      date: '2024-10-11',
      keywords: ['맛집'],
      isRecent: true,
      imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240719_25%2F1721368591368iq6RX_JPEG%2FKakaoTalk_20240719_145412619_01.jpg',
    },
    {
      title: '강남 고급 레스토랑',
      creator: '미식가',
      date: '2024-10-09',
      keywords: ['맛집'],
      imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240617_125%2F1718609824567jT0aK_JPEG%2FTAT00261.jpg'
    },

    // 전국 관련
    {
      title: '전국 드라이브 코스',
      creator: '드라이브매니아',
      date: '2024-10-13',
      keywords: ['전국'],
      imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzExMThfMjg5%2FMDAxNTEwOTk1NTI0NjAw._RCmRBTkCHdQDiO0vwoq5SP-nRlUHo6yhtHWBxNRum8g.hs6dmcu6Ve7SaHBqnjwAfZp12eEfXya0sXdTSpiPs-Ag.JPEG.lwh7011%2F027.jpg%23900x660'
    },
    {
      title: '전국 온천 지도',
      creator: '온천러버',
      date: '2024-10-07',
      keywords: ['전국'],
      isRecent: true,
      imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA3MjlfODkg%2FMDAxNzUzNzk0Njc3MjQy.QWf_35w8MxpbIwANyJTW2IAu8_qEPjzqNKCFUXzyHxUg.MLXL-UlnUGVLgekBmLtO855a24g4ZxSwls7k7_-GfWkg.JPEG%2F%25C0%25CC%25C3%25B5_%25C5%25D7%25B8%25A3%25B8%25DE%25C5%25D9_%25BF%25F6%25C5%25CD%25C6%25C4%25C5%25A9-5.jpg'
    },

    // 익산 관련
    {
      title: '익산 맛집 완전정복',
      creator: '익산토박이',
      date: '2024-10-06',
      keyword: ['익산'],
      imageUrl: 'https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240120_16%2F1705735353498Xs2jT_JPEG%2FIMG_1150.jpeg'
    },
    {
      title: '익산 역사 탐방',
      creator: '역사덕후',
      date: '2024-10-03',
      keywords: ['익산'],
      imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTEwMDlfMTQx%2FMDAxNzU5OTc3NTQyMjI1.CErPImydcaYMkELNyPwTcMafqxlWIGxZ7aoZwmdqmb4g.-y7pKbsbiyn_h2ZGsJXL7QV099QsaN0aa1YOW_GkTjAg.JPEG%2F20251007_151230.jpg'
    },
  ];

  // 251017 | 김영준 | 키워드에 따른 데이터 필터링
  const filteredMapData = allMapData.filter(map => {
    const keyword = selectedKeyword.replace('# ', ''); // '# ' 제거
    return sampleKeywords.includes(keyword);
  });

  // 251017 | 김영준 | 키워드 선택 핸들러
  const handleKeywordSelectionChange = (selectedKeyword: string | null) => {
    if (selectedKeyword) {
      setSelectedKeyword(selectedKeyword);
      console.log('Selected keyword in MainContent:', selectedKeyword);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* 지도 찾기 섹션 */}
      <View style={styles.section}>
        {/* 키워드 선택 섹션 */}
        {/* 251017 | 김영준 | TODO: 로그인하면 '000님 반가워요. 추가되어야 함 */}
        <Text style={styles.sectionTitle}>키워드별 지도를 찾아보세요!</Text>
        <CpKeywordSelector
          keywords={sampleKeywords}
          defaultSelected="빵집"
          onSelectionChange={handleKeywordSelectionChange}
          style={styles.keywordSelector}
        />
        {/* 지도 카드 리스트 섹션 */}
        {filteredMapData.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.mapScroll}
          >
            {filteredMapData.map((map, index) => (
              <CpMapCard key={index} {...map} />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.emptyMapState}>
            <Text style={styles.emptyMapText}>
              {selectedKeyword} 관련 지도가 없습니다.
            </Text>
          </View>
        )}
      </View>

      {/* 최근 참여한 지도 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>최근 참여한 지도</Text>
        <View style={styles.emptyState}>
          <Text style={styles.emptyIcon}>❓</Text>
          <Text style={styles.emptyText}>아직 참여한 지도가 없어요.</Text>
          <View style={styles.emptyButton}>
            <CpButton title="🏃‍♂️ 지도 참여하러 가기" onPress={() => { }} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 12
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  keywordSelector: {
    marginBottom: 12,
  },
  mapScroll: {
    paddingRight: 20,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyIcon: {
    fontSize: 40,
    marginBottom: 10,
    opacity: 0.5,
  },
  emptyText: {
    fontSize: 16,
    color: '#000000',
  },
  emptyButton: {
    marginTop: 20,
  },
  emptyMapState: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  emptyMapText: {
    fontSize: 14,
    color: '#999',
  },
});