import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marketplace } from 'src/Models/bidhistory';

@Injectable({
  providedIn: 'root'
})
export class ViewmarketplaceService {
  constructor(private http:HttpClient) { }

  readonly uri= "http://localhost:6073/api/ViewMarketplace?CropId=";


  public viewmarketplace(id:any)
    {
      debugger;
      return this.http.get(this.uri+id);
    }
}