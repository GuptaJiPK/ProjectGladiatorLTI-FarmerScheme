import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/Operators';
import { Login } from 'src/Models/login';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
    isUserLoggedIn?: boolean;

    constructor(private http:HttpClient)
    { }
    public GetLoginDetails(email?:string,password?:string)
    {
        debugger;
        return this.http.get<any>("http://localhost:6073/api/Login"+"/"+email+"/"+password);
    }
  }