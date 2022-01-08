import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { FormsModule } from '@angular/forms';
import { StudentRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    AddNewEmployeeComponent,
    EmployeeTableComponent,
   ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule, SharedModule
  ]
})
export class StudentsModule { }
