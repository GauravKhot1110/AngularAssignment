import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NotificationService } from '@app/notification/notification.service';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-my-blogs',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyBlogsComponent {

  CreateBlogData : any ={};
  flag: boolean = false
  dtOptions: any = {};

  constructor(private fb: FormBuilder, private userServices: UserService, private notifyService: NotificationService) { this.bindMyPost();}

  bindMyPost(){
    debugger
    this.userServices.GetMyBlog('blog/getmyblog?CreateBy='+localStorage.getItem("LoginUserId"))
    .subscribe((res: any)=>{
      console.log('response...'+JSON.stringify(res));
      if(res){
        this.CreateBlogData=res;
        this.flag = true;
      }
      else{
        this.notifyService.showError(res, "");
      }
    })

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'print'
        ]
    };
  }

  ViewBlogDetails(UserId:any){

  }
}
