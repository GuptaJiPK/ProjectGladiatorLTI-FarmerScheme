import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Crop } from 'src/Models/Crop';

@Injectable({
  providedIn: 'root'
})
export class CropService {

  constructor(private http:HttpClient) { }

  readonly uri= "//localhost:6073/api/CropForSalesVer3";
  readonly uri2= "//localhost:6073/api/SoldHistory?FarmerId=4";

  getcrop(){
    return this.http.get(this.uri);
  }
  id?:number

  
  getsoldcrops(){
    debugger;   
    return this.http.get(this.uri2);
    
  }
  deleteCrop(id?:number){
    return this.http.delete(this.uri+"/"+ id);
}

//Insert
insertCrop(crop:Crop)
{
    return this.http.post(this.uri,crop);
    
}
//fetch the partcilar department details to edit

getcropbyid(id:any)
{
   return this.http.get(this.uri+"/"+ id)

}
//Update

putCrop(id:any,data:Crop)
{
      //debugger;
      return this.http.put(this.uri+"/"+ id,data);
}
public viewsoldhistory(id:any)
    {
      return this.http.get("http://localhost:5000/api/SoldHistory?id="+id);
    }
}