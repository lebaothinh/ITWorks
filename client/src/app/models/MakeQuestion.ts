export class MakeQuestion{
    constructor(IDMakeQuestion: number,
        IDCompany: number,
        IDLaborer: number,
        MakeQuestionDate: Date,
        Title: String,
        Content: String,
        Answer: String,
        Status: boolean){
            this.IDMakeQuestion = IDMakeQuestion;
            this.IDCompany = IDCompany;
            this.IDLaborer = IDLaborer;
            this.MakeQuestionDate = MakeQuestionDate;
            this.Title = Title;
            this.Content = Content;
            this.Answer = Answer;
            this.Status = Status;
    }
    IDMakeQuestion: number;
    IDCompany: number;
    IDLaborer: number;
    MakeQuestionDate: Date;
    Title: String;
    Content: String;
    Answer: String;
    Status: boolean;
}