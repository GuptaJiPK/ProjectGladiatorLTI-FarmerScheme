import { Component, OnInit } from '@angular/core';
import { CropService } from 'src/Service/cropcrud/crop.service';
import { Crop } from 'src/Models/Crop';


@Component({
  selector: 'app-viewsoldhistory',
  templateUrl: './viewsoldhistory.component.html',
  styleUrls: ['./viewsoldhistory.component.css']
})
export class ViewsoldhistoryComponent implements OnInit {

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
    this.fetchsoldcrop();
  }
  
  errmsg:any;
  crop:any;
  crops:Crop[]=[];
  fetchsoldcrop(){
    debugger;
    this.cropservice.getsoldcrops().subscribe((data)=>{console.table(data); this.crop=data;this.crops=this.crop;},
    (err)=>{this.errmsg=err.error.Message;});}
  
}
