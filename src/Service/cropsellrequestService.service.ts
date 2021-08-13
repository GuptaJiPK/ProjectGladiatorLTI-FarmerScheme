import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class  cropsellrequestService
{
    constructor(private httpget:HttpClient)
    {
    }
    public placeRequest(farmerid:any,croptype:any,cropname:any,quantity:any,fertilizertype:any,filetoUpload:File)
    {
       const formData:FormData = new FormData();
       
       formData.append('SPhCert',filetoUpload,filetoUpload.name);
       formData.append('farmerid',farmerid);
       formData.append('croptype',croptype);
       formData.append('cropname',cropname);
       formData.append('quantity',quantity);
       formData.append('fertilizertype',fertilizertype);

       return this.httpget.post("http://localhost:58539/api/PlaceSellRequest",formData);

    }

    public viewsoldhistory(id:any)
    {
      return this.httpget.get("http://localhost:58539/api/SoldHistory?id="+id);
    }
    public viewPendingRequests(id:any)
    {
      return this.httpget.get("http://localhost:58539/api/FarmerHome?id="+id);
    }

    public viewMarketPlace(id:any)
    {
      return this.httpget.get("http://localhost:58539/api/ViewMarketPlace?id="+id);
    }

    public getCurrent(id:any)
    {
      return this.httpget.get("http://localhost:58539/api/GetCurrentBids?id="+id);
    }

    public viewPreviousBids(id:any)
    {
      return this.httpget.get("http://localhost:58539/api/PreviousBids?id="+id);
    }
}