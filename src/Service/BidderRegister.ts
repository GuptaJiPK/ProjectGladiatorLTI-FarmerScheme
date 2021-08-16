// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { User } from "src/Models/User";



// @Injectable({providedIn:"root"})
// export class BidderRegisterService{
//     constructor(private http:HttpClient){

//     }

//     readonly uri= "http://localhost:6073/api/Users" ;
    
//     PostDetails(bidreg:User) {
//         debugger;
//         return this.http.post(this.uri,bidreg);
//     }}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserReg } from "src/Models/Userreg";



@Injectable({providedIn:"root"})
export class BidderRegisterService{
    constructor(private http:HttpClient){

    }

    readonly uri= "http://localhost:6073/api/Users" ;
    // readonly url="http://localhost:6073/api/BankDetails";

    PostDetails(bidreg:UserReg) {
        debugger;
        return this.http.post(this.uri,bidreg);
    }
    // PostBankDetails(bank:BankBidder) {
    //         debugger;
    //         return this.http.post(this.url,bank);
   
    // }
}