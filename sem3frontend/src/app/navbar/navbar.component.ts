import { Component } from '@angular/core';
import { AuthenticationService } from '../Authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public isLoggedin = false;

  constructor(private authService : AuthenticationService) {
    if(this.authService.getToken()){
      this.isLoggedin = true;
    } else {
      this.isLoggedin = false;
    }
  }

  public Logout(){
    this.authService.deleteToken()
    this.isLoggedin = false;
  }
}
