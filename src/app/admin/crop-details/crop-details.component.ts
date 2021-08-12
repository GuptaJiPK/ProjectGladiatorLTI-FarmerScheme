import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Crop } from 'src/Models/Crop';
import { CropService } from 'src/Service/cropService';

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.component.html',
  styles: [
  ]
})
export class CropDetailsComponent implements OnInit {

  constructor(public service:CropService) { }

  ngOnInit(): void {
    this.service.refreshlist();
  }
  addRecord(form:NgForm){
    debugger;
    this.service.postCropDetails().subscribe(
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
    this.service.formData=new Crop();
  }
  //on clicking edit button populating form
  populateForm(selectedRecord:Crop){
    this.service.formData=Object.assign({},selectedRecord);

  }

  updateRecord(form:NgForm){
    debugger;
    this.service.putCropDetails().subscribe(
      res=>{
        this.resetForm(form);
        this.service.refreshlist();
       
      },
      err=>{console.log(err);}
    )}

    onDelete(id:any){
      if(confirm("Are you sure to delete this record?"))
      this.service.deleteCropDetails(id).subscribe(
        res=>{
        this.service.refreshlist();
      },
      err=>{console.log(err)}
      )
    }

}
