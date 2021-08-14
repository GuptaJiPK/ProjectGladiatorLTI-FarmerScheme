import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BidderComponent } from './bidder/bidder.component';
import { FarmerComponent } from './farmer/farmer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/Service/userService';
import { AboutComponent } from './about/about.component';
import { CropforsaleComponent } from './cropforsale/cropforsale.component';
import { CropDetailsComponent } from './admin/crop-details/crop-details.component';
import { BidderDetailsComponent } from './admin/bidder-details/bidder-details.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { ClaimDetailsComponent } from './admin/claim-details/claim-details.component';


import { InsuranceService } from 'src/Service/InsuranceService';

import { BidderCropService } from 'src/Service/BidderCropService';
import { ClaimService } from 'src/Service/claimService';
import { BidhistoryComponent } from './bidhistory/bidhistory.component';


import { UploadComponent } from './upload/upload.component';

import { CropService } from 'src/Service/cropService';

import { PlaceSellRequestComponent } from './farmer/place-sell-request/place-sell-request.component';
import { ViewMarketPlaceComponent } from './farmer/view-market-place/view-market-place.component';
import { SoldCropHistoryComponent } from './farmer/sold-crop-history/sold-crop-history.component';
import { InsuranceComponent } from './farmer/insurance/insurance.component';
import { ApplyInsuranceComponent } from './farmer/insurance/apply-insurance/apply-insurance.component';
import { ClaimInsuranceComponent } from './farmer/insurance/claim-insurance/claim-insurance.component';

import { ViewBidService } from 'src/Service/viewBidService';
import { ViewCurrentBidsComponent } from './bidder/view-current-bids/view-current-bids.component';
import { PlaceNewBidComponent } from './bidder/place-new-bid/place-new-bid.component';
import { ToastrModule } from 'ngx-toastr';






@NgModule({
  declarations: [
    AppComponent,
    BidderComponent,
    FarmerComponent,
    HomeComponent,
    LoginComponent,
    NewuserComponent,
    ForgotpwdComponent,
    AdminComponent,
    AboutComponent,
    CropforsaleComponent,
    CropDetailsComponent,
    BidderDetailsComponent,
    UserDetailsComponent,
    ClaimDetailsComponent,
    
    BidhistoryComponent,
    UploadComponent,
    
   
    PlaceSellRequestComponent,
    ViewMarketPlaceComponent,
    SoldCropHistoryComponent,
    InsuranceComponent,
    ApplyInsuranceComponent,
    ClaimInsuranceComponent,
   
    ViewCurrentBidsComponent,
    PlaceNewBidComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })
  ],
  providers: [UserService,InsuranceService,BidderCropService,ClaimService,CropService,ViewBidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
