import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
    console.log(this.loginForm.value.email, this.loginForm.value.password);
  }

  signIn(): any {
    this.auth.signIn(this.loginForm.value.email,
      this.loginForm.value.password);
  }

  createAccount(): any {
    this.auth.signUp(this.loginForm.value.email,
      this.loginForm.value.password);
  }

}
