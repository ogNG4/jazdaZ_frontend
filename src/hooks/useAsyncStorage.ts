import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    const loadData = async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
          setStoredValue(JSON.parse(value));
        } else if (initialValue !== undefined) {
          setStoredValue(initialValue);
        } else if (typeof initialValue === 'function') {
          setStoredValue(initialValue());
        }
      } catch (error) {
        console.error('Error reading value from storage', error);
      }
    };

    loadData();
  }, [key, initialValue]);

  const setValue = async (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error saving value to storage', error);
    }
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error('Error removing value from AsyncStorage', error);
    }
  };

  return [storedValue, setValue, removeValue] as const;
};

export default useAsyncStorage;
