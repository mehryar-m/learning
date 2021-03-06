import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = '';
  serverCreated = false;
  listOfServers = ['testServer'];
  serverName = 'testServer';

  constructor() { // setTimeout(() => {
    //   this.allowNewServer = true;
    // }, 2000);
  }

  ngOnInit() {
  }
  onChangeAllowServer() {
    this.allowNewServer = !this.allowNewServer;
  }
  onCreateServer() {
    this.listOfServers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created';
  }
  onUpdateServerName(name: Event) {
    this.serverName = (name.target as HTMLInputElement).value;
  }

}
