import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const user = {email: this.email, password: this.password};
    this.authService.login(user)
    .subscribe({
      next: resp => {
        this.authService.setToken(resp.token);
        this.router.navigateByUrl('/');
      },
      error: error => console.log(error)
    })
  }

}
