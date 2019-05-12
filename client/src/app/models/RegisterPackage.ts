export class RegisterPackage{
    constructor(registerPackageName: string,
        fee: number,
        discount: number){
        this.registerPackageName = registerPackageName;
        this.fee = fee;
        this.discount = discount;
    };
    IDRegisterPackage: number;
    registerPackageName: string;
    fee: number;
    discount: number;
    registerStatus: boolean;
}