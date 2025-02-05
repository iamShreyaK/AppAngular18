import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeModel1 } from './model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor(){
    this.createFOrm()
  }
  employeeFOrm !: FormGroup;
  empObj : EmployeeModel1=new EmployeeModel1();
  employeeList : EmployeeModel1[]=[];

  createFOrm(){
    this.employeeFOrm = new FormGroup({
      empId : new FormControl(this.empObj.empId),
      empName : new FormControl(this.empObj.empName),
      empCity : new FormControl(this.empObj.empCity),
      empcontactNo : new FormControl(this.empObj.empcontactNo),
      empState : new FormControl(this.empObj.empState),
      empAddress : new FormControl(this.empObj.empAddress),
      empPinccode : new FormControl(this.empObj.empPinccode),
      empMail : new FormControl(this.empObj.empMail)
    })
  }

  onSave(){
    const oldData = localStorage.getItem("EmpData");
    if(oldData!=null){
      const parseData = JSON.parse(oldData);
      this.employeeFOrm.controls['empId'].setValue(parseData.length +1);
      this.employeeList.unshift(this.employeeFOrm.value);
    }
    localStorage.setItem("EmpDate", JSON.stringify(this.employeeList));
  }

  onUpdate(){
    const record = this.employeeList.find(m=> m.empId == this.employeeFOrm.controls['empId'].value);
    if(record!= undefined){
      record.empAddress = this.employeeFOrm.controls['empAddress'].value;
      record.empName = this.employeeFOrm.controls['empName'].value;
      record.empcontactNo = this.employeeFOrm.controls['empcontactNo'].value;
    }
    localStorage.setItem("EmpDate", JSON.stringify(this.employeeList));
    this.empObj = new EmployeeModel1()
  }

  onDelete(){
    
  }
}
