import { Directive, Renderer2, OnInit,ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
    // this is better since you are not accessing the dom directly
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
  }
}