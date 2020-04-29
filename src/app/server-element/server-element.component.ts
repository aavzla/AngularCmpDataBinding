import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //The curly brackets here are the definition in TypeScript of a JavaScript object.
  //So the property will only accept a JavaScript object.
  @Input() element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit(): void {
  }

}
