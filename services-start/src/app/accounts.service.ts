import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

// Need to attach some metdata
// To show that we can inject something INTO this
@Injectable()
export class AccountsService {

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    statusUpdate = new EventEmitter<string>()
    // again we now have the 
    constructor(private loggingService:LoggingService){}

    addAccount(name:string,status:string){
        this.accounts.push({name:name,status:status})
    }
    updateStatus(id:number,newStatus:string){

        this.accounts[id].status=newStatus
    }
}