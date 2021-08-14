# FarmerScheme
 Farm-Scheme is a project in Agriculture domain. It is a Java/.NET Web-based application which gives an idea to the farmers how to use e-farming to sell their products. Farmers will get new ideas to improve their productivity, they can buy and sell their products online from different cities through the process of bidding.  Farmers can use this facility and avail benefits of different schemes available which will increase their profit.  
 
Project Abstract: 
• To encourage farmers to adopt innovative and modern agricultural practices.
•  To ensure flow of credit to the agriculture sector.  
 
Mandatory Modules: 
 
USERS:  There are three types of users in the system:  
• Admin  
• Farmer 
• Bidder  
 
# Module 1- Bidding 
 
This module will focus on bidding of crops by bidders in different cities. Registered users will have access to the online market place where individuals can request their crops for auction and potential buyers can make bids.  
A seller will request for a crop auction, specifying details of the crops including quantity. A seller can see current bids and log of all crops sold. 
Bidder will specify the amount they plan to invest for the bidding process, will be able to see the crop hosted for selling.  
Admin will control the entire bidding process, approve the crop to be sold and the final bid. 
 
 
 
# Module 2 – Fasal Bima Yojna:  
 
• To provide insurance coverage and financial support to the farmers in the event of failure of any of the notified crop because of natural calamities, pests & diseases.  • To stabilize the income of farmers to ensure their continuance in farming.
• There will be a uniform premium of only 2% to be paid by farmers for all Kharif crops and 1.5% for all Rabi crops. In case of annual commercial and horticultural crops, the premium to be paid by farmers will be only 5%. The premium rates to be paid by farmers are very low and balance premium will be paid by the Government to provide full insured amount to the farmers against crop loss on account of natural calamities.  
 
## Schemes for Farmer 

The Government of India provides various schemes for farmers, but due to lack of awareness and miscommunication, farmers do not avail these benefits. Hence, we try to integrate some of the schemes like Fasal Bima Yojna and Bidding of Crops scheme. 
We are implementing a system which is automated and helps to reduce the burden on farmers as well as the system. We are providing an online means to apply and claim insurance which will help the system to work efficiently and enhance smooth handling of records. 
The bidding module will enable the farmer to place crops for auction and receive best price from auction which stabilizes the farmer’s income as well as eliminates the stress of physical sale of crops in the market. We have implemented two modules which will help the farmer to make use of technology and reduce the efforts for selling the crops. 

## MODULE DESCRIPTION 

### 1.1 Home Module: 
This is the index page for all users. It has a horizontal menu consisting of the following tabs: Home, About US, Login, Contact US.
#### 1.2  About Us:
This page displays the information about the system to all users. 
#### 1.3 Login:
Login module asks the user to enter credentials to log into the system. Only authenticated users can log into the system. If a user is logging in for the first time, then user must register themselves. This module has controls-Email, Password, Forgot Password Link, Login button, Link for registration. Users can avail the Forgot password facility if the user forgets the password. Once the link has been clicked, the user will be asked to input the email, and the credentials will be mailed to the user. 1.3 Contact Us: 
This page allows the user to contact the system users (Admin) by specifying necessary message. The system reaches the user identified by email id entered by user in contact form. 
 
 
### 2. Registration Module:  
When user clicks on registration link, system will ask user for type of user. Whether user is farmer or bidder? Once user selects the type, appropriate registration form will open and ask the user to enter data to register themselves into the system. Fields for registration module will be different for each user. 
 
## 3. Welcome Module 
Once the authorized user logs in, Welcome module will be displayed to user according to type of user. 
 
### 3.1 Farmer Welcome module consist of two links as shown below:
#### • Bidding- 
This module plays an important role, as many farmers don’t get a proper price for their product. The bidding module provides a platform for Farmers and Traders to sell and purchase crops. 
An authenticated farmer can request for crop sell by putting crop details like crop name, crop type, variety and quantity in the system for bidding.  The admin will review the request and take necessary action after proper quality check has been done. 
 
#### • Insurance: 
Insurance module allows a farmer to apply for insurance policies to insure crops from damages due to any calamities.               
The sub modules are as follows: 
 
  #### • Apply for Insurance: 
 
      I. To apply for insurance, farmer need to fill online form with proper valid credentials along with the sum of insurance he can avail through the scheme with proper bank detail. 
      II. If mandatory fields are not filled the error message will be generated to tell the farmer to enter all required fields. 
      III. Once all the data is filled by farmer system will able to calculate premium amount to be pay by user.  
   
   #### • Insurance Calculator: 
        
        I. Insurance calculator will calculate the insurance based on various parameters. 
        II. Insurance is calculated based on the type of season, zone type and type of crop and area in hectare. 
        III. Calculate button will show entire details about the policy before option for applying to policy. Once user confirms to apply (user clicks on Apply button) then data                 will be fed into database.  
 
 
   #### • Claim Insurance: 
 
      I. To claim insurance, farmer needs to fill a form with the credentials like policy number, scheme and cause for damage.
      II. If mandatory fields are not filled error message will be generated to tell the farmer to enter all required fields. 
      III. Once the form is filled with all fields admin will process the information and take necessary action including notifying the farmer about progress of claim request. 
 
 
### 3.2  Bidder Welcome module consist of bidding module: 
This module allows the bidder to see the current bidding details on their screen and system allows user to bid any crop by clicking on bid button. Once the user bid for any crop the bidding details will be displayed to user and data will be filled into the database. 
 
### 3.3 Admin Welcome module:
This module allows admin to see all bidders and farmers in the system.  Admin controls the entire bidding process and approves bids. Roles to be played by Admin:
•  Grant user to access into the system by validating certain documents which are provided by user at the time of registration. 
• Permit farmer to sell their quality crop. 
• Change the status of bidding details once a bid is made. • Permit farmer to claim their insurance after validation of documents submitted for cause of crop loss. 
 
 
 
<hr> 

<br> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2. </br>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
