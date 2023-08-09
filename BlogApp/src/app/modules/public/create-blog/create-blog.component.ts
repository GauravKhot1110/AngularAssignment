import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { NotificationService } from "src/app/notification/notification.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent { 
  submitted = false;
  isWorking = false;
  constructor(private fb: FormBuilder, private userServices: UserService, private notifyService: NotificationService) { }
  ngOnInit(): void {
    
  }

  uploadFile: any;
  uploadFileLabel: string | undefined = 'Choose an image to upload';
 
  handleFileInput(files: FileList) {
    if (files.length > 0) {
      this.uploadFile = files.item(0);
      this.uploadFileLabel = this.uploadFile?.name;
    }
  }

  AddBlogForm = new FormGroup(
    {
      Title: new FormControl(null, Validators.compose([
        Validators.required
      ])),
      Details: new FormControl(null, Validators.compose([
        Validators.required
      ])),     
      
    },
    
  );

  public handleError = (controlName: string, errorName: string) => {
    return this.AddBlogForm.controls[controlName].hasError(errorName);
  };
  
  // convenience getter for easy access to form controls
  get f() {
    return this.AddBlogForm.controls;
  }

  formData = new FormData();
  working = false;
  OnCreate() {
    if (!this.uploadFile) {
      alert('Choose a file to upload first');
      return;
    }
    debugger;
    let Blogtitle = this.AddBlogForm.controls["Title"].value;
    let BlogDetails = this.AddBlogForm.controls["Details"].value;
   
    console.log(Blogtitle, BlogDetails);

    this.submitted = true;

    

    this.isWorking = true;
    this.AddBlogForm.disable();


    
    this.formData.append(this.uploadFile.name, this.uploadFile);
    this.working = true;
     this.userServices.CreateBlog('blog/create',Blogtitle,BlogDetails,this.formData)
      .subscribe((res: any)=>{
        console.log('response...'+JSON.stringify(res));
        if(res.status === "Success"){
          this.notifyService.showSuccess(res.message, "");
        }
        else{
          this.notifyService.showError(res.message, "");
        }
      
       })
   
    this.isWorking = false;
    this.AddBlogForm.enable();
  }


}
