import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  isLogin!: boolean;

  constructor(private authService: AuthService, private route: Router) {  }

  ngOnInit(): void {
    // this.authService.isAuthenticated()
    // .subscribe({
    //   next: resp => this.isLogin = resp
    // })
  }

  logout(): void {
    this.authService.logout();
    this.route.navigate(['/']);
  }

}
