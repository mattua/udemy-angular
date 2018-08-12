import { Component, OnInit } from '@angular/core'
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //lets move to the app module to create the application wide service
  //,providers: [AccountsService]
})
export class AppComponent implements OnInit {
  
  accounts:{name:string,status:string}[]=[]

  constructor(private accountsService:AccountsService){

  }

  ngOnInit(){
    this.accounts=this.accountsService.accounts
  }

  
}
