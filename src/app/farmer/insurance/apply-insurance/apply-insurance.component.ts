import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Insurance } from 'src/Models/Insurance';
import { InsuranceService } from 'src/Service/InsuranceService';

@Component({
  selector: 'app-apply-insurance',
  templateUrl: './apply-insurance.component.html',
  styleUrls: ['./apply-insurance.component.css']
})
export class ApplyInsuranceComponent implements OnInit {

  insurance:any;
  insurancedetails:any;
  submitted = true;
  show: boolean = false;
  msg: any;
  ApplyForm:FormGroup;

  constructor(private insuranceservice:InsuranceService) {
    this.insurance=new Insurance();
    this.ApplyForm=new FormGroup(
      {
      season:new FormControl(null,Validators.required),
      croptype:new FormControl(null,Validators.required),
      year:new FormControl(null, [Validators.required]),
      cropname:new FormControl(null,Validators.required),
      area:new FormControl(null,Validators.required)
      }
    )
   }

  ngOnInit(): void {
  }

  get f() { return this.ApplyForm.controls; }
  onApply() {
      debugger;
      this.insuranceservice.ApplyInsurance(this.ApplyForm.value).subscribe(f => {alert('your policy number:'+f)},
      err => {this.msg = err.error.Message;console.error('Something is wrong!',err);}
      );
    }
    
  croptype?:string;
  cropname?:string;
  area?:any;

  onSubmit() {
    debugger;
    this.submitted = false;
    this.show = true;
    this.croptype = this.ApplyForm.get('croptype')?.value;
    this.cropname = this.ApplyForm.get('cropname')?.value;
    this.area = this.ApplyForm.get('area')?.value;
    this.insuranceservice.GetInsuranceDetails(this.croptype,this.cropname,this.area).subscribe((data)=>{
    this.insurancedetails = data;
    console.table(this.insurancedetails);
    });
  }

  onReset() {
    this.show = false;
    this.submitted = true;
    this.ApplyForm.reset();

  }
}
