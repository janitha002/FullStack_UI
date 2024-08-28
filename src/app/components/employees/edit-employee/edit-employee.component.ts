import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../../services/employess.service';
import { Employee } from '../../../models/employee.models';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.employeesService.getemployee(id)
            .subscribe({
              next: (response) => {
                this.employeeDetails = response;
              }
            });
        }
      }
    });
  }

  updateEmployee() {
    this.employeesService.updateEmployee(this.employeeDetails.id, this.employeeDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['employees']);
        }
      });
  }

  deleteEmployee(id: string) {
    this.employeesService.deleteEmployee(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    })
  }
}
