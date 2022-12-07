import { Component, OnInit } from '@angular/core';
import { Server } from '../interfaces/server.interface';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  servers: Server[] = this.serversService.servers;

  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
  }

}
