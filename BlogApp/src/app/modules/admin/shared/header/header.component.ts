import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/Helper/constants';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;


  ngOnInit(): void {
    this.getName();
  }

  constructor(private router: Router, private userServices: UserService) {
    this.username = "";
    console.log('header');

  }

  onLogOut() {
    this.userServices.onLogOut();
  }
  getName() {

    let userInfo = this.userServices.getUserInfo();

    // let user=JSON.parse(localStorage.getItem(Constants.USER_KEY));
    this.username = userInfo?.username;
  }
}
