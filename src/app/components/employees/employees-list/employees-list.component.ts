import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.models';
import { EmployeesService } from '../../../services/employess.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit{

  employees: Employee[] = [
    // {
    //   id: '34d',
    //   name: 'John Doe',
    //   email: 'j@j.com',
    //   phone: 1234567890,
    //   salary: 50000,
    //   department: 'HR'
    // }
  ];
  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        // console.log(response);
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      }
    })
    }
  
  
  }


