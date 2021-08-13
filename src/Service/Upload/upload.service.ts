import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doc } from 'src/Models/Upload';
//import { UploadComponent } from 'src/app/upload/upload.component';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  
  constructor(private http:HttpClient) { }
  public doc?:Doc;
  readonly uri= "http://localhost:6073/api/DocUpload";

  insertdoc(docfile:File)
  {
    debugger;
    console.log(docfile);
      return this.http.post(this.uri,docfile);
      
  }

}