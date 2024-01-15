import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  private tokenKey = 'jwtToken';
  private apiUrl = 'https://fooderz.azurewebsites.net/login';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'post',
      'Content-Type': 'application/json',
    }),
    responseType: 'text' as 'json',
  };

  login(email: string, password: string) {
    
    
    return this.http.post<any>(this.apiUrl, JSON.stringify({email, password}), this.httpOptions)
      .pipe(map((Response) => {
        // login successful if there's a jwt token in the response
        if (typeof Response === 'string') {
          console.log("goed");
          this.setToken(Response);
        } else {
          console.error('Unexpected response type:', typeof Response);
          console.log("fout bezig" +Response.error)
        }

        return Response;

      }),
      );
  }

  getToken(): any {
    console.log("get token");
    return localStorage.getItem(this.tokenKey);
  }

  setToken(Response: string): void {
    localStorage.setItem(this.tokenKey, Response);
  }

  deleteToken() {
    localStorage.removeItem(this.tokenKey)
  }
}
