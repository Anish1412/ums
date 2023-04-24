import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UmsService {

  constructor(private ums:HttpClient) { }

  baseUrl:string = `http://15.206.171.20:9090`

  // Login
  login(body:any){
    return this.ums.post(`${this.baseUrl}/login`,body);
  }

  // Registrtion
  getCountries(){
    return this.ums.get(`${this.baseUrl}/countries`);
  }
  
  getStates(id:number){
    return this.ums.get(`${this.baseUrl}/states/${id}`);
  }

  getCities(id:number){
    return this.ums.get(`${this.baseUrl}/cities/${id}`);
  }

  uniqueEmailCheck(email:string){
    return this.ums.get(`${this.baseUrl}/emailcheck/${email}`);
  }

  saveUser(body:any){
    return this.ums.post(`${this.baseUrl}/saveUser`,body,{ responseType : 'text'});
  }

  // UnlockAccount
  unlockUserAccount(body:any){
    return this.ums.post(`${this.baseUrl}/unlock`,body);
  }

  // ForgotPassword
  forgotPwd(email:string){
    return this.ums.get(`${this.baseUrl}/forgotPwd/${email}`);
  }
}
