import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean;
  constructor(private userServices: UserService, private router: Router) {
    this.userServices.componentMethodCalled$.subscribe(() => {
      debugger
      this.getcartCount();
    });

  }
  cartQty: number;


  ngOnInit(): void {
    this.isLoggedIn();
    this.getcartCount();

  }
  isLoggedIn() {

    this.isAuthenticated = this.userServices.isLoggedIn();
    if (this.isAuthenticated)
      return true;
    else
      return false;
  }

  onLogOut() {
    this.userServices.onLogOut();
    // this.router.navigate(["property/home"]);
  }

  getcartCount() {
    // let data = JSON.parse(localStorage.getItem("products"));
    //this.cartObj = data;
    this.userServices.getCartCount().subscribe(
      (data: any) => {
        debugger
        this.cartQty = data.data.totalCount;

      },
      err => {
        console.log(err);
        if (err.status == 400) {
          console.log(err);
        }
      }
    );

  }


}
