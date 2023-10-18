import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcdrComponent } from './viewcdr/viewcdr.component';
import { SearchcdrComponent } from './searchcdr/searchcdr.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
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

const routes: Routes = [{path:'viewcdr',component:ViewcdrComponent},{path:'searchcdr',component:SearchcdrComponent},{path:'adminhome',component:AdminhomeComponent},
{path:'voicecdr',component:VoicecallcdrComponent},{path:'smscdr',component:SmscdrComponent},{path:'voipcdr',component:VoipcdrComponent},{path:'roamingcdr',component:RoamingcdrComponent},
{path:'datacdr',component:DatacdrComponent},{path:'locationcdr',component:LocationcdrComponent},{path:'mmscdr',component:MmscdrComponent},{path:'videocdr',component:VideocdrComponent},{path:'voipconcdr',component:VoipconcdrComponent}
,{path:'tollcdr',component:TollfreecdrComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
