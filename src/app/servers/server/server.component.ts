import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from '../interfaces/server.interface';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

  server!: Server;

  constructor(private serverService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe({
      next: resp => {
        this.server = this.serverService.servers[resp['id']]
      }
    })
  }

  onEdit() {
    this.router.navigate(['edit'] ,{ queryParams: {allowEdit: this.server.id === 3 ? '1' : '0'}, relativeTo: this.route});
  }
}
