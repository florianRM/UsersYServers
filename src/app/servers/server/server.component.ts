import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';
import { Server } from '../interfaces/server.interface';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

  server!: Server;

  constructor(private serverService: ServersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe({
      next: resp => {
        this.server = this.serverService.servers[resp['id']]
      }
    })
  }
}
