import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BidService } from 'src/Service/BidService';

@Component({
  selector: 'app-bidcomponent',
  templateUrl: './bidcomponent.component.html',
  styleUrls: ['./bidcomponent.component.css']
})
export class BidcomponentComponent implements OnInit {
  bidform:FormGroup;
  constructor(private bidservice:BidService,private toastr:ToastrService) {
    this.bidform=new FormGroup(
      {
        cropname:new FormControl(null,Validators.required),
        dateofbid:new FormControl(null,[Validators.required]),
        bidamt:new FormControl(null,Validators.required)   
      }
    )
   }

  ngOnInit(): void {
    this.fetchcropbid();
    this.futureDateDisable();
    this.getDate();
  }
  insu:any;
  errmsg:any;
  message:any;

  // //////////
  Cropbids:any[]=[]
  bidding:any[]=[]
  errMsg?:string;
  demo:any;
  minDate:any;
  maxDate:any;
  currentDate = new Date();

  // /////////////////////
  addRequest(){
    debugger;
    this.bidservice.PostRequest(this.bidform.value).subscribe((data)=>{console.table(data);this.message=data},
    (err)=>{this.errmsg=err.error.Message;
      this.toastr.success('Submitted successfully', 'Bid Placed')
    });
  }

  fetchcropbid() {
    debugger;
    this.bidservice.getCropBidder().subscribe((data)=>{
    console.log(data)
    this.demo=data; 
    this.Cropbids=this.demo; 
    },
    (err)=>{this.errMsg=err.error.Meessage;
    });
  }

  getDate()
  {
    var date:any = new Date();
    var toDate:any = date.getDate();
    if(toDate<10)
    {
        toDate = '0' + toDate;
    }
    var month:any = date.getMonth()+1;
    if(month<10)
    {
      month = '0'+month;
    }
    var year:any=date.getFullYear();
    this.minDate = year+"-"+month+"-"+toDate;
  }

  futureDateDisable()
  {
    var date:any=new Date();
    var todayDate:any=date.getDate();
    var month:any =date.getMonth()+1;
    var year:any = date.getFullYear();
    if(todayDate<10)
    {
      todayDate = '0'+todayDate;

    }
    if(month<10)
    {
      month='0'+month;
    }
    this.maxDate = year+"-"+month+"-"+todayDate;

  }

}
