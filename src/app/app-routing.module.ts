import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginphnoComponent } from './loginphno/loginphno.component';
import { ViewcdrComponent } from './admin-module/viewcdr/viewcdr.component';

const routes: Routes = [
  {path:'login',
  component:LoginComponent},
  {path:'loginphno',
  component:LoginphnoComponent},
{path:'register',
component:RegisterComponent},
{path:'home',
component:HomeComponent},
{path:'',
component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
