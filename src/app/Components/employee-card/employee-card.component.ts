import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {
  @Input() employee!:Employee;     // Accept employee data as input

}
