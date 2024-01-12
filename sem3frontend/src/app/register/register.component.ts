import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from '../Services/user-service.service';

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

  constructor(private userService: UserServiceService){

  }
}
