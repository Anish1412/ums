import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UmsService } from '../services/ums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login : FormGroup = new FormGroup({
    "email" : new FormControl('',[Validators.required,Validators.email]),
    "pwd" : new FormControl('',[Validators.required])
  })

  constructor(private ums:UmsService, private route:Router){}

  onSubmit(){
    console.log(this.login.value);
  }

  loginAcc(){
    this.ums.login(this.login.value).subscribe((res)=>{
      console.log(res);
      if(res == 'SUCCESS'){
        this.route.navigate(['home']);
      }
      else {
        alert(res);
      }
    });
  }
}
