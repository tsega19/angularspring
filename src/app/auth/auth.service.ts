import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AuthActions from '../auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }

  private readonly AUTH_TOKEN_KEY = 'auth_token';

  constructor(private store: Store) {
   
    const storedToken = sessionStorage.getItem(this.AUTH_TOKEN_KEY);
    if (storedToken) {
      this.store.dispatch(AuthActions.login());
      this.loggedIn$.next(true);
    }
  }

  login(username: string, password: string): Observable<any> {
    const isAuthenticated = username === 'user' && password === 'user';

    return new Observable((observer) => {
      if (isAuthenticated) {
        sessionStorage.setItem(this.AUTH_TOKEN_KEY, 'someAuthToken');
        this.store.dispatch(AuthActions.login());
        this.loggedIn$.next(true);
        observer.next({ success: true });
      } else {
        observer.next({ success: false, message: 'Invalid credentials' });
      }

      observer.complete();
    });
  }

  logout(): void {
    sessionStorage.removeItem(this.AUTH_TOKEN_KEY);
    this.store.dispatch(AuthActions.logout());
    this.loggedIn$.next(false);
  }
}
