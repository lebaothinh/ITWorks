export class TotalReview{
    constructor(recommendationTrue: number,
        recommendationFalse: number,
        star1: number,
        star2: number,
        star3: number,
        star4: number,
        star5: number,
        totalStar: number,
        avgStar: number){
        this.recommendationFalse = recommendationFalse;
        this.recommendationTrue = recommendationTrue;
        this.star1 = star1;
        this.star2 = star2;
        this.star3 = star3;
        this.star4 = star4;
        this.star5 = star5;
        this.totalStar = totalStar;
        this.avgStar = avgStar;
    };
    recommendationTrue: number;
    recommendationFalse: number;
    star1: number;
    star2: number;
    star3: number;
    star4: number;
    star5: number;
    totalStar: number;
    avgStar: number;
}