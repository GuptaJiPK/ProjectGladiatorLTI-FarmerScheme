import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/Models/User';
import { UserService } from 'src/Service/userService';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  constructor(public service:UserService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }

  //adding the record into the table
  addRecord(form:NgForm){
    debugger;
    this.service.postUserDetails().subscribe(
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
    this.service.formData=new User();
  }

  //on clicking edit button populating form
  populateForm(selectedRecord:User){
    this.service.formData=Object.assign({},selectedRecord);

  }

  updateRecord(form:NgForm){
    //debugger;
    this.service.putUserDetails().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshlist();
       
      },
      err=>{console.log(err);}
    )}

    onDelete(id:any){
      if(confirm("Are you sure to delete this record?"))
      this.service.deleteUserDetails(id).subscribe(
        res=>{
        this.service.refreshlist();
      },
      err=>{console.log(err)}
      )
    }

    statusUpdate(id:any){
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
