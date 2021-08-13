import { Component, OnInit } from '@angular/core';
import { BidderCropService } from 'src/Service/BidderCropService';

@Component({
  selector: 'app-biddermainpage',
  templateUrl: './biddermainpage.component.html',
  styleUrls: ['./biddermainpage.component.css']
})
export class BiddermainpageComponent implements OnInit {

  constructor(private biddercropservice:BidderCropService ) { }

  ngOnInit(): void {
    this.fetchcropbid();
   
  }


  Cropbids:any[]=[]
  bidding:any[]=[]
  errMsg?:string;
  demo:any;



  fetchcropbid() {
    debugger;
    this.biddercropservice.getCropBidder().subscribe((data)=>{
    console.log(data)
    this.demo=data; 
    this.Cropbids=this.demo; 
    },
    (err)=>{this.errMsg=err.error.Meessage;
    });
  }

}