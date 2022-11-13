export interface User{
    accessToken(accessToken: any): unknown;
    _id: string;
    name: string;
    email: string;
    dialCode: string;
    phone: string;
}