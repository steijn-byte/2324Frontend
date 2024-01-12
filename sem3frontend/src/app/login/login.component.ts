import { Component, Inject } from '@angular/core';
import { AuthenticationService } from '../Authentication/authentication.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoggedIn = false;
  userEmail: string='';
  userPassword: string='';

  constructor( private authService: AuthenticationService, private router: Router){
    authService.login(this.userEmail, this.userPassword).subscribe((success) => {
      if (success){
        //
        this.router.navigate(['/home']);
      }
      else{
        console.log('login failed');
      }
    }
    
    )
  }


}

