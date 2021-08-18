using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace FarmerAdminAPI.Models
{
    public partial class FarmerSchemeContext : DbContext
    {
        public FarmerSchemeContext()
        {
        }

        public FarmerSchemeContext(DbContextOptions<FarmerSchemeContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Bid> Bids { get; set; }
        public virtual DbSet<BidCrop> BidCrops { get; set; }
        public virtual DbSet<CropDetail> CropDetails { get; set; }
        public virtual DbSet<CropForSale> CropForSales { get; set; }
        public virtual DbSet<Insurance> Insurances { get; set; }
        public virtual DbSet<InsuranceClaim> InsuranceClaims { get; set; }
        public virtual DbSet<User> Users { get; set; }

        /*protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-97CN9B7;Database=FarmerScheme;Trusted_Connection=True;");
            }
        }*/

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Bid>(entity =>
            {
                entity.HasKey(e => e.BId1)
                    .HasName("pk_Bids");

                entity.ToTable("Bid");

                entity.Property(e => e.BId1).HasColumnName("bId");

                entity.Property(e => e.BidAmount).HasColumnType("money");

                entity.Property(e => e.BidStatus)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('pending')");

                entity.Property(e => e.CropId).HasColumnName("CropID");

                entity.Property(e => e.CropName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfBid).HasColumnType("date");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.Bids)
                    .HasForeignKey(d => d.CropId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("fk_cb");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Bids)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("fk_bb");
            });

            modelBuilder.Entity<BidCrop>(entity =>
            {
                entity.HasKey(e => e.BcId)
                    .HasName("pk_BidCrops");

                entity.Property(e => e.BcId).HasColumnName("bcID");

                entity.Property(e => e.BId).HasColumnName("bId");

                entity.Property(e => e.BasePriceAsMsp)
                    .HasColumnType("money")
                    .HasColumnName("BasePriceAsMSP");

                entity.Property(e => e.BidStatus)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('active')");

                entity.Property(e => e.CropId).HasColumnName("CropID");

                entity.Property(e => e.FinalBidAmount).HasColumnType("money");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.BIdNavigation)
                    .WithMany(p => p.BidCrops)
                    .HasForeignKey(d => d.BId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("fk_bbb");

                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.BidCrops)
                    .HasForeignKey(d => d.CropId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("fk_cbc");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.BidCrops)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("fk_bbf");
            });

            modelBuilder.Entity<CropDetail>(entity =>
            {
                entity.HasIndex(e => e.CropName, "UQ__CropDeta__FE7DE0C52423F291")
                    .IsUnique();

                entity.Property(e => e.CropId).HasColumnName("CropID");

                entity.Property(e => e.CropName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CropType)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.MspPerQuintal).HasColumnType("money");

                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.CropDetails)
                    .HasForeignKey(d => d.CropId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("fk_cc");
            });

            modelBuilder.Entity<CropForSale>(entity =>
            {
                entity.HasKey(e => e.CropId)
                    .HasName("pk_cropforsale");

                entity.ToTable("CropForSale");

                entity.Property(e => e.CropId).HasColumnName("CropID");

                entity.Property(e => e.CropName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CropType)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfSoldCrop).HasColumnType("date");

                entity.Property(e => e.FertilizerType)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Msp)
                    .HasColumnType("money")
                    .HasColumnName("MSP");

                entity.Property(e => e.SoilPhcertificate)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("SoilPHCertificate");

                entity.Property(e => e.SoldPrice).HasColumnType("money");

                entity.Property(e => e.StatusOfCropSell)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('pending')");

                entity.Property(e => e.TotalPrice).HasColumnType("money");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CropForSales)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("fk_userid");
            });

            modelBuilder.Entity<Insurance>(entity =>
            {
                entity.HasKey(e => e.IapplicationId)
                    .HasName("pk_insurance");

                entity.ToTable("Insurance");

                entity.Property(e => e.IapplicationId).HasColumnName("IApplicationID");

                entity.Property(e => e.CropId).HasColumnName("CropID");

                entity.Property(e => e.CropName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.CropType)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Season)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.SumInsuredPerHectare).HasColumnType("money");

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.Year)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.Crop)
                    .WithMany(p => p.Insurances)
                    .HasForeignKey(d => d.CropId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("fk_insurance");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Insurances)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("fk_insu");
            });

            modelBuilder.Entity<InsuranceClaim>(entity =>
            {
                entity.HasKey(e => e.ClaimId)
                    .HasName("pk_insuranceclaim");

                entity.ToTable("InsuranceClaim");

                entity.Property(e => e.ClaimId).HasColumnName("ClaimID");

                entity.Property(e => e.CauseOfLoss)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ClaimStatus)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('pending')");

                entity.Property(e => e.DateOfLoss).HasColumnType("date");

                entity.Property(e => e.Icompany)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("ICompany")
                    .HasDefaultValueSql("('AGRICULTURE INSURANCE COMPANY')");

                entity.Property(e => e.InsuranceName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.SumInsured).HasColumnType("money");

                entity.HasOne(d => d.PolicyNoNavigation)
                    .WithMany(p => p.InsuranceClaims)
                    .HasForeignKey(d => d.PolicyNo)
                    .OnDelete(DeleteBehavior.SetNull)
                    .HasConstraintName("fk_insuranceclaim");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.Email, "UQ__Users__A9D105342849DA64")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("UserID");

                entity.Property(e => e.AadharCard)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.AccountNo)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Address1)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Address2)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ApprovedBy)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ApprovedDate).HasColumnType("date");

                entity.Property(e => e.Certificate)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.IfscCode)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("IFSC_Code");

                entity.Property(e => e.LandAddress)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LandArea)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LandPincode)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PanCard)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Pincode)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.Roles)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TraderLicense)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.VerificationStatus)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('pending')");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
