import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:any;

  constructor(private fb: FormBuilder) {
    this.loginform=this.fb.group({
      name:['',[Validators.required]],
      pwd: ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

}
