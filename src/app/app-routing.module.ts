import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { register } from 'module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"",
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
