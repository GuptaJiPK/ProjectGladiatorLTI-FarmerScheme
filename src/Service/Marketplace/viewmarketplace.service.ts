import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marketplace } from 'src/Models/bidhistory';

@Injectable({
  providedIn: 'root'
})
export class ViewmarketplaceService {
  constructor(private http:HttpClient) { }

  readonly uri= "//localhost:6073/api/ViewMarketplace?CropId=802";


  public viewmarketplace()
    {
      debugger;
      return this.http.get(this.uri);
    }
}