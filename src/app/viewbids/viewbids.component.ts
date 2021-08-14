import { Component, OnInit } from '@angular/core';
import { ViewBidService } from 'src/Service/viewBidService';
@Component({
  selector: 'app-viewbids',
  templateUrl: './viewbids.component.html',
  styleUrls: ['./viewbids.component.css']
})
export class ViewbidsComponent implements OnInit {

  constructor(private bidderservice:ViewBidService) { }

  ngOnInit(): void {
    this.fetchbid();
  }
  bidding:any[]=[]

  errMsg?:string;
  demo:any;

  
  fetchbid() {
    this.bidderservice.getBidder().subscribe((data)=>{
    console.log(data)
    this.demo=data; 
    this.bidding=this.demo; 
    },
    (err)=>{this.errMsg=err.error.Meessage;
    });

  }
}
