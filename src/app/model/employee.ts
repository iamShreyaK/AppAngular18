export class EmployeeModel1{
    empId : number;
    empName : string;
    empCity : string;
    empState : string;
    empcontactNo : string;
    empAddress : string; 
    empPinccode : string;
    empMail : string;

    constructor(){
        this.empId = 0;
        this.empAddress='';
        this.empCity = '';
        this.empState = '';
        this.empcontactNo = '';
        this.empName = '';
        this.empPinccode = '';
        this.empMail ='';
    }
}