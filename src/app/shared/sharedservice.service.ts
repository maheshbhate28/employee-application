import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
studentsData: any ={};
  constructor() { }

  setStudentsObject(studentData: any) {
    this.studentsData = studentData;
  }

  getStudentsObject() {
    return this.studentsData
  }
}
