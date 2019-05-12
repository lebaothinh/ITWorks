using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace GioiThieuViecLam.Models.DataModels
{
    public class DataContext:DbContext
    {
        public DataContext():base("DataITJobs") //Tạo tên chuỗi để chuỗi connectStrings trong webconfig lấy chuỗi
        {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
            //this.Configuration.UseDatabaseNullSemantics = true;
        }
        //Sử dụng DBSet EF để tạo bảng
        #region ---------DbSet-----------------
        public virtual DbSet<Employer> Employers { get; set; }
        public virtual DbSet<Job> Jobs { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Review> Reviews { get; set; }
        public virtual DbSet<Skill> Skills { get; set; }
        public virtual DbSet<LaborerandAdmin> LaborerandAdmins { get; set; }
        public virtual DbSet<Job_Skill> Job_Skills { get; set; }
        public virtual DbSet<Branch> Branchs { get; set; }
        public virtual DbSet<ApplyWork> ApplyWorks { get; set; }
        public virtual DbSet<RegisterPackage> RegisterPackages { get; set; }
        public virtual DbSet<RegisterList> RegisterList { get; set; }
        public virtual DbSet<FollowEmployer> FollowEmployers { get; set; }
        public virtual DbSet<MakeQuestion> MakeQuestions { get; set; }
        public virtual DbSet<ForgetPassword> ForgetPasswords { get; set; }
        public virtual DbSet<Laborer_Skill> Laborer_Skills { get; set; }
        public virtual DbSet<TypeOfNews> TypeOfNews { get; set; }
        public virtual DbSet<News> News { get; set; }
        public virtual DbSet<CV> CVs { get; set; }
        #endregion
        //Sử dụng cấu hình mối quan hệ
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //Cấu hình quan hệ 1-1 của Laborer với AdminAccount
            //modelBuilder.Entity<Laborer>()
            //     .HasRequired(s => s.AdminAccount)
            //     .WithRequiredPrincipal(c => c.Laborer);
        }
    }
}