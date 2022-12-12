import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    UsersComponent,
    AdduserComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class UsersModule { }
