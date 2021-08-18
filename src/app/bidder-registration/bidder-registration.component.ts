import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, AbstractControl} from '@angular/forms';
import { BidderRegisterService } from 'src/Service/BidderRegister';
import { ToastrService } from 'ngx-toastr';

@Component({
     selector: 'app-bidder-registration',
     templateUrl: './bidder-registration.component.html',
     styleUrls: ['./bidder-registration.component.css']
   })
export class BidderRegistrationComponent implements OnInit {

  registrationForm:FormGroup;

  constructor(private fb:FormBuilder,private bidreg:BidderRegisterService,private bank:BidderRegisterService,private toastr:ToastrService) 
  {

    this.registrationForm=new FormGroup({
      roletype:new FormControl('',[Validators.required]),
      firstName:new FormControl ('', [Validators.required]),
      lastName:new FormControl ('', [Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      address1:new FormControl('',[Validators.required]),
      address2:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      pincode:new FormControl('',[Validators.required]),
      accountNo:new FormControl('',[Validators.required]),
      ifscCode:new FormControl('',[Validators.required]),
      //aadharCard:new FormControl('',[Validators.required]),
      //panCard:new FormControl('',[Validators.required]),
      certificate:new FormControl('',[Validators.required]),
       traderLicense:new FormControl('',[Validators.required]),
      password:new FormControl ('', [Validators.required]),
      //confirmpassword: ['', [Validators.required]]
      aadharCard:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{12}$")]),
	    panCard:new FormControl('',[Validators.required,Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]{1}$")]),

    });

   }

   passwordConfirming(registrationForm: AbstractControl) {
    if (registrationForm.get('password')?.value !== registrationForm.get('confirmpassword')?.value) {
      //return {invalid?: true};
    }
  }

  ngOnInit() 
  {
    this.registrationForm.patchValue({
      roletype:'B'
    })
  }
  errmsg:any;
  message:any;

  addRequest(){
    console.log(this.registrationForm.value);
    debugger;
    this.bidreg.PostDetails(this.registrationForm.value).subscribe((data)=>
    {console.table(data);this.message=data},
    (err)=>{this.errmsg=err.error.Message;
    this.toastr.success("Registration Successsful","Please login to continue");
    console.log(err);
     
    });
  }


 
 


}
