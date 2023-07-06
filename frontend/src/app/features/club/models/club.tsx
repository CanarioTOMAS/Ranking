import { IUser } from "../../../shared/models/user";

export interface IClub extends IUser{
    description:string;
    turnament:any;
    shift:any;
}  