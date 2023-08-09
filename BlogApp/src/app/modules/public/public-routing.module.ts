import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../auth/component/login/login.component';
import{ CreateBlogComponent } from './create-blog/create-blog.component'
import { RegistrationComponent } from '../user/registration/registration.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { AllBolgsComponent } from './all-bolgs/all-bolgs.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'CreateBlog', component: CreateBlogComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'MyBlogs', component: MyBlogsComponent },
      { path: 'AllBlogs', component: AllBolgsComponent },
      { path: 'DashBoard', component: DashBoardComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
