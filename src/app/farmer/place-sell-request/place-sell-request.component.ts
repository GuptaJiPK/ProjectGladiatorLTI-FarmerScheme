import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Crop } from 'src/Models/Crop';
import { CropService } from 'src/Service/cropcrud/crop.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-place-sell-request',
  templateUrl: './place-sell-request.component.html',
  styleUrls: ['./place-sell-request.component.css']
})
export class PlaceSellRequestComponent implements OnInit {

  public progress?: number;
  public messageupload?: string;
  @Output() public onUploadFinished = new EventEmitter();
  
  cropForm:any;

  constructor(private fb:FormBuilder,public cropservice:CropService,private router:Router,private http: HttpClient,public tostr:ToastrService) { 
    this.crop=new Crop();
    this.cropForm=this.fb.group({
      cropType: ['', [Validators.required]],
      Contact: ['', [Validators.required]],
      cropName: ['', [Validators.required]],
      FertilizerType: ['', [Validators.required]],
     // Quantity: ['', [Validators.required]],   
      SoilPh: ['', [Validators.required]] ,
      Quantity: ['', [Validators.required, Validators.min(1), Validators.pattern('^(0|[1-9][0-9]*)$')]],
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
    this.tostr.success("Added Succefully","Your Product has been added asuccessfully")
    
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
