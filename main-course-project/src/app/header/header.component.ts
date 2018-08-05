import { Component,EventEmitter, Output } from "node_modules/@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'


})
export class HeaderComponent {

    //Allows us to listen to this from parent component
    @Output() featureSelected = new EventEmitter<string>();
    
    onSelect(feature:string){

        this.featureSelected.emit(feature);


    }

}