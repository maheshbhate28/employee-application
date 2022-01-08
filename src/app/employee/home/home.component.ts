import { Component, OnInit, ViewChild } from '@angular/core';
import { AddNewEmployeeComponent } from '../add-new-employee/add-new-employee.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
@ViewChild(EmployeeTableComponent, {static: false}) tableComponent: EmployeeTableComponent;
@ViewChild(AddNewEmployeeComponent, {static: false}) addEmployeeComponent: AddNewEmployeeComponent;
  constructor() { }

  ngOnInit(): void {
  }

  setStudentData(studentData: any) {
    this.tableComponent.setStudentsData(studentData);
  }

  editEmployee(employeeData: any) {
    this.addEmployeeComponent.editEmployee(employeeData);
  }

}
