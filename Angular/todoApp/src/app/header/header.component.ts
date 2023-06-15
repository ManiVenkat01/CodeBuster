import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logintext: string = 'Login';
  constructor() { }

  ngOnInit() {
  }


  loginButtonText(){
    this.logintext = (this.logintext === 'Login'? 'Logout': 'Login');
  }

}
