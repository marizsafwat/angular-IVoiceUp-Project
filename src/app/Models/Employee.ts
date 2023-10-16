import { EmployeeGroup } from './EmployeeGroup';

export class Employee {
  id?: string | undefined;
  name?: string | undefined;
  email?: string | undefined;
  group?: EmployeeGroup | undefined;
  status?: string | undefined;
  date?: string | undefined;
}
