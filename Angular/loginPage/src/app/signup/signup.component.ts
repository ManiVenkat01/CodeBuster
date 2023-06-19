import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  firstName: string = "";
  lastName: string= "";
  email: string= "";
  password: string= "";
  phone: any= "";
  // dob: Date= 2019-01-16;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  signup() {
// Perform signup logic here
const userDetails = {
  firstName: this.firstName,
  lastName: this.lastName,
  email: this.email,
  password: this.password,
  phone: this.phone
};  
this.userService.addUser(userDetails);
console.log('Signed up with details:', userDetails);
this.router.navigateByUrl('/login');
  }

}
