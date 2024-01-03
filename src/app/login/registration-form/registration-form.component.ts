import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../../shared/models/user.model";
import {LoginService} from "../login.service";
import {RegisterRequest} from "../../shared/models/register-request.model";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(public loginService: LoginService,public authService: AuthService) {}
  ngOnInit(): void {
  }

  onCompletRegistration(registrationForm: NgForm) {
    if (!registrationForm.valid) return;
    let dobDate = new Date(registrationForm.value.dob);
    let dobString = dobDate.toString();

    let registrationUser: User =
      new User(404,
        this.encodeString(registrationForm.value.emailReg),
        this.encodeString(registrationForm.value.passwordReg),
        registrationForm.value.dobYear);

    let registrationRequest = new RegisterRequest(registrationUser,this.authService.authenticatedUser);

    this.loginService.registrationUser(registrationRequest);
    this.loginService.makeWelcomeString();
  }

  encodeString(data: string){
    return btoa(data);
  }
}
