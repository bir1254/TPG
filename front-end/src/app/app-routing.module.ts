import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CourseComponent } from './course/course.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './student/login/login.component';
import { RegisterComponent } from './student/register/register.component';


const routes: Routes = [

 {path: "home", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  { path:"login" ,component:LoginComponent},
  {path:"course", component:CourseComponent},
  {path:"help", component:HelpComponent},
  {path:"aboutus",component:AboutusComponent},
  { path :"", redirectTo:"/home", pathMatch:"full"}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
