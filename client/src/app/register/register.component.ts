import { ToastrService } from 'ngx-toastr';
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

  constructor(private accountService:AccountService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register()
  {
    this.accountService.register(this.model).subscribe(response=>{
      console.warn(response);
      this.cancel();
    },error=>{
      console.log(error);
      this.toastr.error(error.error);
    })
    // console.warn(this.model);
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }

}
