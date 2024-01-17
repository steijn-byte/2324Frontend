import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthenticationService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log()
    if(this.authService.getToken()){
      request = this.addToken(request, this.authService.getToken());
    }
    return next.handle(request);
  }
  addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        
        Accept: 'application/json',
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });
    return request;
  }

}
