import { Component, inject } from '@angular/core';
import { EmpApiService } from '../shared/emp-api.service';
import Employee from '../interfaces/employee';

@Component({
  imports: [],
  selector: 'app-employee',
  styleUrl: './employee.component.css',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent {

  empService = inject(EmpApiService)
  
  empList!: Employee[] 

  ngOnInit() {
    let data = this.empService.getEmployees()
    console.log(data)
    this.empList = this.empService.getEmployees()

  }
}
