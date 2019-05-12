namespace GioiThieuViecLam.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using GioiThieuViecLam.Models.BusinessModels;
    using GioiThieuViecLam.Models.DataModels;
    internal sealed class Configuration : DbMigrationsConfiguration<GioiThieuViecLam.Models.DataModels.DataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(GioiThieuViecLam.Models.DataModels.DataContext context)
        {
            //Dữ liệu mẫu tạo sẵn mô hình CodeFirst EF
            #region--------------Dữ liệu bảng Skill--------------------
            context.Skills.AddOrUpdate(c => c.skillName,
                new Skill { skillName = "Java" },
                new Skill { skillName = "iOS" },
                new Skill { skillName = ".NET" },
                new Skill { skillName = "C#" },
                new Skill { skillName = "Adroid" },
                new Skill { skillName = "PHP" },
                new Skill { skillName = "Unity3D" },
                new Skill { skillName = "Ruby on Rails" },
                new Skill { skillName = "AngularJS" },
                new Skill { skillName = "HTML5,CSS3,Javascript" },
                new Skill { skillName = "ReactJS" },
                new Skill { skillName = "C++" },
                new Skill { skillName = "SQL" },
                new Skill { skillName = "MySQL" },
                new Skill { skillName = "English" },
                new Skill { skillName = "Japanese" },
                new Skill { skillName = "Testter" },
                new Skill { skillName = "QA QC" }
            );
            #endregion
            #region--------------Dữ liệu bảng Company--------------------
            context.Employers.AddOrUpdate(c => c.companyName,
                new Employer
                {
                    companyName = "FPT Software",
                    generalDescription = "The leading provider of software outsourcing services in Vietnam",
                    overView = "FPT Software is part of FPT Corporation (FPT – HoSE) – the global leading technology, outsourcing and IT services group headquartered in Vietnam with nearly US$2 billion in revenue and more than 13,000 employees. Qualified with CMMI Level 5 & ISO 27001:2013, ASPICE LEVEL 3, FPT Software delivers world-class services in Smart factory, Digital platform, RPA, AI, IoT, Enterprise Mobilization, Cloud, AR/VR, Embedded System, Managed service, Testing, Platform modernization, Business Applications, Application Service, BPO and more services globally from delivery centers across the United States, Japan, Europe, Korea, China, Australia, Vietnam and the Asia Pacific. In 2017, FPT Software has been placed in top 10 of the ranking for three consecutive years.Among top 10, FPT Software is the only IT Company.",
                    startTime = "Monday",
                    endTime = "Friday",
                    numberOE = "1000+",
                    services = "Outsourcing",
                    account = "fpt",
                    password = "20-2C-B9-62-AC-59-07-5B-96-4B-07-15-2D-23-4B-70",
                    country = "VietNam",
                    avatar = "fpt-software-headline_photo.jpg",
                    logo = "fpt-software-logo.png",
                    email = "fpt@gmail.com"
                },
                new Employer
                {
                    companyName = "TMA Solutions",
                    generalDescription = "TMA Solutions is one of the top 15 global offshore software outsourcing companies",
                    overView = "TMA is the leading software outsourcing company in Vietnam with 2400 engineers. With more than 21 years of experience in providing software services for many world leading companies. We have built a strong technical and management team that can handle large and complex projects. Our people were selected from top Universities in Vietnam and overseas, and 40% of them have overseas experience.We are looking for many positions: Java / .Net / C++ / Frontend Developers and Automation Test Engineer...You can access in http://www.tmasolutions.com/careers.aspx or https://www.facebook.com/TMA.Recruitment for more details. Let's join us today to help us building a Vietnamese brand name in the world software outsourcing industry!",
                    startTime = "Monday",
                    endTime = "Friday",
                    numberOE = "1000+",
                    services = "Outsourcing",
                    account = "tmasolutions",
                    password = "20-2C-B9-62-AC-59-07-5B-96-4B-07-15-2D-23-4B-70",
                    country = "VietNam",
                    avatar = "tma-solutions-headline_photo.jpg",
                    logo = "tma-solutions-logo.png",
                    email = "tma@gmail.com"
                },
                new Employer
                {
                    companyName = "Janeto ICT",
                    generalDescription = "One of the leading ICT service companies in Vietnam",
                    overView = "Janeto is one of the leading ICT service companies in Vietnam with business focused in software R&D, outsourcing, and BPO. With its extensive expertise and high quality resources, Janeto always offers its clients the creative and innovative solutions. It will reduce their operating costs as well as deployment time while the quality of the products and services is still at best.",
                    startTime = "Monday",
                    endTime = "Friday",
                    numberOE = "1-50",
                    services = "Outsourcing",
                    account = "janeto",
                    password = "20-2C-B9-62-AC-59-07-5B-96-4B-07-15-2D-23-4B-70",
                    country = "VietNam",
                    avatar = "default.jpg",
                    logo = "janeto-ict-logo.png",
                    email = "janeto@gmail.com"
                },
                new Employer
                {
                    companyName = "Toshiba Software Development (Viet Nam) Co, Ltd",
                    generalDescription = "A social infrastructure and digital products software company",
                    overView = "Established in April 2007, Toshiba Software Development (Vietnam) Co., Ltd is a software company with 100% capital invested from Toshiba Corporation (Japan). As one of oversea R& D centers of Toshiba Corporate in software development field, we are developing software for variety of Toshiba products & solutions. Besides, TSDV have been also working on R&D activities of cutting-edge fundamental software technogies. We aims to become a leading company in software development field.",
                    startTime = "Monday",
                    endTime = "Friday",
                    numberOE = "301-500",
                    services = "Product",
                    account = "toshiba",
                    password = "20-2C-B9-62-AC-59-07-5B-96-4B-07-15-2D-23-4B-70",
                    country = "Japan",
                    avatar = "toshiba-software-development-viet-nam-co-ltd-headline_photo.jpg",
                    logo = "toshiba-software-development-viet-nam-co-ltd-logo.jpg",
                    email = "toshiba@gmail.com"
                },
                new Employer
                {
                    companyName = "KMS Technology",
                    generalDescription = "Agile & innovative global outsourcing",
                    overView = "KMS Technology, is US company specialized in Software Outsourcing & Software Product Development. We offer two main service lines: Offshore Product Development and Independent Software Testing to clients ranging from start-ups to large technology companies. Besides providing excellent Software Outsourcing services, KMS has launched awesome products: QASymphony, Katalon Studio, Kobiton and there will be others to come.With the cozy working environment,the awesome benefits as well as the excellent leadership team,KMS has been building its team with more than 850 IT talents in Vietnam.Recently KMS was ranked as top 4 IT company and top 26 best place to work in Vietnam.With 9 + years of operation,we always strive to maximize the growth of our teams by recognizing every individual’s strengths and building a career path for members.Join us to write your own success stories!",
                    startTime = "Monday",
                    endTime = "Friday",
                    numberOE = "501-1000",
                    services = "Outsourcing",
                    account = "kmstech",
                    password = "20-2C-B9-62-AC-59-07-5B-96-4B-07-15-2D-23-4B-70",
                    country = "United States",
                    avatar = "kms-technology-headline_photo.png",
                    logo = "kms-technology-logo.png",
                    email = "kms@gmail.com"
                },
                new Employer
                {
                    companyName = "OPSWAT Software Vietnam",
                    generalDescription = "San Francisco based software company that provides advanced solutions for cyber security industry",
                    overView = "OPSWAT is a global cyber security company providing solutions for enterprises since 2002 to identify, detect, and remediate advanced security threats from data and devices coming into and out their networks. Trusted by over 1,000 organizations worldwide for this secure data flow, OPSWAT prevents advanced security threats across multiple channels of file transfer and data flow with flexible options of MetaDefender and MetaAccess solutions and API-based development and threat intelligence platforms. With over 30 anti-malware engines, 100+ data sanitization engines and more than 25 technology integration partners, OPSWAT is a pioneer and leader in data sanitization (Content Disarm and Reconstruction), vulnerability detection, multi-scanning, device compliance, and cloud access control. To learn more about OPSWAT, please visit www.OPSWAT.com",
                    startTime = "Monday",
                    endTime = "Friday",
                    numberOE = "51-100",
                    services = "Product",
                    account = "opswat",
                    password = "20-2C-B9-62-AC-59-07-5B-96-4B-07-15-2D-23-4B-70",
                    country = "United States",
                    avatar = "opswat-software-vietnam-headline_photo.jpg",
                    logo = "opswat-software-vietnam-logo.png",
                    email = "opswat@gmail.com"
                },
                new Employer
                {
                    companyName = "Bảo Thịnh IT",
                    generalDescription = "San Francisco based software company that provides advanced solutions for cyber security industry",
                    overView = "OPSWAT is a global cyber security company providing solutions for enterprises since 2002 to identify, detect, and remediate advanced security threats from data and devices coming into and out their networks. Trusted by over 1,000 organizations worldwide for this secure data flow, OPSWAT prevents advanced security threats across multiple channels of file transfer and data flow with flexible options of MetaDefender and MetaAccess solutions and API-based development and threat intelligence platforms. With over 30 anti-malware engines, 100+ data sanitization engines and more than 25 technology integration partners, OPSWAT is a pioneer and leader in data sanitization (Content Disarm and Reconstruction), vulnerability detection, multi-scanning, device compliance, and cloud access control. To learn more about OPSWAT, please visit www.OPSWAT.com",
                    startTime = "Monday",
                    endTime = "Friday",
                    numberOE = "51-100",
                    services = "Product",
                    account = "baothinhit",
                    password = "20-2C-B9-62-AC-59-07-5B-96-4B-07-15-2D-23-4B-70",
                    country = "Việt Nam",
                    avatar = "default.jpg",
                    logo = "default.jpg",
                    email = "lebaothinh.krb@gmail.com"
                }
            );
            #endregion
            #region--------------Dữ liệu bảng Laborer--------------------
            context.LaborerandAdmins.AddOrUpdate(c => c.laborerName,
                new LaborerandAdmin
                {
                    laborerName = "Nguyen Van A",
                    dateOfBirth = DateTime.Parse("1997-08-29"),
                    sex = true,
                    email = "vana@gmail.com",
                    phoneNumber = "0123456789",
                    description = "Nothing",
                    auth = true,
                    account = "vana",
                    password = "20-2C-B9-62-AC-59-07-5B-96-4B-07-15-2D-23-4B-70",
                    avatar = "default.jpg",
                    cV = "1.pdf"
                },
                new LaborerandAdmin
                {
                    laborerName = "Nguyen Van B",
                    dateOfBirth = DateTime.Parse("1997-12-25"),
                    sex = true,
                    email = "vanb@gmail.com",
                    phoneNumber = "0123456789",
                    description = "Nothing",
                    auth = false,
                    account = "vanb",
                    password = "20-2C-B9-62-AC-59-07-5B-96-4B-07-15-2D-23-4B-70",
                    avatar = "default.jpg",
                    cV = "2.pdf"
                },
                new LaborerandAdmin
                {
                    laborerName = "Lê Bảo Thịnh",
                    dateOfBirth = DateTime.Parse("1997-12-30"),
                    sex = true,
                    email = "lebaothinh.krb@gmail.com",
                    phoneNumber = "0347013955",
                    description = "Nothing",
                    auth = false,
                    account = "admin",
                    password = "20-2C-B9-62-AC-59-07-5B-96-4B-07-15-2D-23-4B-70",
                    avatar = "default.jpg",
                    cV = "3.pdf"
                }
            );
            #endregion
            context.SaveChanges();//Lưu dữ liệu bảng trên
            #region--------------Dữ liệu bảng Location--------------------
            context.Locations.AddOrUpdate(c => c.locationName,
                new Location { locationName = "Ho Chi Minh , District 9, FPT Software Đường D1 Phường Tân Phú"},
                new Location { locationName = " Ha Noi , Cau Giay, Duy Tan"},
                new Location { locationName = "Ho Chi Minh , District 12, TMA Tower, Quang Trung Software Center"},
                new Location { locationName = "Binh Thanh, Ho Chi Minh"},
                new Location { locationName = "Ha Noi , Ba Dinh, Kim Ma"}
            );
            #endregion
            context.SaveChanges();//Lưu dữ liệu bảng trên
            #region--------------Dữ liệu bảng Branchs--------------------
            context.Branchs.AddOrUpdate(
                new Branch { IDCompany = 1, IDLocation = 1 },
                new Branch { IDCompany = 1, IDLocation = 2 },
                new Branch { IDCompany = 2, IDLocation = 3 },
                new Branch { IDCompany = 3, IDLocation = 4 },
                new Branch { IDCompany = 5, IDLocation = 5 }
                );
            #endregion
            #region--------------Dữ liệu bảng Job--------------------
            context.Jobs.AddOrUpdate(c => c.jobContent,
                new Job
                {
                    IDCompany = 1,
                    IDLocation = 1,
                    jobName = "Hardware Engineer (Automotive/IoT)-Japan",
                    postDate = DateTime.Parse("2018-10-16"),
                    expirationDate = DateTime.Parse("2018-10-25"),
                    salary = "You'll love it",
                    reasonWorking = "Mức lương cạnh tranh. Cơ hội phát triển nghề nghiệp tốt,ổn định,lâu dài. Cơ hội làm việc với các dự án lớn về công nghệ trong các tổ chức tài chính, ngân hàng, công ty chứng khoán. Được làm việc tại môi trường làm việc trẻ, năng động và được hưởng nhiều tiện ích của các tòa nhà riêng của công ty FPT Software: khu sinh hoạt cộng đồng, nhà ăn, caféteria,sân bóng đá, sân golf mini, khu thể thao đa năng, phòng Gym, Yoga, bóng bàn, billiards. Được hưởng các chính sách đãi ngộ theo Luật lao động và chế độ bảo hiểm chăm sóc sức khỏe đặc biệt giành riêng cho nhân viên và người thân Chính sách của FPT Software",
                    jobContent = "Tham gia dự án lớn phát triển AVN  ( Audio, Video, Navigation) cho hệ thống điều hướng trên ô tô trên hệ điều hành Android OS",
                    skillsAndExperience = "Có ít nhất 1.5 năm kinh nghiệm trong việc phát triển ứng dụng Android, nắm vững Android SDK, JavaNắm vững lập trình hướng đối tượng OOP. Có kinh nghiệm làm UI,thread,service,broadcast receiver,custom views. Có kinh nghiệm trong việc xây dựng một ứng dụng Android app từ đầu đến lúc kết thúc. Có thể sử dụng Tool source control như SVN hoặc Git là một lợi thếCó thể giao tiếp trực tiếp bằng tiếng Anh.TOEIC > 500. Có kinh nghiệm phát triên audio,video là một lợi thế",
                    top3Reasons = "Signing bonus 1 month. Great working environment. Works with the best developers",
                    hotJob = false
                },
                new Job
                {
                    IDCompany = 1,
                    IDLocation = 2,
                    jobName = "20 Android Devs (Signing bonus 1 month)",
                    postDate = DateTime.Parse("2018-10-16"),
                    expirationDate = DateTime.Parse("2018-10-25"),
                    salary = "Up to $2000",
                    reasonWorking = "Competitive salary. Performance based award. Have a chance to go Onsite US. Young and dynamic working environment.",
                    jobContent = "Build solution and implement for infrastructure orchestration in AWS. Work with Kubernetes to pack standard software automatically and implement it in new infrastructure",
                    skillsAndExperience = "Solid hands on experience or knowledge in applying DevOps practices to an enterprise company. Solid hands on experience in using tools like Terraform, Jenkins, CI/CD etc. in applying DevOps practices.",
                    top3Reasons = "Attractive income- up to 2000$. Chance to go Onsite US. Work with best developers",
                    hotJob = true
                },
                new Job
                {
                    IDCompany = 2,
                    IDLocation = 3,
                    jobName = "10 Senior Java Developers",
                    postDate = DateTime.Parse("2018-10-16"),
                    expirationDate = DateTime.Parse("2018-10-25"),
                    salary = "Attractive salary",
                    reasonWorking = "Significant career development opportunities. Working with state of the art technologies and Agile processes",
                    jobContent = "The successful candidates will have opportunities working on large enterprise financial software or complex telecom systems. Our partners are market leaders in the global industry with offices located across the world.  The successful candidates will have opportunities to be trained or work abroad in our partners’ offices, with the innovative technology solutions and comprehensive domain knowledge",
                    skillsAndExperience = "Bachelor's Degree in Computer Science, Computer Engineering, IT or related fields. Strong at OOP, RESTful. Strong interest in Java/J2EE",
                    top3Reasons = "Career development opportunity. Health care insurance by VBI. Competitive, attractive salary",
                    hotJob = false
                },
                new Job
                {
                    IDCompany = 4,
                    IDLocation = 5,
                    jobName = "Tester Engineer - Up to $1200",
                    postDate = DateTime.Parse("2018-10-16"),
                    expirationDate = DateTime.Parse("2018-10-25"),
                    salary = "You'll love it",
                    reasonWorking = "Significant career development opportunities. Working with state of the art technologies and Agile processes",
                    jobContent = "Investigate system/software specifications to define test targets and test objectives. Define test plan, design and create test cases.",
                    skillsAndExperience = "Bachelor's Degree in Computer Science, Computer Engineering, IT or related fields. Strong at OOP, RESTful. Strong interest in Java/J2EE",
                    hotJob = false
                }
            );
            #endregion
            context.SaveChanges();//Lưu dữ liệu bảng trên
            #region--------------Dữ liệu bảng Job_Skills--------------------
            context.Job_Skills.AddOrUpdate(
                new Job_Skill { IDJob = 1, IDSkill = 1 },
                new Job_Skill { IDJob = 1, IDSkill = 2 },
                new Job_Skill { IDJob = 2, IDSkill = 3 },
                new Job_Skill { IDJob = 2, IDSkill = 4 }
            );
            #endregion
            #region--------------Dữ liệu bảng Reviews--------------------
            context.Reviews.AddOrUpdate(c => c.title,
                new Review
                {
                    IDLaborer = 1,
                    IDCompany = 1,
                    title = "Review 1",
                    reviewDate = DateTime.Parse("2018/10/18"),
                    like = "Làm việc OT khá mệt lương thấp chủ yếu là kinh nghiệm ^^!",
                    star = 3,
                },
                new Review
                {
                    IDLaborer = 1,
                    IDCompany = 2,
                    title = "Review 2",
                    reviewDate = DateTime.Parse("2018/10/18"),
                    like = "Ok",
                    star = 4,
                }
            );
            #endregion
            context.SaveChanges();//Lưu dữ liệu bảng trên
            #region--------------Dữ liệu bảng ApplyWork--------------------
            context.ApplyWorks.AddOrUpdate(c => c.IDJob,
                new ApplyWork { IDJob = 1, IDLaborer = 1, description = "Em muốn vào công ty này!", status = Const.AWStatus.Sent },
                new ApplyWork { IDJob = 2, IDLaborer = 1, description = "Em muốn vào công ty này!", status = Const.AWStatus.Seen },
                new ApplyWork { IDJob = 3, IDLaborer = 1, description = "Em muốn vào công ty này!", status = Const.AWStatus.AcceptSentEmail },
                new ApplyWork { IDJob = 4, IDLaborer = 1, description = "Em muốn vào công ty này!", status = Const.AWStatus.AcceptContactLater },
                new ApplyWork { IDJob = 1, IDLaborer = 2, description = "Em muốn vào công ty này!", status = Const.AWStatus.Reject }
                );
            #endregion
            context.SaveChanges();//Lưu dữ liệu bảng trên
            #region--------------Dữ liệu bảng RegisterPackage--------------------
            context.RegisterPackages.AddOrUpdate(c => c.IDRegisterPackage,
                new RegisterPackage { registerPackageName = "Gói đăng tin", fee = 300000, discount = 0 },
                new RegisterPackage { registerPackageName = "Gói xem 10 Apply", fee = 1000000, discount = 0 },
                new RegisterPackage { registerPackageName = "Gói xem 50 Apply", fee = 1500000, discount = 10 },
                new RegisterPackage { registerPackageName = "Gói xem 100 Apply", fee = 2500000, discount = 20 },
                new RegisterPackage { registerPackageName = "Gói xem 200 Apply", fee = 3000000, discount = 0 }
            );
            #endregion
            context.SaveChanges();//Lưu dữ liệu bảng trên
            #region--------------Dữ liệu bảng RegisterList--------------------
            context.RegisterList.AddOrUpdate(c => c.IDEmployer,
               new RegisterList { IDEmployer = 1, IDRegisterPackage = 1, registerDate = DateTime.Parse("2018-12-24"), registerEx = DateTime.Parse("2019-02-24") },
               new RegisterList { IDEmployer = 1, IDRegisterPackage = 2, registerDate = DateTime.Parse("2018-12-24"), registerEx = DateTime.Parse("2019-02-24") },
               new RegisterList { IDEmployer = 2, IDRegisterPackage = 1, registerDate = DateTime.Parse("2018-12-24"), registerEx = Convert.ToDateTime("2019-02-24") },
               new RegisterList { IDEmployer = 3, IDRegisterPackage = 1, registerDate = DateTime.Parse("2018-12-24"), registerEx = DateTime.Parse("2019-02-24") },
               new RegisterList { IDEmployer = 4, IDRegisterPackage = 1, registerDate = DateTime.Parse("2018-12-24"), registerEx = DateTime.Parse("2019-02-24") }
            );
            #endregion
            context.SaveChanges();
            #region--------------Dữ liệu bảng FollowEmployer--------------------
            context.FollowEmployers.AddOrUpdate(c => c.IDCompany,
               new FollowEmployer { IDCompany = 1, IDLaborer = 1, FollowingDate = DateTime.Now },
               new FollowEmployer { IDCompany = 2, IDLaborer = 1, FollowingDate = DateTime.Now },
               new FollowEmployer { IDCompany = 3, IDLaborer = 2, FollowingDate = DateTime.Now }
            );
            #endregion
            context.SaveChanges();
            #region--------------Dữ liệu bảng MakeQuestion--------------------
            context.MakeQuestions.AddOrUpdate(c => c.IDMakeQuestion,
               new MakeQuestion { IDCompany = 1, IDLaborer = 1, MakeQuestionDate = DateTime.Now, Status = false, Title = "Công ty còn tuyển dụng thực tập sinh không?", Content = "Cho em hỏi công ty còn tuyển dụng thực tập sinh không ạ! Em muốn thực tập vào ngày 20 tháng tới!", Answer="Có em nhé! Em vui lòng gửi CV vào email: xxxx@tma.com.vn để được phỏng vấn. Chào em."},
               new MakeQuestion { IDCompany = 2, IDLaborer = 2, MakeQuestionDate = DateTime.Now, Status = true, Title = "Chi Nhánh TMA ở đâu?", Content = "Cho em hỏi công ty TMA có chi nhánh ở quận Nhú Nhuận không ạ!", Answer = "Chào em. TMA có 2 chi nhánh nhằm trên quận Phú Nhuận. Lab 3 nằm trên ..Đặng Văn Ngữ...., Lab 4....." }
            );
            #endregion
            context.SaveChanges();
            #region--------------Dữ liệu bảng Laborer_Kills--------------------
            context.Laborer_Skills.AddOrUpdate(c => c.IDLaborer,
               new Laborer_Skill { IDLaborer=1, IDSkill =1 },
               new Laborer_Skill { IDLaborer = 1, IDSkill = 2 },
               new Laborer_Skill { IDLaborer = 1, IDSkill = 3 },
               new Laborer_Skill { IDLaborer = 2, IDSkill = 1 },
               new Laborer_Skill { IDLaborer = 2, IDSkill = 2 },
               new Laborer_Skill { IDLaborer = 2, IDSkill = 3 },
               new Laborer_Skill { IDLaborer = 3, IDSkill = 1 },
               new Laborer_Skill { IDLaborer = 3, IDSkill = 2 },
               new Laborer_Skill { IDLaborer = 3, IDSkill = 3 }
            );
            #endregion
            context.SaveChanges();
        }
    }
}
