import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';
import { MakecallComponent } from './makecall/makecall.component';
import { ViewcallhistoryComponent } from './viewcallhistory/viewcallhistory.component';

const routes: Routes = [{path:'userhome',component:UserhomeComponent},{path:'makecall',component:MakecallComponent},{path:'viewcall',component:ViewcallhistoryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
