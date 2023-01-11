import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private authService: AuthService) {  }

  isLogin(): boolean {
    if(localStorage.getItem('login')) {
      return true;
    }
    return false;
  }

  logout(): void {
    this.authService.logout();
  }

}
