import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  private tokenKey = 'jwtToken';
  private apiUrl = 'https://localhost:51800/login';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    responseType: 'text' as 'json',
  };

  login(email: string, password: string ) {
    return this.http.post<any>(`${this.apiUrl}`, email + password, this.httpOptions)
      .pipe(map((companyResponse) => {
        // login successful if there's a jwt token in the response
        if (typeof companyResponse === 'string') {
          this.setToken(companyResponse);
        } else {
          console.error('Unexpected response type:', typeof companyResponse);
        }

        return companyResponse;

      }),
      );
  }

  getToken(): any {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(companyResponse: string): void {
    localStorage.setItem(this.tokenKey, companyResponse);
  }

  deleteToken() {
    localStorage.removeItem(this.tokenKey)
  }
}
