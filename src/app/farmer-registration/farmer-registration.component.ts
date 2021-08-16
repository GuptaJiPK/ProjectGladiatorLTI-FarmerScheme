import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
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
    this.registrationForm=this.fb.group({
      roletype:['',[Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email:['',[Validators.required,Validators.email]],
      address1:['',[Validators.required]],
      address2:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      pincode:['',[Validators.required,Validators.pattern("^[0-9]{6}$")]],
      accountNo:['',[Validators.required,Validators.pattern("^[0-9]{9,16}$")]],
      ifscCode:['',[Validators.required,Validators.pattern("^[A-Z]{4}[0-9]{7}$")]],
      aadharCard:['',[Validators.required]],
      panCard:['',[Validators.required]],
      certificate:['',[Validators.required]],
      traderLicense:['',[Validators.required]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9\d]{8,12}$")]],
      confirmpassword: ['', [Validators.required, Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9\d]{8,12}$")]]

    },{validator: this.passwordConfirming});

   }

   passwordConfirming(registrationForm: AbstractControl) {
    if (registrationForm.get('password')?.value !== registrationForm.get('confirmpassword')?.value) {
      //return {invalid: true};
    }
   }

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
    // console.log(this.registrationForm.value);
    // debugger;
    // this.farmreg.PostDetails(this.registrationForm.value).subscribe((data)=>
    // {this.dumm1=data;
    // this.dummy=this.dumm1;},
    // (err)=>{this.errmsg=err.error.Message;
    
      
     
    // });
    this.farmreg.PostDetails(this.registrationForm.value).subscribe((data)=>
    {console.table(data);this.message=data},
    (err)=>{this.errmsg=err.error.Message;
    //this.toastr.success("Registration Successsful");
     
    });
  }

  

}
