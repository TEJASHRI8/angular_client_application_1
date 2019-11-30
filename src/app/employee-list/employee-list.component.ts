import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee:any;
  constructor(private service:EmployeeService) { }

  ngOnInit() {
   let observableResult=this.service.getEmployee();
    observableResult.subscribe((result)=>{
      console.log(result);
      this.employee=result;
    });

  }

}
