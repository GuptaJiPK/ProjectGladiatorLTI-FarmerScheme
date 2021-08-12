import{Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Claim } from 'src/Models/Claims';

@Injectable({providedIn:"root"})

export class ClaimService{
    constructor(private http:HttpClient){

    }

    readonly uri="http://localhost:6073/api/InsuranceClaims";

    formData:Claim=new Claim();
    claimlist?:Claim[];

    postClaimDetails(){
        return this.http.post(this.uri,this.formData);
    }

    refreshlist(){
        this.http.get(this.uri)
        .toPromise()
        .then(res=>this.claimlist=res as Claim[]);
    }

    putClaimDetails(){
        debugger;
        return this.http.put(`${this.uri}/${this.formData.claimId}`,this.formData);
    }

    deleteClaimDetails(id:number){
        return this.http.delete(`${this.uri}/${id}`);
    }



}