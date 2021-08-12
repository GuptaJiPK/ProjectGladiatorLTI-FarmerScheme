import{Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/Models/User';

@Injectable({providedIn:"root"})

export class UserService{
    constructor(private http:HttpClient){

    }
   

    readonly uri="http://localhost:6073/api/Users";
    
    formData:User=new User();
    userlist?:User[];
    
    
    //calling postUsers  method from API
    postUserDetails()
    {
        //debugger;
        return this.http.post(this.uri,this.formData);
    }
    refreshlist(){
        this.http.get(this.uri)
        .toPromise()
        .then(res=>this.userlist=res as User[]);
    }
    putUserDetails(){
        //debugger;
        return this.http.put(`${this.uri}/${this.formData.userId}`,this.formData);
    }

    deleteUserDetails(id:number){
        debugger;
        return this.http.delete(`${this.uri}/${id}`);
    }

    


    

    
}