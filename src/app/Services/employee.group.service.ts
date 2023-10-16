import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmployeeGroup } from '../Models/EmployeeGroup';

@Injectable({
  providedIn: 'root',
})
export class EmployeeGroupService {
  basicUrl: string = environment.basicUrl;

  constructor(private http: HttpClient) {}

  getAllEmployeeGroup() {
    return this.http.get<EmployeeGroup[]>(this.basicUrl + '/api/EmployeeGroup');
  }

  saveNewEmployeeGroup(group: string) {
    console.log(group);
    return this.http.post<string>(
      this.basicUrl + '/api/EmployeeGroup',
      { groupName: group },

      {
        responseType: 'text' as 'json',
      }
    );
  }

  deleteGroup(id: string) {
    return this.http.delete<string>(
      this.basicUrl + '/api/EmployeeGroup/'+ id,
      {
        responseType: 'text' as 'json',
      }
    );
  }
}
