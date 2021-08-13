import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ClaimInsurance } from "../Models/ClaimInsurance";



@Injectable({providedIn:"root"})
export class IClaimService{
    constructor(private http:HttpClient){

    }

    readonly uri= "http://localhost:6073/api/ClaimInsuranceDetails" ;

    PostDetails(claiminsurance:ClaimInsurance) {
    debugger;
    return this.http.post(this.uri,claiminsurance);
    }
    
}