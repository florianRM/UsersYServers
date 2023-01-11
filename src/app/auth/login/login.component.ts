import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.isAuthenticated(this.email, this.password);
    this.router.navigate(['/']);
  }

}
