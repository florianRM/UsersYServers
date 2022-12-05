import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users!: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.users()
    .subscribe({
      next: (res) => this.users = res,
      error: (error) => console.log(error)
    });
  }

}
