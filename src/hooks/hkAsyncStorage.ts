import { useState, useEffect } from 'react';

export const useAsyncStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // AsyncStorage 로직을 여기에 추가할 수 있습니다
    // 현재는 간단한 예제로 구현
    setLoading(false);
  }, [key]);

  const updateValue = (newValue: T) => {
    setValue(newValue);
    // 여기에 AsyncStorage.setItem 로직 추가
  };

  return { value, setValue: updateValue, loading };
};