import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers:[LoggingService,AccountsService]
})
export class AccountComponent {

  // property binding -allowing these to be set from outside
  // property binding is with [ ] brackets in the html
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // event binding allowing other components to listem to changes
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService:LoggingService,
  private accountsService:AccountsService){}

  /*
  this is the html in the template - 
  event gets fired when you hit one of the buttons

  the onsetto method is called

  that then calls emit on the statusChanged eventemitter

  <button class="btn btn-default" (click)="onSetTo('active')">Set to 'active'</button>
    <button class="btn btn-default" (click)="onSetTo('inactive')">Set to 'inactive'</button>
    <button class="btn btn-default" (click)="onSetTo('unknown')">Set to 'unknown'</button>
  */

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountsService.updateStatus(this.id,status)
    //this.loggingService.logStatusChange(status)
  }
}
