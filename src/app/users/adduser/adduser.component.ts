import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html'
})
export class AdduserComponent implements OnInit {

  user: User = {
    id: 0,
    name: '',
    email: ''
  }
  added: boolean = false;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  addUser(): void {
    this.userService.addUser(this.user)
    .subscribe({
      next: () => this.added = true,
      error: () => this.added = false
    })
  }

}
