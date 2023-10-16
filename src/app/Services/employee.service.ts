import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  basicUrl: string = environment.basicUrl;

  constructor(private http: HttpClient) {}

  getAllEmployee() {
    return this.http.get<Employee[]>(this.basicUrl + '/api/Employee');
  }

  saveNewEmployee(emp: Employee) {
    console.log(emp);
    return this.http.post<Employee>(
      this.basicUrl + '/api/Employee',
      {
        name: emp.name,
        email: emp.email,
        group: {
          id: emp.group.id,
          groupName: emp.group.groupName,
        },
      },

      {
        responseType: 'text' as 'json',
      }
    );
  }

  updateEmployee(id: string, emp: Employee) {
    return this.http.put<Employee>(this.basicUrl + '/api/Employee/' + id, emp, {
      responseType: 'text' as 'json',
    });
  }

  deleteEmployee(id: string) {
    return this.http.delete<string>(this.basicUrl + '/api/Employee/' + id, {
      responseType: 'text' as 'json',
    });
  }
}
