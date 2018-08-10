import {Directive, HostListener, HostBinding} from '@angular/core'

// this is the term you will specify on an element in the html document
// to use this directive
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    // binds the the open variable of the class attribute...or something like that
    // this is another directive
    @HostBinding('class.open') isOpen = false

    // whatever element this directive is attached to, it will listen for the click event and call toggleOpen
    // note the method name doesnt matter
    @HostListener('click') toggleOpenAndSoOn(){
        
        this.isOpen = !this.isOpen
    }

}