import { EmployeeGroup } from './EmployeeGroup';

export interface Employee {
  id?: string ;
  name: string;
  email: string ;
  group: EmployeeGroup;
  status?: string | undefined;
  date?: string | undefined;
}
