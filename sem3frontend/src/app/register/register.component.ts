import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from '../Services/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../Models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string ='';
  username: string='';
  password: string='';

  submitted=false;

  constructor(private userService: UserServiceService, private toastrService: ToastrService, private router: Router){

  }
  OnSubmit(){
    this.submitted = true;
    if (!this.isValid()){
      this.toastrService.error("Niet alle velden zijn ingevuld");
    }
    else {
        let user: User = new User(this.username, this.password, this.email)
        this.userService.createUser(user);
        this.toastrService.success("Account aangemaakt");
        //this.router.navigate(['home']);
    }
  }
  isValid(): boolean{
    if (this.username.length >= 1 && this.email.length >= 1 && this.password.length >= 1){
      return true;
    }
    else {
      return false;
    }
  }
}
