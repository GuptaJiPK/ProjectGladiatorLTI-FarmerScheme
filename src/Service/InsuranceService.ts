import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class InsuranceService
{
    constructor(private http:HttpClient)
    {

    }
    public GetInsuranceDetails(croptype?:string,cropname?:string,area?:any)
    {
        debugger;

        return this.http.get<any>("http://localhost:6073/api/InsuranceDetails"+"/"+croptype+"/"+cropname+"/"+area);
    }
    public ApplyInsurance(insurance:any,useremail?:any)
    {
        return this.http.post("http://localhost:6073/api/Insurance/"+useremail,insurance);

    }   
    

    
}