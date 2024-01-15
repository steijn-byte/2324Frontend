import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Guid } from 'guid-typescript'
import { User } from '../Models/user.model';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
//naming issue, cannot rename due to time
  constructor(private http: HttpClient) { }
  private apiURL = 'https://fooderz.azurewebsites.net'
httpOptions ={
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'post',
    'Content-Type': 'application/json',
  }),
}


  createUser(user: User) : Observable<User>{
    const username = user.Username;
    const password = user.UserPassword;
    const email = user.UserEmail;
    console.log(this.apiURL+'/Register');
    console.log(username, password, email);
      return this.http.post<User>(this.apiURL+'/Register', JSON.stringify({username, password, email}), this.httpOptions)
  }

}
