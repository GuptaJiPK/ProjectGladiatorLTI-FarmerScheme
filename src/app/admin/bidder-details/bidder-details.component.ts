import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bidder } from 'src/Models/Bidder';
import { BidderService } from 'src/Service/bidderService';

@Component({
  selector: 'app-bidder-details',
  templateUrl: './bidder-details.component.html',
  styles: [
  ]
})
export class BidderDetailsComponent implements OnInit {

  constructor(public service:BidderService,private router:Router) { }

  ngOnInit(): void {
    this.service.refreshlist();
   
  }
//adding the record into the table
  addRecord(form:NgForm){
    debugger;
    this.service.postBidDetails().subscribe(
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
    this.service.formData=new Bidder();
  }

  //on clicking edit button populating form
  populateForm(selectedRecord:Bidder){
    this.service.formData=Object.assign({},selectedRecord);

  }

  updateRecord(form:NgForm){
    debugger;
    this.service.putBidDetails().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshlist();
       
      },
      err=>{console.log(err);}
    )}

    onDelete(id:any){
      if(confirm("Are you sure to delete this record?"))
      this.service.deleteBidDetails(id).subscribe(
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
