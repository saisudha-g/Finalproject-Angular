import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // Import SweetAlert
import { register } from '../Entity/Register';
import { CdrserviceService } from '../cdrservice.service';
import { plan } from '../Entity/plan';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  plans:string[];
  reg:register;
  submitted=false;
  find:any=''
  searchlist: any;

  constructor(private fb: FormBuilder,private router:Router,public service:CdrserviceService) {
    this.plans=plan;
    this.reg=new register('','','','','','');

    
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(7)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(9),
        //  Validators.pattern(/^(?=[a-zA-Z])(?=.*[0-9a-zA-Z&_*]).*$/),
        ],
      ],
      plan: ['',[ Validators.required]],
    });
   }

 

  ngOnInit(): void {
   
  }

  

  onSubmit() {
    this.reg.phoneNumber=this.registrationForm.get('phoneNumber')?.value;
    this.searchlist=this.service.findphno(this.reg.phoneNumber).subscribe((e: any)=>{
      if(Array.isArray(e))
      {
      console.log(e);
      this.searchlist=e;
      console.log(this.searchlist);
      console.log(this.searchlist.length);
      if(this.searchlist.length>0){
        Swal.fire({
          title: 'Already have an Account',
          icon: 'error',
          showCancelButton: true,
          
        })
      }
      else{
        
    this.reg.name=this.registrationForm.get('name')?.value;
    this.reg.address=this.registrationForm.get('address')?.value;
    this.reg.email=this.registrationForm.get('email')?.value;
    this.reg.password=this.registrationForm.get('password')?.value;
    this.reg.phoneNumber=this.registrationForm.get('phoneNumber')?.value;
    this.reg.plan=this.registrationForm.get('plan')?.value;

    this.service.create(this.reg).subscribe();
    Swal.fire({
      title: 'Registration Successful!',
      text: 'How would you like to log in?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Login with Email ID',
      cancelButtonText: 'Login with Phone Number',
    }).then((result) => {
      if (result.value) {
        // User clicked "Login with Email ID"
        this.loginWithEmail();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // User clicked "Login with Phone Number"
        this.loginWithPhoneNumber();
      }
    });

      }
      
    }})}

    
    
  


    loginWithEmail() {
      // Implement your logic for email login here
      this.router.navigate(['/login'])
      Swal.fire('Login with Email ID', 'Redirecting to email login page...', 'success');
    }
  
   
  
    // Function to handle "Login with Phone Number" action
    loginWithPhoneNumber() {
      // Implement your logic for phone number login here
      this.router.navigate(['/loginphno'])
      Swal.fire('Login with Phone Number', 'Redirecting to phone number login page...', 'success');
    }
  }




  // this.reg.name=this.registrationForm.get('name')?.value;
  //   this.reg.address=this.registrationForm.get('address')?.value;
  //   this.reg.email=this.registrationForm.get('email')?.value;
  //   this.reg.password=this.registrationForm.get('password')?.value;
  //   this.reg.phoneNumber=this.registrationForm.get('phoneNumber')?.value;

  //   this.reg.plan=this.registrationForm.get('plan')?.value;
  //   console.log(this.reg.name);

    // this.service.findphno(this.find).subscribe((e: any)=>{if(Array.isArray(e))
  // if(this.searchlist.length>0){
  //   Swal.fire({
  //     title: 'Already have an Account',
  //     icon: 'error',
  //     showCancelButton: true,
      
  //   })
  // }else{
  //     this.service.create(this.reg).subscribe();
  //     Swal.fire({
  //       title: 'Registration Successful!',
  //       text: 'How would you like to log in?',
  //       icon: 'success',
  //       showCancelButton: true,
  //       confirmButtonText: 'Login with Email ID',
  //       cancelButtonText: 'Login with Phone Number',
  //     }).then((result) => {
  //       if (result.value) {
  //         // User clicked "Login with Email ID"
  //         this.loginWithEmail();
  //       } else if (result.dismiss === Swal.DismissReason.cancel) {
  //         // User clicked "Login with Phone Number"
  //         this.loginWithPhoneNumber();
  //       }
  //     });
  //       // Handle registration form submission here
  //       //this.router.navigate(['/login'])
  //       console.log(this.registrationForm.value);
  //     }}
