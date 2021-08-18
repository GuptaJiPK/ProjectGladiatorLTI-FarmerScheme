import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Userfarmer } from "src/Models/userfarmer";



@Injectable({providedIn:"root"})
export class FarmerRegisterService{
    constructor(private http:HttpClient){

    }

    readonly uri= "http://localhost:6073/api/Users" ;
    
    PostDetails(farmreg:Userfarmer) {
        debugger;
        return this.http.post(this.uri,farmreg);
    }}