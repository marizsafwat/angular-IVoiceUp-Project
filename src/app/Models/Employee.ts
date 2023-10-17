import { EmployeeGroup } from './EmployeeGroup';

export interface Employee {
  id?: string | undefined;
  name: string;
  email: string;
  group: EmployeeGroup;
  status?: string | undefined;
  date?: string | undefined;
}
