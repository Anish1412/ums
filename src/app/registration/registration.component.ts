import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { UmsService } from '../services/ums.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  register : FormGroup = new FormGroup({
    fname : new FormControl('',[Validators.required]),
    lname : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required,Validators.email]),
    phno : new FormControl('',[Validators.required]),
    dob : new FormControl('',[Validators.required]),
    gender : new FormControl('',[Validators.required]),
    countryId : new FormControl('',[Validators.required]),
    stateId : new FormControl('',[Validators.required]),
    cityId : new FormControl('',[Validators.required])
  })

  constructor(private reg:UmsService){}

  onSubmit(){
    console.log(this.register.value);
  }

  onReset(data : FormGroup){
    data.reset();
  }

  countryId:any;
  getCountries(){
    this.reg.getCountries().subscribe((res)=>this.countryId = res);
  }

  stateId:any
  getStates(id:number){
    this.reg.getStates(id).subscribe((res)=>{
      this.stateId = res;
      console.log(res);
    });
  }

  cityId:any;
  getCities(id:number){
    this.reg.getCities(id).subscribe((res)=>{
      this.cityId = res;
      console.log(res);
    });
  }

  saveUser(){
    this.reg.saveUser(this.register.value).subscribe((res)=>{
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.getCountries();
  }
}
