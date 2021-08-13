import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Bid } from "src/Models/bid";

@Injectable({providedIn:"root"})
export class BidService{
    constructor(private http:HttpClient){

    }

    readonly uri= "http://localhost:6073/api/Bid" ;

    PostRequest(insu:any) {
        debugger;
        return this.http.post(this.uri, insu);
    }
    
}