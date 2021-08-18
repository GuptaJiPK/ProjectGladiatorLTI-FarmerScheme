import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { User } from 'src/Models/User';
import { UserService } from 'src/Service/userService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private userservice:UserService,private router:Router,private tost:ToastrService) {
   
   }
   user?:any;

  ngOnInit(): void {
    // this.user=localStorage.getItem('user');
    // if(this.user==null){
    //   this.router.navigate(['login'])

    // }
    
  }
  Logout(){
    sessionStorage.removeItem('user');
    this.tost.success("Succesfully Logout!!!")
    this.router.navigate(['login']);
    
  }


}
