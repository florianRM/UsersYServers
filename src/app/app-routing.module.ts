import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers/servers.component';
import { UsersComponent } from './users/users/users.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'servers',
    component: ServersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'addUser',
    component: AdduserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'servers/:id/edit',
    component: EditServerComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'user/:id/:name',
    component: UserComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
