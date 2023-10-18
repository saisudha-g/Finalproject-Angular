import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CdrserviceService } from '../cdrservice.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2'; // Import SweetAlert
import { register } from '../Entity/Register';
import { SessionstorageService } from '../sessionstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
 reg:register;
  searchlist:any;

  temp:string=''
constructor(private router:Router,public service:CdrserviceService,private fb: FormBuilder,public session:SessionstorageService){
  this.reg=new register('','','','','','');
  this. loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          // Validators.pattern(/^(?=[a-zA-Z])(?=.*[0-9a-zA-Z&_*]).*$/),
        ]]});
}
ngOnInit(): void {
   
}
  



onLoginSuccess(){
  this.temp=this.session.loginValidity(this.loginForm.value.email,this.loginForm.value.password)
  
  if(this.temp=="true1"){

  this.router.navigate(['/adminhome'])
  Swal.fire({
    title: 'Welcome Admin!',
    icon:'success'})
  }
  else if(this.temp=="true2"){
    this.router.navigate(['/userhome'])
  Swal.fire({
    title: 'Welcome User!',
    icon:'success'})
  }
  else{
    Swal.fire({
      title: 'user not permitted!',
      icon:'error'})
    }
  }
  }
  
  
  




  // this.reg.email=this.loginForm.get('email')?.value;
  // this.reg.password=this.loginForm.get('password')?.value;

  // if(this.loginForm.valid){
  // const email=this.loginForm.get('email')?.value;
  // const password=this.loginForm.get('password')?.value;
  // if(email=='admin@gmail.com'&&password=='admin@123'){
  //   Swal.fire({
  //     title: 'Welcome Admin!'})
  //   this.service.validation=true
  //   // this.service.validation1=true
  //   this.router.navigate(['/adminhome'])
  // }else{
  //   Swal.fire({
  //     title: 'Welcome User!'})
  //   this.service.validation=true
  //   this.router.navigate(['/userhome'])
  











// if(this.loginForm.valid){
//   const email=this.loginForm.get('email')?.value;
//   const password=this.loginForm.get('password')?.value;
//   if(email=='admin@gmail.com'&&password=='admin@123'){
//     Swal.fire({
//       title: 'Welcome Admin!'})
//     this.service.validation=true
//     // this.service.validation1=true
//     this.router.navigate(['/adminhome'])
//   }else{
//     Swal.fire({
//       title: 'Welcome User!'})
//     this.service.validation=true
//     this.router.navigate(['/userhome'])
//   }


