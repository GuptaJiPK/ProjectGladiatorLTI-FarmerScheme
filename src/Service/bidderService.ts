import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Bidder } from "src/Models/Bidder";

@Injectable({providedIn:"root"})

export class BidderService{
    constructor(private http:HttpClient){

    }
    readonly uri="http://localhost:6073/api/Bids";

    formData:Bidder=new Bidder();
    bidderlist?:Bidder[];

    postBidDetails(){
        return this.http.post(this.uri,this.formData);
    }

    refreshlist(){
        this.http.get(this.uri)
        .toPromise()
        .then(res=>this.bidderlist=res as Bidder[]);
    }
    putBidDetails(){
        //debugger;
        return this.http.put(`${this.uri}/${this.formData.bId1}`,this.formData);
    }

    deleteBidDetails(id:number){
        return this.http.delete(`${this.uri}/${id}`);
    }

    ChangeStatus(id:number){
        debugger;
        return this.http.post( `${this.uri}/approved?bId1=${id}`,null,{responseType:'text'});
    }
}