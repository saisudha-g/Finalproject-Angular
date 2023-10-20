import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionstorageService {

  private log:boolean=false
  
  constructor(private router:Router) { }

  setItem(key:string,value:any): void {

    sessionStorage.setItem(key,JSON.stringify(value));

  }

 

  getItem(key:string): any{

    const storedvalue = sessionStorage.getItem(key);

    return storedvalue ? JSON.parse(storedvalue) : null;

  }

 

  removeItem(key:string): void {

    sessionStorage.removeItem(key);

  }

 

  loginValidity(email:any,password:any)

  {

    if(email=='admin@prodapt.com' && password == 'admin@123')

    {

      this.log=true;
      this.setItem('email','password');
      return "true1";

    }
  else if(email=='user@gmail.com' && password == 'user@123'){
    this.log=true;
    this.setItem('email','password');
    return "true2";
  }
    
    else{
      return"false"
    }

 

  }

 

  islogined(): boolean

  {

    return !!this.getCurrentUser();

  }

 

  getCurrentUser(): any{

    return this.getItem('email');

  }

 

  logout():any{

    this.removeItem('email');

    this.router.navigateByUrl("/home");

  }

}