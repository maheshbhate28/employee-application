import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedserviceService } from 'src/app/shared/sharedservice.service';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  employeeData: any[] = [];
  @Output() editEmployee = new EventEmitter<any>();
  constructor(private sharedService: SharedserviceService, private route: Router, private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.getStudentsData();
  }

  getStudentsData(): void {
    this.employeeService.getStudentsData().subscribe((studentsData: any) => {
      this.employeeData = studentsData.studentsData;
    });
  }

  setStudentsData(data: any): void {
    this.employeeData.push(data);
  }

  editStudent(studentData: any): void {
    this.editEmployee.emit(studentData);
  }

  deleteStudent(index: number): void {
    this.employeeData.splice(index, 1);
    alert('Employee data deleted successfully');
  }

}
