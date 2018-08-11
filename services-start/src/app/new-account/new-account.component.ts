import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // service providers etc
  providers:[LoggingService
    //remove from providers to use the parent service instance  
    //,AccountsService
  ]
})
export class NewAccountComponent {
  
  // this is the event emitter property who event emit method will be listened
  // to and will receive the event pay load, bind to it using ( ) in the html
  // and the call its own event handler function
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // just inform angular that we need a logging service
  constructor(private loggingService:LoggingService,
  private accountsService:AccountsService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    
    this.accountsService.addAccount(accountName,accountStatus)
    this.loggingService.logStatusChange(accountStatus)
  }
}
