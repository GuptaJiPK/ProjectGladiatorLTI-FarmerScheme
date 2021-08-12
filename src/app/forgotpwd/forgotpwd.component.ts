import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {
  fpass:any;
  constructor(private fb: FormBuilder) {
    this.fpass=this.fb.group({
      email:['',[Validators.required]],
     
    })
   }

  ngOnInit(): void {
  }

}
