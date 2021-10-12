import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent=Student;

  constructor(private http: HttpClient) { }

  getStudentData(): Observable<any> {
    return this.http.get("/studentdata");
  }

  insertData(data: any) {
    return this.http.post("/register", data);
  }

  loginForm(data:any){
    return this.http.post("/stlogin",data);
  }

}
