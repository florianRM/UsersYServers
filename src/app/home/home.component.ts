import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  email: string = '';
  password: string = '';
  token!: boolean;

  constructor(private authService: AuthService, private route: Router, private cookies: CookieService) {  }

  login(): void {
    this.authService.login(this.email, this.password)
    .subscribe({
      next: res => {
        if(!res) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email or password is wrong!',
          })
        } else {
          this.token = true;
          this.route.navigate(['/servers']);
        }
      }
    })
  }

  logout(): void {
    this.authService.logout();
    this.token = false;
  }

}
