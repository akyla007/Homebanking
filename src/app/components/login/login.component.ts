import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  constructor(private _router: Router) {}

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  loginData = {
    email: '',
    password: '',
  };
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Campo não pode estar vazio';
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
  }
  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'A senha não pode estar vazia';
    }

    return '';
  }

  submitValidator() {
    if (this.getEmailErrorMessage() || this.getPasswordErrorMessage()) {
      return true;
    }

    return false;
  }

  Submit() {
    alert('Login realizado com sucesso!');
    this._router.navigate([`/home/${this.loginData.email}`]);
    return console.log(this.loginData.email, this.loginData.password);
  }
}
