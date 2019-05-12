import { Skill } from "./skill";

export class LaborerandAdmin{
  constructor(
    customerName: string,
    dateOfBirth: Date,
    sex: boolean,
    email: string,
    phoneNumber: string,
    description: string,
    cV: string,
    avatar: string,
    skills: Skill[]){
      this.laborerName = customerName;
      this.dateOfBirth = dateOfBirth;
      this.sex = sex;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.description = description;
      this.cV = cV;
      this.avatar = avatar;
      this.skills = skills;
  };

  IDLaborer: number;
  laborerName: string;
  dateOfBirth: Date;
  sex: boolean;
  email: string;
  phoneNumber: string;
  description: string;
  cV: string;
  avatar: string;
  coin: number;
  skills: Skill[];
}