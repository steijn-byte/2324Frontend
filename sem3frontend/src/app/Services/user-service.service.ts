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
  private apiURL = 'https://fooderzbackend.azurewebsites.net'
httpOptions ={
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*', // Replace with your actual client app URL
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
  }),
}


  createUser(user: User) : Observable<User>{
    console.log(JSON.stringify({user}));
      return this.http.post<User>(this.apiURL+'/Register', JSON.stringify(user), this.httpOptions)
  }

}
