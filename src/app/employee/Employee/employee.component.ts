import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeGroup } from 'src/app/Models/EmployeeGroup';
import { EmployeeGroupService } from 'src/app/Services/employee.group.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employeeList: Employee[] = [];
  editMode: boolean = false;
  editedValues: Employee;
  employeeForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    group: new FormControl('', Validators.required),
  });

  empGroupList: EmployeeGroup[];
  addedEmployee: any;
  selectedGroup: EmployeeGroup = {
    id: '',
    groupName: '',
  };
  constructor(
    private employeeGroupService: EmployeeGroupService,
    private employeeService: EmployeeService
  ) {}
  ngOnInit() {
    this.employeeGroupService.getAllEmployeeGroup().subscribe({
      next: (emp) => {
        this.empGroupList = emp;
        console.log(this.empGroupList);
      },
      error: (err) => {
        console.log(err.message);
      },
    });

    this.employeeService.getAllEmployee().subscribe({
      next: (emp) => {
        console.log(emp);
        this.employeeList = emp;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submitForm() {
    if (this.employeeForm.valid) {
      if (!this.editMode) {
        console.log(this.employeeForm.value);
        this.addedEmployee = {
          name: this.employeeForm.controls['name'].value,
          email: this.employeeForm.controls['email'].value,
          group: {
            id: this.selectedGroup.id,
            groupName: this.selectedGroup.groupName,
          },
        };
        console.log(this.addedEmployee, 'tobesent');
        this.employeeList.push(this.addedEmployee);
        this.employeeService.saveNewEmployee(this.addedEmployee).subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (err) => {
            console.log(err.message);
          },
        });
      } else {
        this.editedValues = {
          //id: this.employeeForm.controls['id'].value,
          name: this.employeeForm.controls['name'].value,
          email: this.employeeForm.controls['email'].value,
          group: {
            id: this.selectedGroup.id,
            groupName: this.selectedGroup.groupName,
          },
        };
        var editedRow = this.employeeList.find(
          (x) => x.id == this.employeeForm.controls['id'].value
        );
        editedRow.name = this.editedValues.name;
        editedRow.email = this.editedValues.email;
        editedRow.group = this.editedValues.group;

        console.log(this.editedValues);
        this.editMode = false;

        this.employeeService
          .updateEmployee(
            this.employeeForm.controls['id'].value,
            this.editedValues
          )
          .subscribe({
            next: (res) => {
              console.log(res);
            },
            error: (err) => {
              console.log(err.meesage);
            },
          });
      }
      this.employeeForm.reset();
    } else {
      alert('fill in the required feilds');
    }
  }

  editEmp(emp: any, i: number) {
    this.editMode = true;
    console.log(emp);
    this.employeeForm.setValue({
      id: emp.id,
      name: emp.name,
      email: emp.email,
      group: emp.group.id,
    });
  }

  deleteEmp(emp, i: number) {
    console.log(emp.id);
    this.employeeService.deleteEmployee(emp.id).subscribe({
      next: (mess) => {
        console.log(mess);
      },
      error: (err) => {
        console.log(err.message);
      },
    });
    this.employeeList.splice(i, 1);
  }

  selectGroup(id) {
    // console.log(group);
    if (id) {
      //   console.log(group);
      //   var splited = group.split(' ');
      //   console.log(splited);
      this.selectedGroup.id = id;
      this.selectedGroup.groupName = this.empGroupList.find(
        (x) => x.id == id
      ).groupName;
      console.log(this.selectedGroup);
    }
  }
}
