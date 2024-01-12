export class User {
    public Username: string;
    public UserPassword: string;
    public UserEmail: string;


    constructor(username:string, userPassword:string, userEmail:string ){
        this.UserEmail = userEmail;
        this.UserPassword = userPassword;
        this.Username = username;
    }
}
