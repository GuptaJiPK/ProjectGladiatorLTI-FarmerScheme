import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IClaimService } from 'src/Service/iclaim';
@Component({
  selector: 'app-claim-insurance',
  templateUrl: './claim-insurance.component.html',
  styleUrls: ['./claim-insurance.component.css']
})
export class ClaimInsuranceComponent implements OnInit {

  claimform:FormGroup;
  constructor(private iclaimservice:IClaimService) {
    this.claimform=new FormGroup(
      {
        PolicyNo:new FormControl(null,Validators.required),
        Icompany:new FormControl(null,[Validators.required]),
        InsuranceName:new FormControl(null,Validators.required),
        DateOfLoss:new FormControl(null,[Validators.required]),
        CauseOfLoss:new FormControl(null,[Validators.required]),
        SumInsured:new FormControl(null,Validators.required)
      }
    )
   }

  ngOnInit(): void {
    this.futureDateDisable();
  }
  maxDate:any;
  futureDateDisable()
  {
    var date:any=new Date();
    var todayDate:any=date.getDate();
    var month:any =date.getMonth()+1;
    var year:any = date.getFullYear();
    if(todayDate<10)
    {
      todayDate = '0'+todayDate;

    }
    if(month<10)
    {
      month='0'+month;
    }
    this.maxDate = year+"-"+month+"-"+todayDate;

  }
 
  errmsg:any;
  message:any;
  addRequest(){
    console.log(this.claimform.value);
    debugger;
    this.iclaimservice.PostDetails(this.claimform.value).subscribe((data)=>{console.table(data);this.message=data},
    (err)=>{this.errmsg=err.error.Message;
    //this.toastr.success('Submitted successfully', 'Claim Application placed')
    });
  }
  

}
