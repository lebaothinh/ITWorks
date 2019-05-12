import { PLocation } from "./location";

export class Employer{
    constructor(
        companyName: string,
        generalDescription: string,
        logo: string,
        avatar: string,
        startTime: string,
        endTime: string,
        branches: PLocation[],
        services: string,
        numberOE: number,
        country: string,
        overView: string){
            this.companyName = companyName;
            this.generalDescription = generalDescription;
            this.logo = logo;
            this.avatar = avatar;
            this.startTime = startTime;
            this.endTime = endTime;
            this.branches = branches;
            this.overView = overView;
            this.services = services;
            this.numberOE = numberOE;
            this.country = country;
    }
    IDCompany: number;
    companyName: string;
    generalDescription: string;
    logo: string;
    avatar: string;
    startTime: string;
    endTime: string;
    overView: string;
    services: string;
    numberOE: number;
    country: string;
    branches: PLocation[];
    email: string;
    phoneNumber: string;
}