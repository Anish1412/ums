import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UmsService } from '../services/ums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {
  UnlockAccount : FormGroup = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    tempPwd : new FormControl('',[Validators.required]),
    newPwd : new FormControl('',[Validators.required]),
    confirmPwd : new FormControl('',[Validators.required])
  })

  constructor(private ums:UmsService, private route:Router){}

  onSubmit(){
    console.log(this.UnlockAccount.value);
  }

  unlockUserAccount(){
    this.ums.unlockUserAccount(this.UnlockAccount.value).subscribe((res)=>console.log(res));
    this.route.navigate(['login']);
  }
}
