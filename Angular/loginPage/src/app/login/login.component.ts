import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string = "";
  password: string = "";
  

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }


  login() {
    console.log('Login method called');

    const allUsers = this.userService.getAllUsers();
    console.log('Existing Users:', allUsers);
    // Perform login logic here
    const userDetails = this.userService.getUserDetailsByEmail(this.email);
    if (userDetails && userDetails.password === this.password) {
      // Successful login
      localStorage.setItem('loggedInUser', this.email);
      console.log('valid credentials');
      this.router.navigate(['/profile']);
    } else {
      // Failed login
      console.log('Invalid credentials');
    }
  }

 
  }
