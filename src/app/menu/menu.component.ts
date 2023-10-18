import { Component } from '@angular/core';
import { CdrserviceService } from '../cdrservice.service';
import { SessionstorageService } from '../sessionstorage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public service:CdrserviceService,public session :SessionstorageService){

  }
}
