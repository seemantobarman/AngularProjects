import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  @Output() blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  newServerName = "";
  newServerContent = "";

  onAddServer() {
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });

    this.newServerName = "";
    this.newServerContent = "";
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent,
    });

    this.newServerName = "";
    this.newServerContent = "";
  }
}
