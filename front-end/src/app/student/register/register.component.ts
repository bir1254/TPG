import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
//import services
import { StudentService } from "../services/student.service";
//models
import { Student } from "../models/student.model";
import { Router } from '@angular/router';

import { from } from 'rxjs';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  stData: any = [];
  selectedStudent=Student;
  student = new Student();
  showMsg: boolean = false;

  constructor(private studentService: StudentService,
    private router:Router) {
    this.getData();
  }
  getData() {

    let stData = this.studentService.getStudentData().subscribe(data => {
      this.stData = data;
      console.log(data);


    })
  }

  insertData() {
    //console.log(this.studentSchema);
    this.studentService.insertData(this.student).subscribe(data => {
     console.log(data);
     //this.router.navigate(["/home"]);
    this.showMsg= true;
    })
  }
  




}
