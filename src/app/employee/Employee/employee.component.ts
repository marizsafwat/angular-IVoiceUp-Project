import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/Models/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employeeList: Employee[] = [];
  editMode: boolean = false;
  editedValues: any;
  employeeForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    group: new FormControl(),
  });
  submitForm() {
    if (!this.editMode) {
      console.log(this.employeeForm.value);
      this.employeeList.push(this.employeeForm.value);
    } else {
      this.editedValues = this.employeeForm.value;
      this.employeeList[this.editedValues.id].name = this.editedValues.name;
      this.employeeList[this.editedValues.id].email = this.editedValues.email;
      this.employeeList[this.editedValues.id].group = this.editedValues.group;
    }
    this.employeeForm.reset();
  }

  editEmp(emp: any, i: number) {
    this.editMode = true;
    this.employeeForm.setValue({
      id: i,
      name: emp.name,
      email: emp.email,
      group: emp.group,
    });
  }

  deleteEmp(i: number) {
    this.employeeList.splice(i, 1);
  }
}
