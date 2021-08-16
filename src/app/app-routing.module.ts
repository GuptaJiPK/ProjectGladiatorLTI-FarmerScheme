import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FarmerComponent } from './farmer/farmer.component';

import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

import { CropDetailsComponent } from './admin/crop-details/crop-details.component';
import { BidderDetailsComponent } from './admin/bidder-details/bidder-details.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { ClaimDetailsComponent } from './admin/claim-details/claim-details.component';




import { BidhistoryComponent } from './bidhistory/bidhistory.component';



import { PlaceSellRequestComponent } from './farmer/place-sell-request/place-sell-request.component';
import { ViewMarketPlaceComponent } from './farmer/view-market-place/view-market-place.component';
import { SoldCropHistoryComponent } from './farmer/sold-crop-history/sold-crop-history.component';
import { InsuranceComponent } from './farmer/insurance/insurance.component';

import { BidderComponent } from './bidder/bidder.component';
import { ViewCurrentBidsComponent } from './bidder/view-current-bids/view-current-bids.component';
import { PlaceNewBidComponent } from './bidder/place-new-bid/place-new-bid.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NewFarmerComponent } from './newuser/new-farmer/new-farmer.component';
import { NewBidderComponent } from './newuser/new-bidder/new-bidder.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BidderRegistrationComponent } from './bidder-registration/bidder-registration.component';


//adding route details
const routes: Routes = [
   //setting a defaut page for application
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'farmerregistration',component:FarmerRegistrationComponent},
  {path:'bidderregistration',component:BidderRegistrationComponent},

  //new user register paths
  {path:'newuser',component:NewuserComponent,
children:[
  {path:'newbidder',component:NewBidderComponent},
  {path:'newfarmer',component:NewFarmerComponent}
]},

  //farmer module paths

  {path:'farmer',component:FarmerComponent,
children:[
  {path:'placesellrequests',component:PlaceSellRequestComponent},
  {path:'market',component:ViewMarketPlaceComponent},
  {path:'soldcrophistory',component:SoldCropHistoryComponent},
  {path:'insurance',component:InsuranceComponent}
]},

  {path: 'bidhistory-component', component: BidhistoryComponent },  

  //bidder module paths
 
  {path: 'bidder',component:BidderComponent,
children:[
  {path:'current-bids',component:ViewCurrentBidsComponent},
  {path:'place-bids',component:PlaceNewBidComponent}
]},

  {path:'forgotpwd',component:ForgotpwdComponent},
  {path:'about',component:AboutComponent},
  
  
  //admin module paths

  {path:'admin',component:AdminComponent,
  children:[
  {path:'user-details',component:UserDetailsComponent},
  {path:'crop-details',component:CropDetailsComponent},
  {path:'bid-details',component:BidderDetailsComponent},
  {path:'claim-details',component:ClaimDetailsComponent}
  
]},

//contact us page
{path:'contactus',component:ContactUsComponent},



//page not found
   {
     path:'**',component:PagenotfoundComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
