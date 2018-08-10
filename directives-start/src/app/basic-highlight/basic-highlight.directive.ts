import {Directive,ElementRef,OnInit} from '@angular/core'

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // inject element into directive

    constructor(private elementRef: ElementRef){

    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor='green';
    }


}