import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server } from '../interfaces/server.interface';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
    '.col {display: flex; gap:50px}',
    '.card-title {margin-bottom: 20px}'
  ]
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

  onLoadServer(id: number) {
    // complex code that connects to a backend

    // navigation to Servers page
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: id }, fragment: 'loading' });
  }

  // onReload() {
  //   this.router.navigate(['servers'], { relativeTo: this.route});
  // }
}
