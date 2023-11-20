import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css'],
})
export class LoginComponent {
username: string = 'user'; // Set default username
password: string = 'user'; // Set default password

constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe((result) => {
      if (result.success) {
        // Perform actions upon successful login
        this.router.navigate(['/']); // Navigate to the home page
      } else {
        alert('Login failed. Please check your credentials.');
      }
    });
  }
}
