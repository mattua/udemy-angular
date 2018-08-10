import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //this is a field, with an implicit setter method
  @Input() set appUnless(condition:boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear()
    }
  }
  constructor(private templateRef:TemplateRef<any>,private vcRef:ViewContainerRef) { }



}
