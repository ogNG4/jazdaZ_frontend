
export interface IAuthState{
    isLogged: boolean; 
    accessToken: string;
    userData:{
        firstName: string;
        lastName: string;
        email: string;
        role: string;
        phoneNumber: string;
    }
}