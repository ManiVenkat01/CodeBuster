import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  userDetails: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Get the user details from the UserService
    // const userEmail: string | null = localStorage.getItem('loggedInUser');
    // if (userEmail) {
    //   this.userDetails = this.userService.getUserDetailsByEmail(userEmail);
    // }
    const loggedInUser: string | null = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.userDetails = this.userService.getUserDetailsByEmail(loggedInUser);
    }
  }
}
