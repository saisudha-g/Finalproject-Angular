import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionstorageService } from 'src/app/sessionstorage.service';


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent  {
  constructor(public session:SessionstorageService,public route:Router){}
  navigatetohome(){
this.route.navigate(['/home'])
  }
}