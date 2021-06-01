import {Employee} from './employee';
class EmployeeTest{
    employee:Employee;
    
    constructor(test: Employee){
        
        this.employee=test;
    }
}


function display(){
    let test:Employee;
    test={id:1,
        name:"Harsh",salary:10000,permanent:true,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]
    }
    let emp:EmployeeTest=new EmployeeTest(test);
    console.log(emp);
    document.getElementById('showData').innerHTML=JSON.stringify(emp);
    console.log("Success");
}