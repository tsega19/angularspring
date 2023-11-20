import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login');
export const logout = createAction('[Auth] Logout');
export const setSessionTimeout = createAction('[Auth] Set Session Timeout', props<{ timeout: number }>());
