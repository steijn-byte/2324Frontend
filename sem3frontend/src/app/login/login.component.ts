import { Component, Inject } from '@angular/core';
import { AuthenticationService } from '../Authentication/authentication.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../Models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoggedIn = false;
  Username: string='';
  userPassword: string='';
  submitted=false;

  constructor( private authService: AuthenticationService, private router: Router, private toastr: ToastrService){

  }

  OnSubmit(){
    this.submitted = true;
    if (!this.isValid()){
        this.toastr.error("Niet alle velden zijn ingevuld");
    }
    else {
      this.authService.login(this.Username, this.userPassword).subscribe(
        (result: any) =>{
        if (result != null){
          this.toastr.success("U bent ingelogd");
          this.router.navigate(['']);
        }
      })
    }
  }
  isValid(): boolean{
    if (this.Username.length >= 1 && this.userPassword.length >= 1){
      return true;
    }
    else {
      return false;
    }
  }
}

