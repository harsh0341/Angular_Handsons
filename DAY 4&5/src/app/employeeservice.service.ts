import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  employee:Employee[]=[{id:1,
    name:"Itachi",salary:10000,permanent:true,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]},{id:2,
      name:"TOM",salary:18900,permanent:false,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]},{id:3,
        name:"Duke",salary:17500,permanent:false,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]},{id:4,
          name:"Kate",salary:12200,permanent:true,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]},{id:5,
            name:"Charlie",salary:90000,permanent:false,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]},{id:6,
              name:"Kakashi",salary:80000,permanent:true,department:{id:1,name:"payroll"},Skills:[{id:1,name:"Html"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]}]
  constructor() { }
  public getEmployees(){
    return this.employee;
  }
  public searchEmployee(data:string){
    for(let emp of this.employee){
      if(emp.name.startsWith(data)){
        return emp;
      }
    }
    return null;
  }
}
