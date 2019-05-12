import { Employer } from "./employer";
import { Skill } from "./skill";
import { PLocation } from "./location";

export class Job {
    constructor(IDCompany: Employer,
        position: string,
        jobName: string,
        postDate: Date,
        expirationDate: Date,
        salary: number,
        IDLocation: number,
        top3Reasons: string,
        jobContent: string,
        skillsAndExperience: string,
        reasonWorking: string,
        hotJob: boolean,
        arrSkills: Array<Skill>,
        location: string){
        this.IDCompany = IDCompany;
        this.position = position;
        this.jobName = jobName;
        this.postDate = postDate;
        this.expirationDate = expirationDate;
        this.salary = salary;
        this.top3Reasons = top3Reasons;
        this.jobContent = jobContent;
        this.skillsAndExperience = skillsAndExperience;
        this.reasonWorking = reasonWorking;
        this.IDLocation = IDLocation;
        this.hotJob = hotJob;
        this.arrSkills = arrSkills;
        this.location = location;
    }
    IDJob: number;
    IDCompany: Employer;
    position: string;
    jobName: string;
    postDate: Date;
    expirationDate: Date;
    salary: number;
    top3Reasons: string;
    jobContent: string;
    skillsAndExperience: string;
    reasonWorking: string;
    IDLocation: number;
    hotJob: boolean;
    arrSkills: Array<Skill>;
    location: string;
}