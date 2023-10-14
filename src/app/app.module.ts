import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeGroupComponent } from './employee-group/employee-group/employee-group.component';
import { EmployeeComponent } from './employee/Employee/employee.component';
import { EmployeeGroupModule } from './employee-group/employee-group.module';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeAttendanceModule } from './employee-attendance/employee-attendance.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './Services/auth.guard';
import { AuthService } from './Services/auth.service';
import { EmployeeGroupService } from './Services/employee.group.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    EmployeeGroupModule,
    EmployeeModule,
    EmployeeAttendanceModule,
    LoginModule,
    HomeModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, AuthService, EmployeeGroupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
