import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessuserComponent } from './accessuser/accessuser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"accessuser",component:AccessuserComponent},
  {path:"userdashboard",component:UserdashboardComponent,children:[
    {path:"userprofile",component:UserprofileComponent}
  ]},
  {path:" ",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
