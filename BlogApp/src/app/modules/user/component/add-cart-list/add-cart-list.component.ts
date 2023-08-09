import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/notification/notification.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-cart-list',
  templateUrl: './add-cart-list.component.html',
  styleUrls: ['./add-cart-list.component.css']
})
export class AddCartListComponent implements OnInit {
  ImageList: any;
  imageObject: any = [];
  propertyList: any;
  totalCartCount: number = 0;
  constructor(private userServices: UserService, private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.getCartList()
  }
  getCartList() {
    this.userServices.getCartList().subscribe((res: any) => {
      debugger
      console.log(res);
      this.propertyList = res.data;
      this.totalCartCount = this.propertyList.length;
      console.log('Count', this.totalCartCount);
    }
      ,
      err => {
        this.notifyService.showError(err.error.massage, "");
        console.log(err);
        if (err.status == 400) {
          console.log(err);
        }
      }
    );
  }
  deleteItem(Id: any) {
    debugger
    if (confirm('Are you sure to delete this record ?')) {
      this.userServices.removeItemFromCart(Id).subscribe(
        (data: any) => {

          this.notifyService.showSuccess("Item removed successfully !!", "")
          this.getCartList();
          this.userServices.callComponentMethod(data);

        },
        err => {
          this.notifyService.showError(err.error.massage, "");
          console.log(err);
          if (err.status == 400) {
            console.log(err);
          }
        }
      );
    }
  }
}
