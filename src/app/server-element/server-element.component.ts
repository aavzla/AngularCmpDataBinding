import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //Other options are None, Native and Shadow DOM.
})
export class ServerElementComponent implements OnInit {
  //The curly brackets here are the definition in TypeScript of a JavaScript object.
  //So the property will only accept a JavaScript object.
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit(): void {
  }

}
