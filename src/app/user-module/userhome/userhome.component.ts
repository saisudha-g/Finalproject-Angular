import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CdrserviceService } from 'src/app/cdrservice.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {

  constructor(public service:CdrserviceService,private router:Router){
    
  }
  onsuccess1(){
    console.log("hi");
    // this.service.validation=true
    this.router.navigate(['/makecall'])
    }
  onsuccess2(){
    
      // this.service.validation=true
      this.router.navigate(['/viewcall'])
      }

}
