
// ----------------------------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { Login } from 'src/Models/login';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/Service/LoginService';
import { FarmerComponent } from '../farmer/farmer.component';
import { Router } from '@angular/router';




@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
   })
export class LoginComponent implements OnInit {


  user:any;
  LoginForm:FormGroup;
  err:any;
  email?:string;
  password?:string;
  userlogin?:any;
  constructor(public loginservice:LoginService,private router:Router) {
    this.LoginForm=new FormGroup(
      {
      email:new FormControl(null,[(Validators.required),(Validators.email)]),
      password:new FormControl(null,Validators.required),
      }
    )
   }

   
  ngOnInit(): void {
    
    
    }

    onLogin(){
      debugger;
      this.email = this.LoginForm.get('email')?.value;
      this.password = this.LoginForm.get('password')?.value;
      this.loginservice.GetLoginDetails(this.email,this.password).subscribe(
        (data)=>
          {
            this.userlogin=data;
            this.routeFunction(this.userlogin); 
          }
        
      )
    }

    routeFunction(userlogin:any){
      debugger;
      if(userlogin.roles == 'F'){
        // console.log(userlogin);
        this.router.navigate(['farmer']);
        sessionStorage.setItem('user',this.LoginForm.value.email);
        sessionStorage.setItem('logincheck',this.userlogin.roles);
      }
      else if(userlogin.roles == 'B'){
        //console.log(userlogin);
        this.router.navigate(['bidder']);
        sessionStorage.setItem('user',this.LoginForm.value.email);
        sessionStorage.setItem('logincheck',this.userlogin.roles);

      }
      else if(userlogin.roles == 'A'){
        //console.log(userlogin);
        this.router.navigate(['admin']);
        sessionStorage.setItem('user',this.LoginForm.value.email);
        sessionStorage.setItem('logincheck',this.userlogin.roles);

      }
      else{
        this.err="  Invalid Email Address or Password!!"
      }
      
    }

    logout(){
      sessionStorage.removeItem('user');
      this.router.navigate(['login']);
    }

    

  }