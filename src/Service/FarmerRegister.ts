import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/Models/User";



@Injectable({providedIn:"root"})
export class FarmerRegisterService{
    constructor(private http:HttpClient){

    }

    readonly uri= "http://localhost:6073/api/Users" ;
    
    PostDetails(farmreg:User) {
        debugger;
        return this.http.post(this.uri,farmreg);
    }}