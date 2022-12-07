import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    const user = { email: this.email, password: this.password};
    this.authService.register(user)
    .subscribe({
      next: resp => {
        this.authService.setToken(resp.token);
        this.router.navigateByUrl('/');
      },
      error: error => console.log(error)
    })
  }

}
