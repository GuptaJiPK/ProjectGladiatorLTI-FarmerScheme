--final Db
drop database FarmerScheme
drop table new_sample
create database FarmerScheme
use FarmerScheme

create table Users(
UserID int identity(1,1) constraint pk_user primary key,
FirstName varchar(255) not null,
LastName varchar(255) not null,
Email varchar(255) unique not null,
Address1 varchar(100) not null,
Address2 varchar(100) not null,
City varchar(20) not null,
State varchar(20) not null,
Pincode varchar(6) not null,AadharCard varchar(255) unique not null, PanCard varchar(255) unique not null,
Certificate varchar(255) ,TraderLicense varchar(255) ,Password varchar(255) not null,
VerificationStatus varchar(20) default 'pending' check(VerificationStatus in ('pending','verified')),
ApprovedBy varchar(100),
ApprovedDate date
)
select*from Users
drop table Users
sp_help Users



create table CropForSale(
CropID int identity(801,1) constraint pk_cropforsale primary key,
UserID int constraint fk_userid foreign key references Users(UserID) on delete set null,
CropType varchar(255) check (croptype in ('Rabi','Kharif','Horticultural')),
CropName varchar(255) not null,
Quantity float not null,
FertilizerType varchar(255) not null,
SoilPHCertificate varchar not null,
DateOfSoldCrop date not null,
MSP money,
SoldPrice money,
TotalPrice money ,
StatusOfCropSell varchar(255) default 'pending' check (StatusOfCropSell in ('approved','pending'))
)
select*from CropForSale
drop table CropForSale



create table RoleType(UserID int constraint fk_roletype foreign key references Users(UserID) on delete set null,
UserRole varchar(255) not null)
Select*from RoleType
drop table RoleType

create table LandDetails(
LandID int identity(1001,1) constraint pk_LandDetails primary key,
UserID int constraint fk_landdetails foreign key references Users(UserID) on delete set null,
LandArea float not null,
LandAddress varchar(255) not null,
LandPincode int not null
)
select*from LandDetails
drop table LandDetails

create table BankDetails(
BankID int identity(301,1) constraint pk_BankDetails primary key,
UserID int constraint fk_bankdetails foreign key references Users(UserID) on delete set null,
AccountNo varchar(255) not null,
IFSC_Code varchar(255) not null
)
select*from BankDetails
drop table BankDetails


Create Table Bid(
bId int identity(101,1) constraint pk_Bids primary key, 
CropID int constraint fk_cb foreign key references CropForSale(CropID) on delete set null,
UserID int constraint fk_bb foreign key references Users(UserID) on delete set null,
BidAmount money not null,
DateOfBid date not null,
BidStatus varchar(20) default 'pending' check (BidStatus in ('approved','pending','rejected'))
)
select * from Bid


Create Table BidCrops(
bcID int identity(3000,1) constraint pk_BidCrops primary key,
bId int constraint fk_bbb foreign key references Bid(bId) on delete set null,
UserID int constraint fk_bbf foreign key references Users(UserID) on delete set null,
CropID int constraint fk_cbc foreign key references CropForSale(CropID) on delete set null,
BasePriceAsMSP money,
FinalBidAmount money,
BidStatus varchar(20) default 'active' check (BidStatus in ('active','sold'))
)


create table Insurance(
IApplicationID int identity(501,1) constraint pk_insurance primary key,
CropID int constraint fk_insurance foreign key references CropForSale(CropID) on delete set null,
UserID int constraint fk_insu foreign key references Users(UserID) on delete set null,
Year varchar(255) not null,
Season varchar(255) not null,
Area float not null,
SumInsuredPerHectare money,
CropType varchar(255),
CropName varchar(255)
)
alter table Insurance add CropType varchar(255)
alter table Insurance add CropName varchar(255)
update Insurance set CropType='rabi',CropName='wheat' where CropID=801
update Insurance set CropType='rabi',CropName='barley' where CropID=802

select*from Insurance

create table InsuranceClaim(
ClaimID int identity(701,1) constraint pk_insuranceclaim primary key,
PolicyNo int constraint fk_insuranceclaim foreign key references Insurance(IApplicationID) on delete set null,
ICompany varchar(255) default 'AGRICULTURE INSURANCE COMPANY',
InsuranceName varchar(255) not null,
DateOfLoss date not null,
CauseOfLoss varchar(255) not null,
SumInsured money not null,
ClaimStatus varchar(255) default 'pending' check (ClaimStatus in ('pending','claimed'))
)

select*from InsuranceClaim
select*from Insurance
select*from CropDetails
select*from CropForSale
select*from Users
select*from InsuranceClaim


alter table InsuranceClaim drop constraint fk_insuranceclaim
insert into insurance (UserID,CropID,Year,Season,Area,CropType,CropName) values (8,813,2017,'Winter',4,'horticultural','cotton')


create table CropDetails
(
	Id int identity(2001,1) constraint pk_CD primary key,
	CropID int constraint fk_cc foreign key references CropForSale(CropID) on delete set null,
	CropType varchar(20) check(CropType in ('kharif','rabi','horticultural')),
	CropName varchar(20) unique not null,
	MspPerQuintal money not null,
	ActuarialRatePercentage float not null,
	YeildPerHectareTons float not null
)



drop table Insurance