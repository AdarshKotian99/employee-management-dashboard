import {  Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource } from '@angular/material/table';
import { Employee,EmployeeService } from 'src/app/services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  //@ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string[] = ['name', 'email', 'department', 'joiningDate', 'actions'];
  dataSource = new MatTableDataSource<Employee>();
  selectedDepartment: string = 'All'; // Default to 'All'
  sortedData: Employee[] = [];

  currentSortColumn: string = '';
  currentSortDirection: 'asc' | 'desc' = 'asc';

  constructor(private employeeService : EmployeeService, private dailog : MatDialog) { }

  ngOnInit(): void {
    this.loadEmployees(); //fetching employee data
  }


  loadEmployees():void{
    this.employeeService.getEmployees().subscribe(data => {
      this.dataSource.data = data;
      this.sortedData = data.slice();
    });
  }

  deleteEmployee(id:number):void{
    const dailogRef = this.dailog.open(ConfirmDialogComponent);
    dailogRef.afterClosed().subscribe(result => {
      if(result){
        this.employeeService.deleteEmployee(id).subscribe(()=>{
          this.loadEmployees();
        })
      }
    })
  }

  sortData(column: string): void {
    const data = this.dataSource.data.slice();
    if (this.currentSortColumn === column) {
      this.currentSortDirection = this.currentSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSortDirection = 'asc'; // Default to ascending if a new column is clicked
    }

    this.currentSortColumn = column; 

    this.dataSource.data = data.sort((a, b) => {
      switch (column) {
        case 'name':
          return this.compare(a.name, b.name);
        case 'email':
          return this.compare(a.email, b.email);
        case 'department':
          return this.compare(a.department, b.department);
        case 'joiningDate':
          return this.compare(new Date(a.joiningDate), new Date(b.joiningDate));
        default:
          return 0;
      }
    });
  }

  private compare(a: string | number | Date, b: string | number | Date): number {
    const comparison = (a < b ? -1 : 1);
    return this.currentSortDirection === 'asc' ? comparison : -comparison;
  }

}
