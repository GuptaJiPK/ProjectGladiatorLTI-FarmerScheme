import { Component, OnInit } from '@angular/core';
import { ViewBidService } from 'src/Service/viewBidService';

@Component({
  selector: 'app-view-current-bids',
  templateUrl: './view-current-bids.component.html',
  styleUrls: ['./view-current-bids.component.css']
})
export class ViewCurrentBidsComponent implements OnInit {

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
