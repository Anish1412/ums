import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  ForgotPassword : FormGroup = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email])
  })

  onSubmit(){
    console.log(this.ForgotPassword.value);
  }
}
