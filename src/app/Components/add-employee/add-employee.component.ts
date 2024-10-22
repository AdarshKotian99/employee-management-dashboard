import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee : Employee = {id: 0, name: '', email: '', department: '', joiningDate: ''};
  constructor(private employeeService:EmployeeService) { }

  addEmployee(form:any): void {
    const employeeToAdd = {
      name: this.employee.name,
      email: this.employee.email,
      department: this.employee.department,
      joiningDate: this.employee.joiningDate
  };

    this.employeeService.addEmployee(employeeToAdd).subscribe(() => { 
      alert('Employee added successfully!');
    });
  }
}
