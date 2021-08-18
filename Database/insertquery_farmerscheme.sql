use FarmerScheme

select* from Users
insert into Users(FirstName,LastName,Email,Address1,Address2,City,State,Pincode,AadharCard,PanCard,Certificate,Password,
VerificationStatus,ApprovedBy,ApprovedDate) values
('Rahul','Kumar','rahul@gmail.com','202,B-Block','Sector-15','Mumbai','Maharashtra','400614','123412341234','GP001','C001','A001','verified','Ram Joshi','06-01-2021'),
('shashi','Gundala','shashigundala@gmail.com','h.no-1-7-997/1','ashok colony','Hyderabad','Telangana','506019','456456456778','GP002','C002','A003','verified','Ram Joshi','06-01-2021'),
('Pratik','Yadav','Pratik@gmail.com','101,Keshav apartment','Tanaji Nagar','Pune','Maharashtra','404114','789478947894','GP003','C003','A004','verified','Ram Joshi','07-01-2021')

insert into Users(FirstName,LastName,Email,Address1,Address2,City,State,Pincode,AadharCard,PanCard,TraderLicense,Password,
VerificationStatus,ApprovedBy,ApprovedDate) values
('Rani','Nand','Rani@gmail.com','1,C-Block','Sector-20','Mumbai','Maharashtra','400706','321432143214','GP004','T001','A002','verified','Amol kishor','07-12-2020'),
('Kishor','More','Kishor@gmail.com','202,A.P.Society','Gandi Road','Nashik','Maharashtra','400614','987498749874','GP005','T002','A005','verified','Amol kishor','07-12-2020'),
('Manoj','Nand','Manoj@gmail.com','1,M-Block','Sector-10','Sangli','Maharashtra','402206','223366557744','GP006','T003','A006','verified','Amol kishor','07-12-2020'),
('Kamla','More','Kamla@gmail.com','203,A.P.Society','Gandinagar Road','Solapur','Maharashtra','407614','998877445566','GP007','T004','A007','verified','Amol kishor','07-12-2020')

insert into Users(FirstName,LastName,Email,Address1,Address2,City,State,Pincode,AadharCard,PanCard,Password)values
('Ram','Joshi','Ram@gmail.com','1,shanti nagar','peshwe road','Pune','Maharashtra','100236','325632569874','GP008','SDHSJH'),
('Amol','Kishor','amolkishor@gmail.com','3,keshav peth','peshwe road','Pune','Maharashtra','100237','987432563256','GP009','SHADJAH')



select*from CropForSale
insert into CropForSale(UserID,CropType,CropName,Quantity,SoilPHCertificate,DateOfSoldCrop,MSP,SoldPrice,TotalPrice,StatusOfCropSell,FertilizerType) values
('4','Rabi','Wheat','100','6','01-01-2021','20','30','3000','approved','F1')
insert into CropForSale(UserID,CropType,CropName,Quantity,SoilPHCertificate,DateOfSoldCrop,MSP,SoldPrice,TotalPrice,StatusOfCropSell,FertilizerType) values
('5','Kharif','Rice','100','6','05-01-2021','30','40','4000','approved','F2')
insert into CropForSale(UserID,CropType,CropName,Quantity,SoilPHCertificate,DateOfSoldCrop,MSP,SoldPrice,TotalPrice,StatusOfCropSell,FertilizerType) values
('1','Kharif','Bajra','70','5','05-02-2021','25','40','2800','approved','F3'),('6','Rabi','Barley','150','6','05-01-2021','35','40','6000','pending','F4'),
('7','Horticultural','Tomato','100','5','05-01-2021','20','35','3500','approved','F3')

insert into CropForSale(UserID,CropType,CropName,Quantity,SoilPHCertificate,DateOfSoldCrop,MSP,SoldPrice,TotalPrice,FertilizerType) values
('4','horticultural','cotton','100','6','05-01-2021','55','70','7000','F3')


drop table CropForSale

select*from RoleType
insert into RoleType(UserID,UserRole)Values (1,'F'),(2,'F'),(3,'F'),(4,'B'),(5,'B'),(6,'B'),(7,'B')
insert into RoleType(UserID,UserRole)Values (8,'A'),(9,'A')


select*from LandDetails
insert into LandDetails(UserID,LandArea,LandAddress,LandPincode)values
(1,2,'Mumbai','400213'),(2,3,'Hyderabad','541230'),(3,2,'Pune','401213'),
(4,4,'Mumbai','400134'),(5,3,'Nashik','500213'),(6,4,'Solapur','500132'),(7,4,'Satara','502130')

select*from BankDetails
insert into BankDetails(UserID,AccountNo,IFSC_Code)values
(1,'256341','ABC001'),(2,'745698','ABC002'),(3,'456372','XYZ001'),(4,'987456','PQR01'),(5,'654123','XYZ02'),(6,'236541','PQR02'),(7,'412365','XYZ03')

insert into Bid(CropID,UserID,BidAmount,DateOfBid) values(801,4,30,'2020-12-15'),(802,5,40,'2020-12-15'),(804,6,45,'2020-12-15'),(805,7,30,'2020-12-15')
insert into BidCrops(bId,UserID,CropID,BasePriceAsMSP,FinalBidAmount,BidStatus) values (101,4,801,20,30,'sold'),(102,5,802,30,40,'sold'),(104,7,805,20,30,'sold')
insert into BidCrops(bId,UserID,CropID,BasePriceAsMSP,FinalBidAmount) values (101,4,801,20,30)
select*from Bid
select*from BidCrops



select*from Insurance
insert into Insurance(CropID,UserID,Year,Season,Area,SumInsuredPerHectare,CropType,CropName)values
(801,1,'2019','kharif',2,'25000','kharif','paddy'),
(802,2,'2020','kharif',3,'25000','kharif','jawar'),
(803,3,'2020','rabi',2,'20000','rabi','wheat'),(804,4,'2018','rabi',2,'15000','rabi','barley'),(805,5,'2018','horticultural',3,'20000','horticultural','sugarcane')





select*from InsuranceClaim
insert into InsuranceClaim(PolicyNo,ICompany,InsuranceName,DateOfLoss,CauseOfLoss,SumInsured,ClaimStatus)values
(505,'AGRICULTURE INSURANCE COMPANY','Kisan Yojna','01-06-2020','Draught','50000','claimed')
insert into InsuranceClaim(PolicyNo,ICompany,InsuranceName,DateOfLoss,CauseOfLoss,SumInsured,ClaimStatus)values
(501,'AGRICULTURE INSURANCE COMPANY','Fasal Bima Yojna','2021-06-09','Flood','50000','pending')
insert into InsuranceClaim(PolicyNo,ICompany,InsuranceName,DateOfLoss,CauseOfLoss,SumInsured,ClaimStatus)values
(502,'AGRICULTURE INSURANCE COMPANY','Kisan Yojna','2021-06-28','Cover for tractor ','50000','pending'),
(503,'AGRICULTURE INSURANCE COMPANY','Fasal Bima Yojna','2020-10-06','Cover for the pumpset','50000','claimed')





insert into CropDetails(CropType,CropName,MspPerQuintal,ActuarialRatePercentage,YeildPerHectareTons) values('kharif','paddy',1815,4.06,4.5)
,('kharif','jowar',2550,52.54,1),('kharif','groundnut',5090,31.54,1.4),('kharif','maize',1760,19.24,4),('kharif','sesame',6485,22.99,0.5),('rabi','wheat',1840,5,1.4),('rabi','mustard',4200,10,0.4)
,('rabi','gram(bengal gram)',4620,12,0.5),('rabi','masur(lentil)',4475,15,0.4),('rabi','barley',1440,2,3.6),('horticultural','sugarcane',285,5,42)
,('horticultural','cotton',5550,18,0.8)

select * from CropDetails
select*from CropForSale
update CropDetails set CropID=812 where Id=2012
update CropDetails set CropID=804 where Id=2011

----------------Stored Procedure--------------------------------------------------
create procedure proc_getdetailsofinsuree(@appid bigint)
as
begin
select i.IApplicationID,i.UserID,i.SumInsuredPerHectare,u.FirstName from Insurance i inner join Users u on i.UserID=u.UserID where i.IApplicationID=@appid
end

create procedure proc_calculateInsurance(@croptype varchar(30),@cropname varchar(30),@area float,@sumfinal float output,@fshare float output,@gvtshare float output)
as
begin
declare @x float,@msp float,@acturialrate float,@yeild float,@y float
if(@croptype='kharif')
begin
set @x=2;
end
else if(@croptype='rabi')
begin
set @x=1.5;
end
else if(@croptype='horticultural')
begin
set @x=5;
end
select @msp= [MspPerQuintal],@acturialrate=[ActuarialRatePercentage],@yeild=[YeildPerHectareTons] from CropDetails where CropType=@croptype AND CropName=@cropname
set @sumfinal=@msp*@yeild*10
set @y=@sumfinal*(@acturialrate/100)
set @fshare=@sumfinal*(@x/100)
set @gvtshare=@y-@fshare
set @sumfinal=@sumfinal*@area
set @fshare=@fshare*@area
set @gvtshare=@gvtshare*@area
return @sumfinal
return @fshare
return @gvtshare
end

declare @i float,@j float,@k float
exec proc_calculateInsurance 'rabi','wheat',2,@i output,@j output,@k output
print @i
print @j
print @k


