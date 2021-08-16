import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { forgotpassService } from 'src/Service/forgotpass';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {
  forgotpasswordform;
  constructor(private fb:FormBuilder,private toastr:ToastrService,private email:forgotpassService) {
    this.forgotpasswordform=this.fb.group({
      email:['',[Validators.required,Validators.email]]
   });
   }

  ngOnInit(): void {
  }
  errmsg:any;
  message:any;
  SendPassword(){
    console.log(this.forgotpasswordform.value);
    debugger;
    this.email.PostDetails(this.forgotpasswordform.value.email).subscribe((data)=>console.log(data));

  }
}


