import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
//import { EditStudentsComponent } from './edit-students/edit-students.component';
import { HomeComponent } from './home/home.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
  //{ path: 'details', component: EditStudentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class StudentRoutingModule { }
