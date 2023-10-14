import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeGroupComponent } from './employee-group/employee-group.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeGroupComponent],
  imports: [CommonModule, FormsModule],
})
export class EmployeeGroupModule {}
