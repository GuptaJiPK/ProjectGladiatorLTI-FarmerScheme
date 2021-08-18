import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-bidder',
  templateUrl: './bidder.component.html',
  styleUrls: ['./bidder.component.css']
})
export class BidderComponent implements OnInit {

  registrationForm;

  constructor(private fb:FormBuilder,private router:Router,private tost:ToastrService) 
  {

    this.registrationForm=this.fb.group({
    fullname: ['', [Validators.required]],
    Contact: ['', [Validators.required]],
    city: ['', [Validators.required]],
    Address1: ['', [Validators.required]],
    Address2: ['', [Validators.required]],
    area: ['', [Validators.required]],      
    address : ['', [Validators.required]],
    state: ['', [Validators.required]],
    pin: ['', [Validators.required]],
    landpin: ['', [Validators.required]],
    acc: ['', [Validators.required]],
    ifsc: ['', [Validators.required]],
      mailid:['',[Validators.required,Validators.email]],
      pwd: ['passWORD123', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9\d]{8,12}$")]],
      confirmpassword: ['passWORD123', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9\d]{8,12}$") ]]

    },{validator: this.passwordConfirming});

   }

   passwordConfirming(c: AbstractControl) {
    if (c.get('pwd')?.value !== c.get('confirmpassword')?.value) {
        //return {invalid: true};
    }
  }
  email?:any;

  ngOnInit() 
  {
    this.welcome();
  }
  Logout(){
    sessionStorage.removeItem('user');
    this.tost.success("Succesfully Logout!!!")
    this.router.navigate(['login']);
    
  }
  welcome(){
    this.email=sessionStorage.getItem('user');
  }

 


}

