import { User } from "./userModel";
export interface IOffer{
            _id: string;
          title: string;
          image: string;
    description: string;
    contactInfo: string;
          price: number;
       fromDate: Date;
      untilDate: Date;
        creator: User;
      createdAt: Date;
    watchedList: Array<User>;

}