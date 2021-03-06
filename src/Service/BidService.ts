import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Bid } from "src/Models/bid";

@Injectable({providedIn:"root"})
export class BidService{
    constructor(private http:HttpClient){

    }

    readonly uri= "http://localhost:6073/api/Bid" ;
    readonly url="http://localhost:6073/api/BidderWelcome?CropId=101";

    PostRequest(insu:any,useremail:any) {
        debugger;
        return this.http.post("http://localhost:6073/api/Bid/"+useremail, insu);
    }
    getCropBidder()
    {
        
        return this.http.get(this.url);
    }
}