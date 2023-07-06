import {db} from '../../../api/firebase'; 
import { IUser, IUserRegister } from '../models/user';
import { doc, addDoc, collection } from "firebase/firestore"; 

export const Register = async (user:IUserRegister) => {
    const docRef = await addDoc(collection(db, "users"), {
        name: user.name,
        email: user.email,
        role: user.role,
        password: user.password,
    });
}