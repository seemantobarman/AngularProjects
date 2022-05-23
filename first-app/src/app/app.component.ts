import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  allowServer = true;
  serverCreationStatus = 'No server was created';
  serverName = 'No Server';

  constructor() {
    setTimeout(() => {
      this.allowServer = false;
    }, 3000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);

    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
