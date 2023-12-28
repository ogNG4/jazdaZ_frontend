
export interface IAuthState{
    isLogged: boolean; 
    accessToken: string;
    userData:{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        role: string;
        phoneNumber: string;
    }
}