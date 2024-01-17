export class User {
    public Username: string;
    public Password: string;
    public Email: string;


    constructor(username:string, userPassword:string, userEmail:string ){
        this.Email = userEmail;
        this.Password = userPassword;
        this.Username = username;
    }
}
