import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../home/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  // register() {
  //   const user = { email: this.email, password: this.password};
  //   this.authService.register(user)
  //   .subscribe({
  //     next: resp => {
  //       this.authService.setToken(resp.token);
  //       this.router.navigateByUrl('/');
  //     },
  //     error: error => console.log(error)
  //   })
  // }

}
