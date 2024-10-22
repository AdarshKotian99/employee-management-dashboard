import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../services/employee.service';

@Pipe({
  name: 'departmentFilter'
})
export class DepartmentFilterPipe implements PipeTransform {

  transform(employees: Employee[],department: string): Employee[] {
    if(!department || department==='All'){
      return employees;  // Return all employees if no department is selected
    }
    return employees.filter(employee => employee.department === department);
  }

}
