import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/Employee/employee.component';
import { EmployeeGroupComponent } from './employee-group/employee-group/employee-group.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance/employee-attendance.component';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'employeeGroup',
        component: EmployeeGroupComponent,
      },
      {
        path: 'employeeAttendance',
        component: EmployeeAttendanceComponent,
      },
    ],
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
