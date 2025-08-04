import AsyncStorage from '@react-native-async-storage/async-storage';

// Persist configuration for auth
export const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['user', 'isAuthenticated'], // Only persist these fields
};

// Persist configuration for notes
export const notesPersistConfig = {
  key: 'notes',
  storage: AsyncStorage,
  whitelist: ['notes'], // Only persist the notes array
}; 