import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={}
  loggedIn:boolean=false;
  constructor(private accouuntService: AccountService) { }

  ngOnInit(): void {
  }

  login()
  {
    this.loggedIn = true;
    // this.accouuntService.login(this.model).subscribe(respone=>{
    //   console.log(respone); 
    //   this.loggedIn=true;
    // });
   
  }

}
