import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // matcher: FormErrorStateMatcher;
  loginForm: FormGroup;
  isLoginInitiated = false;
  hide = true;
  returnUrl: any;
}
