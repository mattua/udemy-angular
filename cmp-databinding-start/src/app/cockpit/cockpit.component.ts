import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bluePrintCreated=new EventEmitter<{serverName:string,serverContent:string}>();


  constructor() { }

  ngOnInit() {
  }

  //newServerName = '';
  //newServerContent = '';

  // serverContentInput matches the local element reference name in the html file
  @ViewChild('serverContentInput') serverContentInput:ElementRef;

  onAddServer(nameInput:HTMLInputElement) {

    // notice how server name is being passed as a method argument
    // whereas server content is declared as a viewchild component field
    //
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
   this.bluePrintCreated.emit({
    serverName:nameInput.value,
    serverContent:this.serverContentInput.nativeElement.value});
  }
}
