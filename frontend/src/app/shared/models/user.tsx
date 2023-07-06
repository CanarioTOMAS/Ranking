export interface IUser {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  password: string;
  image: string;
  role: string;
}

export interface IUserRegister {
  name: IUser["name"];
  email: IUser["email"];
  role: IUser["role"];
  password: IUser["password"];
  confirmPassword: string;
}
