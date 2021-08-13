import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Doc } from 'src/Models/Upload';
import { UploadService } from 'src/Service/Upload/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private fb:FormBuilder,private uploadservice:UploadService,private http: HttpClient) { }

  ngOnInit(): void {
  }
  doc:any;

  // addDoc(doc:Doc){
  //   debugger;
    
  
  // }

  importFile(event:any) {
    debugger;
    if (event.target.files.length == 0) {
       console.log("No file selected!");
       return
    }
      let file: File = event.target.files[0];
      // after here 'file' can be accessed and used for further process
      console.log(file);
    this.uploadservice.insertdoc(file).subscribe((res)=>{
      console.log(res)
      
    },(err)=>{
      console.log(err);
    })
    }

}
