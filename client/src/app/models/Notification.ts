export class Notification{
    constructor(IDJob: Number,
        Logo: String,
        Message: String,
        Time: Date){
            this.IDJob = IDJob;
            this.Message = Message;
            this.Time = Time;
    };
    IDJob: Number;
    Message: String;
    Time: Date;
    Logo: String;
}