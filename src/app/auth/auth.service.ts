import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { tap, map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root',
})
export class AuthService {

private readonly SESSION_TIMEOUT = 30;
private loggedInSubject = new BehaviorSubject<boolean>(false);
isLoggedIn = this.loggedInSubject.asObservable().pipe(shareReplay(1));

constructor(private http: HttpClient) {
    this.checkSessionTimeout();
  }

  login(username: string, password: string): Observable<{ success: boolean }> {
    // Check if the provided username and password are correct
    const isValidCredentials = username === 'user' && password === 'user';

    return timer(500).pipe(
      map(() => ({ success: isValidCredentials })),
      tap((result) => {
        if (result.success) {
          this.loggedInSubject.next(true);
          this.setSessionTimeout();
        }
      })
    );
  }

  logout(): void {
    this.loggedInSubject.next(false);
  }

  private setSessionTimeout(): void {
    timer(this.SESSION_TIMEOUT * 1000).pipe(tap(() => this.logout())).subscribe();
  }

  private checkSessionTimeout(): void {
    this.isLoggedIn.subscribe((loggedIn) => {
      if (loggedIn) {
        this.setSessionTimeout();
      }
    });
  }
}
