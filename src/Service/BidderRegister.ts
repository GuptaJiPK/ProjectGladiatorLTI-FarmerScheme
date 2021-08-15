import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/Models/User";



@Injectable({providedIn:"root"})
export class BidderRegisterService{
    constructor(private http:HttpClient){

    }

    readonly uri= "http://localhost:6073/api/Users" ;
    
    PostDetails(bidreg:User) {
        debugger;
        return this.http.post(this.uri,bidreg);
    }}