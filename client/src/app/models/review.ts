import { LaborerandAdmin } from "./LaborerandAdmin";
import { Employer } from "./employer";

export class Review{
    constructor(IDCustomer: number,
        IDCompany: number,
        star: number,
        title: string,
        recommendation: boolean,
        reviewDate: Date,
        like: string,
        dislike: string){
            this.IDLaborer = IDCustomer;
            this.IDCompany = IDCompany;
            this.star = star;
            this.title = title;
            this.recommendation = recommendation;
            this.reviewDate = reviewDate;
            this.like = like;
            this.dislike = dislike;
    };
    IDLaborer: number;
    IDCompany: number;
    star: number;
    title: string;
    recommendation: boolean;
    reviewDate: Date;
    like: string;
    dislike: string;
}