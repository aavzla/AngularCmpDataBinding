import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated : EventEmitter<{ serverName: string, serverContent: string }>;
  @Output('bpCreated') blueprintCreated : EventEmitter<{ serverName: string, serverContent: string }>;
  //newServerName = '';
  //newServerContent = '';

  constructor() {
    this.serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    this.blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  }

  ngOnInit(): void {
  }

  onAddServer(serverNameHTMLElement: HTMLInputElement, serverContentHTMLElement: HTMLInputElement) {
    //Log to the console of the parameter received for testing purposes
    //console.log(serverNameHTMLElement.value);
    this.serverCreated.emit({
      //serverName: this.newServerName,
      //serverContent: this.newServerContent
      serverName: serverNameHTMLElement.value,
      serverContent: serverContentHTMLElement.value
    });
  }

  onAddBlueprint(serverNameHTMLElement: HTMLInputElement, serverContentHTMLElement: HTMLInputElement) {
    this.blueprintCreated.emit({
      //serverName: this.newServerName,
      //serverContent: this.newServerContent
      serverName: serverNameHTMLElement.value,
      serverContent: serverContentHTMLElement.value
    })
  }
}
