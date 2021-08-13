import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
//import { User } from "src/Models/User";

interface User{
    userId?:number;
    firstName?:string;
    lastName?:string ;
    email?:string ;
    address1?:string; 
    address2?:string ;
    city?:string;
    state?:string;
    pincode?:string;
    aadhar?:string;
    pan?:string;
    certificate?:string; 
    traderLicense?:string; 
    password?:string;
    verificationStatus?:string; 
    approvedBy?:string ;   
}

@Injectable({providedIn:"root"})
export class userloginService
{
    constructor(private http:HttpClient)
    {
       
    }
    readonly uri="http://localhost:6073/api/Login";

    //calling GetUserDetails() method from api
    GetUser(user:User):Observable<any>
    {
        //debugger;
        
        return this.http.get<any>(this.uri+"?email="+user.email+"&password="+user.password);
        
    }
    
    
}