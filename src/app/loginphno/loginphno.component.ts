import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'; // Import SweetAlert
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-loginphno',
  templateUrl: './loginphno.component.html',
  styleUrls: ['./loginphno.component.css']
})
export class LoginphnoComponent implements OnInit{
  loginForm: FormGroup;

  submitted = false;

  loading = false;
  constructor(private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({

      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?\d{8,15}$/)]],

      otp: ['', [Validators.required, Validators.maxLength(4)]]

    });
  }
  onInputChange(event:Event){
    const inputElement=event.target as HTMLInputElement;
    inputElement.value=inputElement.value.replace(/\D/g,'');
  }
  ngOnInit() {

    }

 // Convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

 onSubmit() {
  Swal.fire({
    title: 'Welcome User!'})
    this.submitted = true;
// Stop here if form is invalid

    if (this.loginForm.invalid) {

      return;

    }
// Handle login logic here (send OTP for verification, etc.)

    this.loading = true;
// Simulate OTP verification (replace with your actual logic)

setTimeout(() => {

      this.loading = false;

      alert('OTP verified successfully!');

    }, 2000);

  }

}







 





  
 

 

 

 