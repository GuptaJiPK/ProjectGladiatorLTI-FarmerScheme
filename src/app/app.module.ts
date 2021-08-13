import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BidderComponent } from './bidder/bidder.component';
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
import { ClaiminsuranceComponent } from './claiminsurance/claiminsurance.component';
import { ApplyinsuranceComponent } from './applyinsurance/applyinsurance.component';
import { InsuranceService } from 'src/Service/InsuranceService';
import { BiddermainpageComponent } from './biddermainpage/biddermainpage.component';
import { BidderCropService } from 'src/Service/BidderCropService';
import { ClaimService } from 'src/Service/claimService';
import { BidhistoryComponent } from './bidhistory/bidhistory.component';
import { ViewsoldhistoryComponent } from './viewsoldhistory/viewsoldhistory.component';
import { ViewmarketplacehomeComponent } from './viewmarketplacehome/viewmarketplacehome.component';
import { UploadComponent } from './upload/upload.component';
import { CropComponent } from './crop/crop.component';
import { FarmerwelcomeComponent } from './farmerwelcome/farmerwelcome.component';
import { CropService } from 'src/Service/cropService';
import { BidcomponentComponent } from './bidcomponent/bidcomponent.component';






@NgModule({
  declarations: [
    AppComponent,
    //BidderComponent,
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
    ClaiminsuranceComponent,
    ApplyinsuranceComponent,
    BiddermainpageComponent,
    BidhistoryComponent,
    ViewsoldhistoryComponent,
    ViewmarketplacehomeComponent,
    UploadComponent,
    CropComponent,
    FarmerwelcomeComponent,
    BidcomponentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [UserService,InsuranceService,BidderCropService,ClaimService,CropService],
  bootstrap: [AppComponent]
})
export class AppModule { }
