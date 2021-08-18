import{Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({providedIn:"root"})
export class ViewBidService
{
    constructor(private http:HttpClient)
    {
       
    }

    readonly uri="http://localhost:6073/api/BidCrops";

    //calling getbid method from API
getstatusBid(id:number)
{
    return this.http.get(this.uri+"/"+id,{responseType:'text'});
}

    getBidder()
    {
        
        return this.http.get(this.uri);
    }

    //delete

    deleteBidder(id?:number)
    {
        
        return this.http.delete(this.uri+"/"+ id);
            
    }
    
   

}