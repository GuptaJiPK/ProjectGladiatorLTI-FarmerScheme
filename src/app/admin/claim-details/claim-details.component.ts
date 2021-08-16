import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Claim } from 'src/Models/Claims';
import { ClaimService } from 'src/Service/claimService';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styles: [
  ]
})
export class ClaimDetailsComponent implements OnInit {

  constructor(public service:ClaimService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }

  addRecord(form:NgForm){
    debugger;
    this.service.postClaimDetails().subscribe(
      res=>{
        //to clear the fields in the form
        this.resetForm(form);
       alert("Added Successfully");
       this.service.refreshlist()
      },
      err=>{console.log(err);}
    )
  }
  //after submitting resetting the form
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new Claim();
  }
  //on clicking edit button populating form
  populateForm(selectedRecord:Claim){
    this.service.formData=Object.assign({},selectedRecord);

  }

  updateRecord(form:NgForm){
    debugger;
    this.service.putClaimDetails().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshlist();
       
      },
      err=>{console.log(err);}
    )}

    onDelete(id:any){
      if(confirm("Are you sure to delete this record?"))
      this.service.deleteClaimDetails(id).subscribe(
        res=>{
        this.service.refreshlist();
      },
      err=>{console.log(err)}
      )
    }
    statusUpdate(id:any){
      debugger;
      this.service.ChangeStatus(id).subscribe(
        res=>{
          this.service.refreshlist();
          console.log(res);
          if(res=="Status Approved")
          alert("Status Approved")
        }
      )
    }


}
