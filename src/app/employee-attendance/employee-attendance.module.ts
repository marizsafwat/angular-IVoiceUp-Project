import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeAttendanceComponent],
  imports: [CommonModule, FormsModule],
})
export class EmployeeAttendanceModule {}
