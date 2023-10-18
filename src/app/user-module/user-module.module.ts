import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { MakecallComponent } from './makecall/makecall.component';
import { ViewcallhistoryComponent } from './viewcallhistory/viewcallhistory.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    UserhomeComponent,
    MakecallComponent,
    ViewcallhistoryComponent
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,ReactiveFormsModule,FormsModule,HttpClientModule
  ]
})
export class UserModuleModule { }
