import{Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CropSale } from 'src/Models/CropSale';

@Injectable({providedIn:"root"})
export class BidderCropService
{
    constructor(private http:HttpClient)
    {
        
    }

    readonly uri="http://localhost:6073/api/BidderWelcome";

    getCropBidder()
    {
        
        return this.http.get(this.uri);
    }
}