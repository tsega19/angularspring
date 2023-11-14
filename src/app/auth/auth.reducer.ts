import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

export const initialState = {
  isLoggedIn: false,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => ({ ...state, isLoggedIn: true })),
  on(logout, (state) => ({ ...state, isLoggedIn: false }))
);
