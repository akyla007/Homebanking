import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required])!;
  password2 = new FormControl('', [Validators.required])!;
  iconModel = [
    {
      icon: 'sentiment_very_dissatisfied',
      color: 'red',
    },
    {
      icon: 'sentiment_dissatisfied',
      color: 'yellow',
    },
    {
      icon: 'sentiment_very_satisfied',
      color: 'green',
    },
  ];
  iconColor = ''

  PasswordIcon() {
    if (this.password.value?.length! <= 4) {
      this.iconColor = this.iconModel[0].color
      return this.iconModel[0].icon;
    }
    if (this.password.value?.length! <= 7 && this.password.value?.length! > 4) {
      this.iconColor = this.iconModel[1].color
      return this.iconModel[1].icon;
    }
    if (this.password.value?.length! > 7) {
      this.iconColor = this.iconModel[2].color
      return this.iconModel[2].icon;
    }
    return '';
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  passwordVerify(){
    if(this.password.value === this.password2.value){
      return false
    }
    else{
      return true
    }
  }
}
