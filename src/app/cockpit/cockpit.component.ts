import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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
  @ViewChild('serverContentInput') serverContentInput : ElementRef;

  constructor() {
    this.serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    this.blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  }

  ngOnInit(): void {
  }

  onAddServer(serverNameHTMLElement: HTMLInputElement) {
    //Log to the console of the parameter received for testing purposes
    //console.log(serverNameHTMLElement.value);
    //console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({
      //serverName: this.newServerName,
      //serverContent: this.newServerContent
      serverName: serverNameHTMLElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameHTMLElement: HTMLInputElement) {
    this.blueprintCreated.emit({
      //serverName: this.newServerName,
      //serverContent: this.newServerContent
      serverName: serverNameHTMLElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
