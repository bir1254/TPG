import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../models/student.model';
import { StudentService} from "../services/student.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
   
  loginModel:any={email:"",password:"" };
  
  loginData:any={};
  studentData:any=[];
  constructor(private studentService:StudentService,
    private router:Router
    ) {
    let studentData=this.studentService.getStudentData().subscribe(data=>{
     // console.log(data);
    })
   }

    loginForm(){
     //console.log(this.loginModel);
     let loginData=this.studentService.loginForm(this.loginModel).subscribe(data => {
      //console.log(data);
      this.loginData=data;
      
        })
  }

  @Input() l=this.loginData;
  

 

}

