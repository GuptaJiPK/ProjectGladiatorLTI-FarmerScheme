import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FarmerComponent } from './farmer/farmer.component';
import { BidderComponent } from './bidder/bidder.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { CropforsaleComponent } from './cropforsale/cropforsale.component';
import { CropDetailsComponent } from './admin/crop-details/crop-details.component';
import { BidderDetailsComponent } from './admin/bidder-details/bidder-details.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { ClaimDetailsComponent } from './admin/claim-details/claim-details.component';


//adding route details
const routes: Routes = [
   //setting a defaut page for application
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'newuser',component:NewuserComponent},
  {path:'farmer',component:FarmerComponent},
  {path:'bidder',component:BidderComponent},
  {path:'forgotpwd',component:ForgotpwdComponent},
  {path:'about',component:AboutComponent},
  {path:'admin',component:AdminComponent,
  children:[
  {path:'user-details',component:UserDetailsComponent},
  {path:'crop-details',component:CropDetailsComponent},
  {path:'bid-details',component:BidderDetailsComponent},
  {path:'claim-details',component:ClaimDetailsComponent}
  
]}


//page not found
  // {
    // path:'**',component:NotfoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
