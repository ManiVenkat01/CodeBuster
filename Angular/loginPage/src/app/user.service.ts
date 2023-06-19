import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }
private users: any[] = [];

addUser(user: any) {
  this.users.push(user);
  console.log('User added:', user);
}

getUserDetailsByEmail(email: string) {
  console.log('getUserDetailsByEmail method called with email:', email);
  
  return this.users.find(user => user.email === email);
}
getAllUsers() {
  return this.users;
}

}
