import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BidService } from 'src/Service/BidService';

@Component({
  selector: 'app-bidcomponent',
  templateUrl: './bidcomponent.component.html',
  styleUrls: ['./bidcomponent.component.css']
})
export class BidcomponentComponent implements OnInit {
  bidform:FormGroup;
  constructor(private bidservice:BidService) {
    this.bidform=new FormGroup(
      {
        cropname:new FormControl(null,Validators.required),
        dateofbid:new FormControl(null,[Validators.required]),
        bidamt:new FormControl(null,Validators.required)   
      }
    )
   }

  ngOnInit(): void {
  }
  insu:any;
  errmsg:any;
  message:any;
  addRequest(){
    debugger;
    this.bidservice.PostRequest(this.bidform.value).subscribe((data)=>{console.table(data);this.message=data},
    (err)=>{this.errmsg=err.error.Message;
    });
  }

}
