import { Component } from '@angular/core';
import { EmployeeAttendance } from 'src/app/Models/EmployeeAttendance';

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.css'],
})
export class EmployeeAttendanceComponent {
  employeeList: EmployeeAttendance[] = [
    {
      id: '51',
      name: 'mariz',
      email: 'mm@gmail.com',
      group: 'a',
      status: '',
      date: '',
    },
    {
      id: '420',
      name: 'zoza',
      email: 'zz@gmail.com',
      group: 'b',
      status: '',
      date: '',
    },
  ];

  saveChanges(emp: any) {
    console.log(emp);
  }
}
