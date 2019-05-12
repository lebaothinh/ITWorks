namespace GioiThieuViecLam.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TheFirstInitial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ApplyWorks",
                c => new
                    {
                        IDLaborer = c.Int(nullable: false),
                        IDJob = c.Int(nullable: false),
                        description = c.String(),
                        approval = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => new { t.IDLaborer, t.IDJob })
                .ForeignKey("dbo.Jobs", t => t.IDJob, cascadeDelete: true)
                .ForeignKey("dbo.LaborerandAdmins", t => t.IDLaborer, cascadeDelete: true)
                .Index(t => t.IDLaborer)
                .Index(t => t.IDJob);
            
            CreateTable(
                "dbo.Jobs",
                c => new
                    {
                        IDJob = c.Int(nullable: false, identity: true),
                        IDCompany = c.Int(nullable: false),
                        IDLocation = c.Int(nullable: false),
                        position = c.String(),
                        jobName = c.String(),
                        postDate = c.DateTime(nullable: false),
                        expirationDate = c.DateTime(nullable: false),
                        salary = c.String(),
                        top3Reasons = c.String(),
                        jobContent = c.String(),
                        skillsAndExperience = c.String(),
                        reasonWorking = c.String(),
                    })
                .PrimaryKey(t => t.IDJob)
                .ForeignKey("dbo.Locations", t => t.IDLocation, cascadeDelete: true)
                .ForeignKey("dbo.Employers", t => t.IDCompany, cascadeDelete: true)
                .Index(t => t.IDCompany)
                .Index(t => t.IDLocation);
            
            CreateTable(
                "dbo.Employers",
                c => new
                    {
                        IDCompany = c.Int(nullable: false, identity: true),
                        companyName = c.String(),
                        generalDescription = c.String(),
                        logo = c.String(),
                        avatar = c.String(),
                        startTime = c.String(),
                        endTime = c.String(),
                        overView = c.String(),
                        services = c.String(),
                        numberOE = c.String(),
                        country = c.String(),
                        account = c.String(maxLength: 35),
                        password = c.String(),
                        email = c.String(maxLength: 50),
                        phoneNumber = c.String(),
                    })
                .PrimaryKey(t => t.IDCompany)
                .Index(t => t.account, unique: true)
                .Index(t => t.email, unique: true);
            
            CreateTable(
                "dbo.Branches",
                c => new
                    {
                        IDCompany = c.Int(nullable: false),
                        IDLocation = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.IDCompany, t.IDLocation })
                .ForeignKey("dbo.Employers", t => t.IDCompany, cascadeDelete: true)
                .ForeignKey("dbo.Locations", t => t.IDLocation, cascadeDelete: true)
                .Index(t => t.IDCompany)
                .Index(t => t.IDLocation);
            
            CreateTable(
                "dbo.Locations",
                c => new
                    {
                        IDLocation = c.Int(nullable: false, identity: true),
                        locationName = c.String(),
                        map = c.String(),
                    })
                .PrimaryKey(t => t.IDLocation);
            
            CreateTable(
                "dbo.RegisterLists",
                c => new
                    {
                        IDEmployer = c.Int(nullable: false),
                        IDRegisterPackage = c.Int(nullable: false),
                        registerDate = c.DateTime(nullable: false),
                        registerEx = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => new { t.IDEmployer, t.IDRegisterPackage })
                .ForeignKey("dbo.Employers", t => t.IDEmployer, cascadeDelete: true)
                .ForeignKey("dbo.RegisterPackages", t => t.IDRegisterPackage, cascadeDelete: true)
                .Index(t => t.IDEmployer)
                .Index(t => t.IDRegisterPackage);
            
            CreateTable(
                "dbo.RegisterPackages",
                c => new
                    {
                        IDRegisterPackage = c.Int(nullable: false, identity: true),
                        registerPackageName = c.String(nullable: false),
                        fee = c.Long(nullable: false),
                        discount = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.IDRegisterPackage);
            
            CreateTable(
                "dbo.Reviews",
                c => new
                    {
                        IDLaborer = c.Int(nullable: false),
                        IDCompany = c.Int(nullable: false),
                        star = c.Int(nullable: false),
                        title = c.String(),
                        recommendation = c.Boolean(nullable: false),
                        reviewDate = c.DateTime(nullable: false),
                        like = c.String(),
                        dislike = c.String(),
                    })
                .PrimaryKey(t => new { t.IDLaborer, t.IDCompany })
                .ForeignKey("dbo.Employers", t => t.IDCompany, cascadeDelete: true)
                .ForeignKey("dbo.LaborerandAdmins", t => t.IDLaborer, cascadeDelete: true)
                .Index(t => t.IDLaborer)
                .Index(t => t.IDCompany);
            
            CreateTable(
                "dbo.LaborerandAdmins",
                c => new
                    {
                        IDLaborer = c.Int(nullable: false, identity: true),
                        laborerName = c.String(),
                        dateOfBirth = c.DateTime(nullable: false),
                        sex = c.Boolean(nullable: false),
                        email = c.String(maxLength: 50),
                        phoneNumber = c.String(),
                        description = c.String(),
                        cV = c.String(),
                        avatar = c.String(),
                        auth = c.Boolean(nullable: false),
                        account = c.String(maxLength: 35),
                        password = c.String(),
                    })
                .PrimaryKey(t => t.IDLaborer)
                .Index(t => t.email, unique: true)
                .Index(t => t.account, unique: true);
            
            CreateTable(
                "dbo.Job_Skill",
                c => new
                    {
                        IDJob = c.Int(nullable: false),
                        IDSkill = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.IDJob, t.IDSkill })
                .ForeignKey("dbo.Jobs", t => t.IDJob, cascadeDelete: true)
                .ForeignKey("dbo.Skills", t => t.IDSkill, cascadeDelete: true)
                .Index(t => t.IDJob)
                .Index(t => t.IDSkill);
            
            CreateTable(
                "dbo.Skills",
                c => new
                    {
                        IDSkill = c.Int(nullable: false, identity: true),
                        skillName = c.String(),
                    })
                .PrimaryKey(t => t.IDSkill);
            
            CreateTable(
                "dbo.FollowEmployers",
                c => new
                    {
                        IDCompany = c.Int(nullable: false),
                        IDLaborer = c.Int(nullable: false),
                        FollowingDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => new { t.IDCompany, t.IDLaborer })
                .ForeignKey("dbo.Employers", t => t.IDCompany, cascadeDelete: true)
                .ForeignKey("dbo.LaborerandAdmins", t => t.IDLaborer, cascadeDelete: true)
                .Index(t => t.IDCompany)
                .Index(t => t.IDLaborer);
            
            CreateTable(
                "dbo.ForgetPasswords",
                c => new
                    {
                        ForgetPasswordId = c.Int(nullable: false, identity: true),
                        email = c.String(nullable: false),
                        Type = c.Boolean(nullable: false),
                        Param = c.String(nullable: false),
                        ExpirationTime = c.DateTime(nullable: false),
                        Status = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ForgetPasswordId);
            
            CreateTable(
                "dbo.Laborer_Skill",
                c => new
                    {
                        IDLaborer = c.Int(nullable: false),
                        IDSkill = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.IDLaborer, t.IDSkill })
                .ForeignKey("dbo.LaborerandAdmins", t => t.IDLaborer, cascadeDelete: true)
                .ForeignKey("dbo.Skills", t => t.IDSkill, cascadeDelete: true)
                .Index(t => t.IDLaborer)
                .Index(t => t.IDSkill);
            
            CreateTable(
                "dbo.MakeQuestions",
                c => new
                    {
                        IDMakeQuestion = c.Int(nullable: false, identity: true),
                        IDCompany = c.Int(nullable: false),
                        IDLaborer = c.Int(nullable: false),
                        MakeQuestionDate = c.DateTime(nullable: false),
                        Title = c.String(nullable: false),
                        Content = c.String(nullable: false),
                        Answer = c.String(),
                        Status = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.IDMakeQuestion)
                .ForeignKey("dbo.Employers", t => t.IDCompany, cascadeDelete: true)
                .ForeignKey("dbo.LaborerandAdmins", t => t.IDLaborer, cascadeDelete: true)
                .Index(t => t.IDCompany)
                .Index(t => t.IDLaborer);
            
            CreateTable(
                "dbo.News",
                c => new
                    {
                        NewsId = c.Int(nullable: false, identity: true),
                        AuthorId = c.Int(nullable: false),
                        TypeOfAuthor = c.Boolean(nullable: false),
                        Title = c.String(nullable: false),
                        GeneralDescription = c.String(nullable: false),
                        Avartar = c.String(),
                        Content = c.String(nullable: false),
                        WritingDate = c.DateTime(nullable: false),
                        Views = c.Int(nullable: false),
                        NumberOfLikes = c.Int(nullable: false),
                        TypeOfNewsId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.NewsId)
                .ForeignKey("dbo.TypeOfNews", t => t.TypeOfNewsId, cascadeDelete: true)
                .Index(t => t.TypeOfNewsId);
            
            CreateTable(
                "dbo.TypeOfNews",
                c => new
                    {
                        TypeId = c.Int(nullable: false, identity: true),
                        TypeName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.TypeId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.News", "TypeOfNewsId", "dbo.TypeOfNews");
            DropForeignKey("dbo.MakeQuestions", "IDLaborer", "dbo.LaborerandAdmins");
            DropForeignKey("dbo.MakeQuestions", "IDCompany", "dbo.Employers");
            DropForeignKey("dbo.Laborer_Skill", "IDSkill", "dbo.Skills");
            DropForeignKey("dbo.Laborer_Skill", "IDLaborer", "dbo.LaborerandAdmins");
            DropForeignKey("dbo.FollowEmployers", "IDLaborer", "dbo.LaborerandAdmins");
            DropForeignKey("dbo.FollowEmployers", "IDCompany", "dbo.Employers");
            DropForeignKey("dbo.ApplyWorks", "IDLaborer", "dbo.LaborerandAdmins");
            DropForeignKey("dbo.Job_Skill", "IDSkill", "dbo.Skills");
            DropForeignKey("dbo.Job_Skill", "IDJob", "dbo.Jobs");
            DropForeignKey("dbo.Reviews", "IDLaborer", "dbo.LaborerandAdmins");
            DropForeignKey("dbo.Reviews", "IDCompany", "dbo.Employers");
            DropForeignKey("dbo.RegisterLists", "IDRegisterPackage", "dbo.RegisterPackages");
            DropForeignKey("dbo.RegisterLists", "IDEmployer", "dbo.Employers");
            DropForeignKey("dbo.Jobs", "IDCompany", "dbo.Employers");
            DropForeignKey("dbo.Jobs", "IDLocation", "dbo.Locations");
            DropForeignKey("dbo.Branches", "IDLocation", "dbo.Locations");
            DropForeignKey("dbo.Branches", "IDCompany", "dbo.Employers");
            DropForeignKey("dbo.ApplyWorks", "IDJob", "dbo.Jobs");
            DropIndex("dbo.News", new[] { "TypeOfNewsId" });
            DropIndex("dbo.MakeQuestions", new[] { "IDLaborer" });
            DropIndex("dbo.MakeQuestions", new[] { "IDCompany" });
            DropIndex("dbo.Laborer_Skill", new[] { "IDSkill" });
            DropIndex("dbo.Laborer_Skill", new[] { "IDLaborer" });
            DropIndex("dbo.FollowEmployers", new[] { "IDLaborer" });
            DropIndex("dbo.FollowEmployers", new[] { "IDCompany" });
            DropIndex("dbo.Job_Skill", new[] { "IDSkill" });
            DropIndex("dbo.Job_Skill", new[] { "IDJob" });
            DropIndex("dbo.LaborerandAdmins", new[] { "account" });
            DropIndex("dbo.LaborerandAdmins", new[] { "email" });
            DropIndex("dbo.Reviews", new[] { "IDCompany" });
            DropIndex("dbo.Reviews", new[] { "IDLaborer" });
            DropIndex("dbo.RegisterLists", new[] { "IDRegisterPackage" });
            DropIndex("dbo.RegisterLists", new[] { "IDEmployer" });
            DropIndex("dbo.Branches", new[] { "IDLocation" });
            DropIndex("dbo.Branches", new[] { "IDCompany" });
            DropIndex("dbo.Employers", new[] { "email" });
            DropIndex("dbo.Employers", new[] { "account" });
            DropIndex("dbo.Jobs", new[] { "IDLocation" });
            DropIndex("dbo.Jobs", new[] { "IDCompany" });
            DropIndex("dbo.ApplyWorks", new[] { "IDJob" });
            DropIndex("dbo.ApplyWorks", new[] { "IDLaborer" });
            DropTable("dbo.TypeOfNews");
            DropTable("dbo.News");
            DropTable("dbo.MakeQuestions");
            DropTable("dbo.Laborer_Skill");
            DropTable("dbo.ForgetPasswords");
            DropTable("dbo.FollowEmployers");
            DropTable("dbo.Skills");
            DropTable("dbo.Job_Skill");
            DropTable("dbo.LaborerandAdmins");
            DropTable("dbo.Reviews");
            DropTable("dbo.RegisterPackages");
            DropTable("dbo.RegisterLists");
            DropTable("dbo.Locations");
            DropTable("dbo.Branches");
            DropTable("dbo.Employers");
            DropTable("dbo.Jobs");
            DropTable("dbo.ApplyWorks");
        }
    }
}
