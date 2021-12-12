import { AccountService } from './../_services/account.service';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //@Input() usersFromHomeComponent:any;
  @Output() cancelRegister:any = new EventEmitter();
  model:any={};

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  register()
  {
    this.accountService.register(this.model).subscribe(response=>{
      console.warn(response);
      this.cancel();
    },error=>{
      console.warn(error);
    })
    // console.warn(this.model);
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }

}
