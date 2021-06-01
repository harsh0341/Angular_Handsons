import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User[]=[{id:1001,name:"Test1",email:"test1@gmail.com",phoneNumber:"9899123456"},
  {id:1002,name:"Test2",email:"test2@gmail.com",phoneNumber:"9899223456"},
  {id:1003,name:"Test3",email:"test3@gmail.com",phoneNumber:"9899323456"},
  {id:1004,name:"Test4",email:"test4@gmail.com",phoneNumber:"9899423456"}
]
  constructor() { }
  public getUser(){
    return this.user;
  }
  /**
   * getSingleUser
   */
  public getSingleUser(id:number) {
    for(let users of this.user){
      if(users.id==id)
        return users;
    }
    return undefined;
  }
}
