import { IUser } from "../../../shared/models/user";

export interface IPlayer extends IUser{
    gender:string;
    dateBirthd:Date;
    surname:string;
}