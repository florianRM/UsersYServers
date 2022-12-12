import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from '../interfaces/server.interface';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  servers: Server[] = this.serversService.servers;

  constructor(private serversService: ServersService,
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // onLoadServers() {
  //   // complex code that connects to a backend
  //   // navigation to Servers page 
  //   this.router.navigate(['/servers']);
  // }

  // onReload() {
  //   this.router.navigate(['servers'], { relativeTo: this.route});
  // }
}
