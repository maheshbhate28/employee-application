import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-employee.component.html',
  styleUrls: ['./add-new-employee.component.scss']
})
export class AddNewEmployeeComponent implements OnInit {
@Output() setStudentData = new EventEmitter<any>();
phoneNumber: number;
empFirstName: string;
empLastName: string;
empLastEmail: string;
status:string;
empNumber:string;
  constructor() { }

  ngOnInit(): void {
  }

  addNewStudent(): void {
    const studentData: any = {};
    studentData.empNumber=this.empNumber;
    studentData.empFirstName = this.empFirstName;
    studentData.empLastName = this.empLastName;
    studentData.empLastEmail = this.empLastEmail;
    studentData.phoneNumber = this.phoneNumber;
    studentData.status = this.status;
    this.setStudentData.emit(studentData);
    this.clearData();
  }

  clearData(): void {
    this.empFirstName = '';
    this.empLastName = '';
    this.empLastEmail = '';
    this.status='';
    this.empNumber='';
    this.phoneNumber = null;
  }

  isAddnewDisabled(): boolean {
    let isDisabled = false;
    if (!this.empLastEmail || !this.empFirstName  || !this.empLastName|| !this.phoneNumber|| !this.status ) {
      isDisabled = true;
    }
    return isDisabled;
  }

  editEmployee(employeeData: any) {
    this.empFirstName = employeeData.empFirstName;
    this.empLastName = employeeData.empLastName;
    this.empLastEmail = employeeData.empLastEmail;
    this.status=employeeData.status;
    this.phoneNumber = employeeData.phoneNumber;
  }

}
