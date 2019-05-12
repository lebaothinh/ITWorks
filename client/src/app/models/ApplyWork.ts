export class ApplyWork{
    constructor(IDLaborer: number, IDJob: number, description: string, approval: boolean){
        this.IDLaborer = IDLaborer;
        this.IDJob = IDJob;
        this.description = description;
        this.approval = approval;
    };
    IDLaborer: number;
    IDJob: number;
    description: string;
    approval: boolean;
}