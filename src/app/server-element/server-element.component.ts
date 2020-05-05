import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //Other options are None, Native and Shadow DOM.
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  //The curly brackets here are the definition in TypeScript of a JavaScript object.
  //So the property will only accept a JavaScript object.
  @Input('srvElement') element: { type: string, name: string, content: string };
  //This property is a primitive, not reference object.
  //(based according JavaScript types, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).
  //We change the use of a reference to an object (like the element property above) to a primitive, so Angular can fire the ngOnChanges in this component.
  //If we use a reference to the object and made a modification outside of this component (like in a parent component),
  //the modification will be made, but Angular will not detect the change.
  //Why? Because this property and the array element will have the same pointer in memory and it will not change the pointer like in a primitive change.
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef

  constructor() {
    console.log(this.constructor.name + ' constructor called!');
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(this.constructor.name + ' ngOnChanges called! with parameter changes object below');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(this.constructor.name + ' ngOnInit called!');
    console.log(this.constructor.name + ' the header property has the text as below');
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log(this.constructor.name + ' the paragraph property has the text as below');
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log(this.constructor.name + ' ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log(this.constructor.name + ' ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log(this.constructor.name + ' ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log(this.constructor.name + ' ngAfterViewInit called!');
    console.log(this.constructor.name + ' the header property has the text as below');
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log(this.constructor.name + ' the paragraph property has the text as below');
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log(this.constructor.name + ' ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log(this.constructor.name + ' ngOnDestroy called!');
  }
}
