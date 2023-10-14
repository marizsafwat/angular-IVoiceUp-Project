import { Component, OnInit } from '@angular/core';
import { EmployeeGroup } from 'src/app/Models/EmployeeGroup';
import { EmployeeGroupService } from 'src/app/Services/employee.group.service';

@Component({
  selector: 'app-employee-group',
  templateUrl: './employee-group.component.html',
  styleUrls: ['./employee-group.component.css'],
})
export class EmployeeGroupComponent implements OnInit {
  empGroupName: string = '';
  empGroupList: EmployeeGroup[] = [];

  constructor(private employeeGroupService: EmployeeGroupService) {}

  ngOnInit() {
    this.employeeGroupService.getAllEmployeeGroup().subscribe({
      next: (emp) => {
        console.log(emp);
        this.empGroupList = emp;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
  addGroup() {
    this.employeeGroupService
      .saveNewEmployeeGroup(this.empGroupName)
      .subscribe({
        next: (emp) => {
          console.log(emp);
        },
        error: (err) => {
          console.log(err.message);
        },
      });
    this.empGroupList.push({ id: '0', groupName: this.empGroupName });

    console.log(this.empGroupList);
    this.empGroupName = '';
  }
}
