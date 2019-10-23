import { createContext, Dispatch, SetStateAction } from "react";
interface IUser{
    userName: string;
    userImage: string;
    userBio: string;
    userEmail: string;
    flag:boolean
  }
const UserContext = createContext<IUser>({userName:"",userBio:"",userEmail:"",userImage:"",flag:false});
export default UserContext;