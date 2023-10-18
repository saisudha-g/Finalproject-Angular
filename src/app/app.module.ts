import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserModuleModule } from './user-module/user-module.module';
import { UserModuleRoutingModule } from './user-module/user-module-routing.module';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginphnoComponent } from './loginphno/loginphno.component';
import { AdminModuleModule } from './admin-module/admin-module.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    LoginphnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,UserModuleModule,UserModuleRoutingModule,FormsModule,ReactiveFormsModule,AdminModuleModule,HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
