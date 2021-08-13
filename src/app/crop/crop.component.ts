
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Crop } from 'src/Models/Crop';
import { CropService } from 'src/Service/cropcrud/crop.service';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, AbstractControl} from '@angular/forms';
//import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.css']
})  
export class CropComponent implements OnInit {
  // uploader: FileUploader = new FileUploader({ url: "http://localhost:5000/api/CropForSalesVer3", removeAfterUpload: false, autoUpload: true });
  // fileToUpload: File | any;


  public progress?: number;
  public messageupload?: string;
  @Output() public onUploadFinished = new EventEmitter();



  cropForm:any;
  constructor(private fb:FormBuilder,private cropservice:CropService,private router:Router,private http: HttpClient) 
  {
    this.crop=new Crop();
    this.cropForm=this.fb.group({
      cropType: ['', [Validators.required]],
      Contact: ['', [Validators.required]],
      cropName: ['', [Validators.required]],
      FertilizerType: ['', [Validators.required]],
      Quantity: ['', [Validators.required]],   
      SoilPh: ['', [Validators.required]] 
    },{validator: this.passwordConfirming});
   }
   passwordConfirming(c: AbstractControl) {
    if (c.get('pwd')?.value !== c.get('confirmpassword')?.value) {
        //return {invalid: true};
    }
  }

  ngOnInit(): void {
    this.fetchcrop();
  }
  // onUpload(event: any){​​​​​
  //   this.fileToUpload = event.target.files[0];  
  //   var reader = new FileReader();  
  //   reader.readAsDataURL(this.fileToUpload); 
  // }

  errmsg:any;

  cropdetails:Crop={};
  crops:Crop[]=[];
  crop:any;
  cropName?:string;



  public isCreate?: boolean;
  public name?: string;
  public address?: string;
  fetchcrop(){
    
  this.cropservice.getcrop().subscribe((data)=>{console.table(data); this.crop=data;this.crops=this.crop;},
  (err)=>{this.errmsg=err.error.Message;});}

  

  message?:any;
  removeCrop(id?:number)
  {
    debugger;
      this.cropservice.deleteCrop(id).subscribe((data)=>{this.message=data});
      this.fetchcrop();
  }

//   //call insertdept from departmentservice
//cr:Crop={}
// addCrop()
// {
//   debugger;
//   // this.cropservice.insertCrop(this.cr).subscribe((data)=>{this.message=data});
//   this.cropservice.insertCrop(this.cr).subscribe((data)=>this.message=data);
//   //to avoid reloading to see the inserted record in table
//   this.fetchcrop();

// }

addCrop(){
  console.log(this.cropdetails)
  this.cropservice.insertCrop(this.cropdetails).subscribe((res)=>{
    console.log(res)
    this.fetchcrop();
  },(err)=>{
    console.log(err);
  })

}
public onCreate = () => {
  this.crop = {
    name: this.name,
    address: this.address,
    imgPath: ''
  }

  this.http.post('//localhost:5000/api/CropVerSalesVer3', this.crop)
  .subscribe(res => {
    this.isCreate = false;
  });
}
//call  getdeptbyid from departmentservice

getcropid(id?:number)
{
debugger;
this.cropservice.getcropbyid(id).subscribe((data)=>this.crop=data)

}

//call putdept from departmentservice

updateCrop()
{
  this.cropservice.putCrop(this.cropdetails.cropId,this.cropdetails).subscribe((res)=>{
    console.log(res);
    this.cropdetails = {};
    this.fetchcrop();
  },(err)=>{
    console.log(err);
  })}



  // ======================================UPLOAD FILE====================================================
  public uploadFile = (files?:any) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    const filename =fileToUpload.name;
    this.http.post('//localhost:5000/api/Upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        
        if (event.type === HttpEventType.Response) {
          this.messageupload = 'Upload success.';
          this.onUploadFinished.emit(event.body);
          alert("uploaded");
          console.log(filename);
        }
      });
  }
}

 

