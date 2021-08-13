
// ----------------------------------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';
import { userloginService } from 'src/Service/userloginService';




@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
   })
export class LoginComponent implements OnInit {


  userlogin: FormGroup;
  userid: any;
  firstname: any;
  lastname: any;

  constructor(private ulservice: userloginService, private router: Router) {
    this.userlogin = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    //this.onSubmit();
  }
  array: any;
  array1:any;
  sessionfname: any;
  sessionlname: any;
  sessionzipcode: any;
  sessionaddress: any;
  sessionemail: any;
  sessionuserid: any;
  sessiongender: any;
  sessionage:any;
  login: User = {};
  onSubmit() {
    
    //this.signupForm.get('user_name').value
    this.ulservice.GetUser(this.userlogin.value).subscribe((data) => {
      console.table(data);
      
      //this.array = data[0].user_id;
      //console.log(this.array);
      
      if (data != null) {
        this.sessionfname = localStorage.setItem('firstName', data[0].firstName);
        this.sessionlname = localStorage.setItem('lastName', data[0].lastName);
        this.sessionemail = localStorage.setItem('email', this.userlogin.value.email);
        this.sessionuserid = localStorage.setItem('userId', data[0].userId);
        this.sessionage = localStorage.setItem('password', data[0].password);
        this.sessionaddress = localStorage.setItem('address1', data[0].address1);
        this.sessiongender = localStorage.setItem('verificationStatus', data[0].verificationStatus);
        this.sessionzipcode = localStorage.setItem('approvedBy', data[0].approvedBy);
        alert('Login Successful');
       
        console.log(this.sessionuserid);
       
        this.router.navigate(['farmer']);
      }
    }
    );
    console.log(this.sessionemail);



  }

}

