import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { ViewcdrComponent } from './viewcdr/viewcdr.component';
import { SearchcdrComponent } from './searchcdr/searchcdr.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { VoicecallcdrComponent } from './voicecallcdr/voicecallcdr.component';
import { SmscdrComponent } from './smscdr/smscdr.component';
import { VoipcdrComponent } from './voipcdr/voipcdr.component';
import { RoamingcdrComponent } from './roamingcdr/roamingcdr.component';
import { DatacdrComponent } from './datacdr/datacdr.component';
import { LocationcdrComponent } from './locationcdr/locationcdr.component';
import { MmscdrComponent } from './mmscdr/mmscdr.component';
import { VideocdrComponent } from './videocdr/videocdr.component';
import { VoipconcdrComponent } from './voipconcdr/voipconcdr.component';
import { TollfreecdrComponent } from './tollfreecdr/tollfreecdr.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    ViewcdrComponent,
    SearchcdrComponent,
    AdminhomeComponent,
    VoicecallcdrComponent,
    SmscdrComponent,
    VoipcdrComponent,
    RoamingcdrComponent,
    DatacdrComponent,
    LocationcdrComponent,
    MmscdrComponent,
    VideocdrComponent,
    VoipconcdrComponent,
    TollfreecdrComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule,DataTablesModule
  ]
})
export class AdminModuleModule { }
