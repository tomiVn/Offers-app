import { IPosts } from "./postsModel";

export interface User{
      _id: string;
     role: string;
   avatar: string;
     name: string;
   gender: string;
     born: Date;
    email: string;
 dialCode: string;
    phone: string;
    posts: Array<IPosts>;
}