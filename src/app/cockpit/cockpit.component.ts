import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated : EventEmitter<{ serverName: string, serverContent: string }>;
  @Output() blueprintCreated : EventEmitter<{ serverName: string, serverContent: string }>;
  newServerName = '';
  newServerContent = '';

  constructor() {
    this.serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    this.blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
}
