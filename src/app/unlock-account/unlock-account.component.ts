import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  onSubmit(){
    console.log(this.UnlockAccount.value);
  }
}
