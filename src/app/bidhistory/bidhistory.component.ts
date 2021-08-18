import { Component, OnInit } from '@angular/core';
import { Marketplace } from 'src/Models/bidhistory';
import { ViewmarketplaceService } from 'src/Service/Marketplace/viewmarketplace.service';

@Component({
  selector: 'app-bidhistory',
  templateUrl: './bidhistory.component.html',
  styleUrls: ['./bidhistory.component.css']
})
export class BidhistoryComponent implements OnInit {

   
    cropsbidconstructor:any;
    message:any;
    cropid:any=802;
  
    constructor(private viewmarketplaceService: ViewmarketplaceService) {
      debugger;
      console.log(this.cropid);
      this.viewmarketplaceService.viewmarketplace(localStorage.getItem('cid')).subscribe(
        data => {this.cropsbidconstructor = data;this.message=undefined},
        err=>this.message = err.error.Message);
      }

  ngOnInit(): void {
    this.fetchbidcrop();
  }
  
  errmsg:any;
  crop:any;
  cropsbid:any
  cropsbids:Marketplace[]=[];
  // id:any;
  fetchbidcrop(){
    debugger;
    this.viewmarketplaceService.viewmarketplace(localStorage.getItem('cid')).subscribe((data)=>{console.table(data); this.cropsbid=data;this.cropsbids=this.cropsbid;},
    (err)=>{this.errmsg=err.error.Message;});}

}


