import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './Employee/employee.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class EmployeeModule {}
