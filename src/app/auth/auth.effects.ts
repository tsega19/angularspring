import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  loginRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  logoutRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
