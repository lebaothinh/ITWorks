namespace GioiThieuViecLam.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TheSecondInitial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CVs",
                c => new
                    {
                        LaborerId = c.Int(nullable: false),
                        ShortDescription = c.String(),
                        Address = c.String(),
                        GPA = c.Single(nullable: false),
                        Major = c.String(),
                        Character = c.String(),
                        ApplyPosition = c.String(),
                        Hobbies = c.String(),
                        Objective = c.String(),
                        WorkExperience = c.String(),
                        SoftSkills = c.String(),
                        Skills = c.String(),
                        Languages = c.String(),
                        Awards = c.String(),
                        Education = c.String(),
                        DetailInformation = c.String(),
                    })
                .PrimaryKey(t => t.LaborerId)
                .ForeignKey("dbo.LaborerandAdmins", t => t.LaborerId)
                .Index(t => t.LaborerId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.CVs", "LaborerId", "dbo.LaborerandAdmins");
            DropIndex("dbo.CVs", new[] { "LaborerId" });
            DropTable("dbo.CVs");
        }
    }
}
