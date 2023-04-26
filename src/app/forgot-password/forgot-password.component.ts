import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UmsService } from '../services/ums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  ForgotPassword : FormGroup = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email])
  })

  constructor(private ums:UmsService, private route:Router) {}

  onSubmit(){
    console.log(this.ForgotPassword.value);
  }

  forgotPwd(){
    this.ums.forgotPwd(this.ForgotPassword.value.email).subscribe((res)=>{
      alert(res+', Now you can Sign-in again!!');
      this.route.navigate(['login']);
    });
  }
}
