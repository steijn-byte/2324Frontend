import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Guid } from 'guid-typescript'
import { User } from '../Models/user.model';
import { HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
//naming issue, cannot rename due to time
  constructor(private http: HttpClient) { }
  private apiURL = 'fooderz.backend.azurewebsites.net'
httpOptions ={
  headers: new HttpHeaders().set('Content-Type', 'application/json')
}


  createUser(user: User){
    const username = user.Username;
    const password = user.UserPassword;
    const email = user.UserEmail;
      return this.http.post('${this.apiURL}/register', {username, password, email}, this.httpOptions)
  }

}
