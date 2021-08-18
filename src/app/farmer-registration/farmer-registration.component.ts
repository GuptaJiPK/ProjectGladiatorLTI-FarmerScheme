import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { FarmerRegisterService } from 'src/Service/FarmerRegister';

@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit {
  registrationForm;
  constructor(private fb:FormBuilder,private farmreg:FarmerRegisterService,private toastr:ToastrService) {
    
      
      this.registrationForm=new FormGroup({
        roletype:new FormControl('',[Validators.required]),
        firstName:new FormControl ('', [Validators.required]),
        lastName:new FormControl ('', [Validators.required]),
        email:new FormControl('',[Validators.required,Validators.email]),
        address1:new FormControl('',[Validators.required]),
        address2:new FormControl('',[Validators.required]),
        city:new FormControl('',[Validators.required]),
        state:new FormControl('',[Validators.required]),
        pincode:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{6}$")]),
        accountNo:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{9,16}$")]),
        ifscCode:new FormControl('',[Validators.required,Validators.pattern("^[A-Z]{4}[0-9]{7}$")]),
       // aadharCard:new FormControl('',[Validators.required]),
        //panCard:new FormControl('',[Validators.required]),
        certificate:new FormControl('',[Validators.required]),
        traderLicense:new FormControl('',[Validators.required]),
        password:new FormControl ('', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9\d]{8,12}$")]),
        landArea:new FormControl('',[Validators.required]),
	      landAddress:new FormControl('',[Validators.required,Validators.maxLength(1000)]),
	      landPincode:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{6}$")]),
        aadharCard:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{12}$")]),
	      panCard:new FormControl('',[Validators.required,Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]{1}$")]),
  
      })

    };

   

  

  ngOnInit(): void {
    this.registrationForm.patchValue({
      roletype:'F'
  })
  }
  errmsg:any;
  message:any;
  dummy?:any[]=[];
  dumm1?:any;

  addRequest(){
   
    this.farmreg.PostDetails(this.registrationForm.value).subscribe((data)=>
    {console.table(data);this.message=data},
    (err)=>{this.errmsg=err.error.Message;
    this.toastr.success("Registration Successsful","Please login to continue");
     console.log(err);
    });
  }

  

}
