import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.css'],
})
export class EmployeeAttendanceComponent implements OnInit {
  employeeList: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}
  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe({
      next: (res) => {
        this.employeeList = res;
        console.log(this.employeeList);
      },
    });
  }

  saveChanges(emp: any) {
    console.log(emp);
    var id = emp.id;
    var sentEmp = {
      name: emp.name,
      email: emp.email,
      group: {
        id: emp.group.id,
        groupName:emp.group.groupName,
      },
      date: emp.date,
      status:emp.status
    };
    this.employeeService.updateEmployee(id, sentEmp).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
}
