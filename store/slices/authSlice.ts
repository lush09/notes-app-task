import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEMO_CREDENTIALS, VALIDATION_MESSAGES } from '../../constants/config';
import { AuthState, LoginCredentials, User } from '../../types/auth';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

// Helper function for login logic
export const performLogin = (credentials: LoginCredentials) => {
  return new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.username === DEMO_CREDENTIALS.username &&
        credentials.password === DEMO_CREDENTIALS.password
      ) {
        const user: User = {
          id: '1',
          username: credentials.username,
        };
        resolve(user);
      } else {
        reject(VALIDATION_MESSAGES.invalidCredentials);
      }
    }, 1000);
  });
};

export const { loginStart, loginSuccess, loginFailure, logout, clearError } = authSlice.actions;
export default authSlice.reducer; 