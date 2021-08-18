import{Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crop } from 'src/Models/Crop';

@Injectable({providedIn:"root"})

export class CropService{
    constructor(private http:HttpClient){

    }
    readonly uri="http://localhost:6073/api/CropForSales";
    formData:Crop=new Crop();
    croplist?:Crop[];

    postCropDetails(){
        return this.http.post(this.uri,this.formData);
    }

    refreshlist(){
        debugger;
        this.http.get(this.uri)
        .toPromise()
        .then(res=>this.croplist=res as Crop[]);
    }

    putCropDetails(){
        debugger;
        return this.http.put(`${this.uri}/${this.formData.cropId}`,this.formData);
    }

    deleteCropDetails(id:number){
        return this.http.delete(`${this.uri}/${id}`);
    }
    ChangeStatus(id:number){
        return this.http.post( `${this.uri}/approved?cropId=${id}`,null,{responseType:'text'});
    }



    
}