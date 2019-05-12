export class Cv {
    constructor(laborerId: number,
        name: string,
        shortDescription: String,
        address: String,
        dateOfBirth: Date,
        phone: String,
        email: String,
        gender: boolean,
        gpa: number,
        major: String,
        character: String,
        applyPosition: String,
        hobbies: String,
        objective: String,
        workExperience: String,
        softSkills: String,
        skills: String,
        languages: String,
        awards: String,
        education: String,
        detailInformation: String,
        avatar: String){
            this.LaborerId = laborerId;
            this.Name = name;
            this.Avatar = avatar;
            this.ShortDescription = shortDescription;
            this.Address = address;
            this.DateOfBirth = dateOfBirth;
            this.Phone = phone;
            this.Email = email;
            this.Gender = gender;
            this.GPA = gpa;
            this.Major = major;
            this.Character = character;
            this.ApplyPosition = applyPosition;
            this.Hobbies = hobbies;
            this.Objective = objective;
            this.WorkExperience = workExperience;
            this.SoftSkills = softSkills;
            this.Skills = skills;
            this.Languages = languages;
            this.Awards = awards;
            this.Education = education;
            this.DetailInformation = detailInformation;
    }
    LaborerId: number;
    Name: String;
    Avatar: String;
    ShortDescription: String;
    Address: String;
    DateOfBirth: Date;
    Phone: String;
    Email: String;
    Gender: boolean;
    GPA: number;
    Major: String;
    Character: String;
    ApplyPosition: String;
    Hobbies: String;
    Objective: String;
    WorkExperience: String;
    SoftSkills: String;
    Skills: String;
    Languages: String;
    Awards: String;
    Education: String;
    DetailInformation: String;
}