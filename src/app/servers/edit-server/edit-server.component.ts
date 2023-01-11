import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from '../interfaces/server.interface';
import { ServersService } from '../servers.service';

// @Component({
//   selector: 'app-edit-server',
//   templateUrl: './edit-server.component.html',
//   styles: [
//     'form {display: flex; flex-direction: column; gap: 10px}',
//     '.btn {width: 140px}'
//   ]
// })
@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styles: [
        'form {display: flex; flex-direction: column; gap: 10px}',
        '.btn {width: 140px}'
      ]
})
export class EditServerComponent implements OnInit {

  server!: Server;
  name!: string;
  estado!: string;
  allowEdit: boolean = false;

  constructor(private serverService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.allowEdit = this.route.snapshot.queryParams['allowEdit'] === '0' ? true : false;
    this.server = this.serverService.servers[id];
    this.name = this.server.name;
    this.estado = this.server.status;
  }

  edit(): void {
    this.server.name = this.name;
    this.server.status = this.estado;
  }
}
