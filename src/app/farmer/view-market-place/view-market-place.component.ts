import { Component, OnInit } from '@angular/core';
import { Crop } from 'src/Models/Crop';
import { CropService } from 'src/Service/cropcrud/crop.service';

@Component({
  selector: 'app-view-market-place',
  templateUrl: './view-market-place.component.html',
  styleUrls: ['./view-market-place.component.css']
})
export class ViewMarketPlaceComponent implements OnInit {

  cropsold:any;
  message:any;
  farmerid:any;

  constructor(private cropservice: CropService) { 
    console.log(this.farmerid);
    this.cropservice.viewsoldhistory(this.farmerid).subscribe(
      sold => {this.cropsold = sold;this.message=undefined},
      err=>this.message = err.error.Message);
  }

  ngOnInit(): void {
    this.fetchviewmarketplacehome();
  }
  errmsg:any;
  crop:any;
  crops:Crop[]=[];

  
  fetchviewmarketplacehome(){
    debugger;
    this.cropservice.getsoldcrops().subscribe((data)=>{console.table(data); this.crop=data;this.crops=this.crop;},
    (err)=>{this.errmsg=err.error.Message;});}

}
