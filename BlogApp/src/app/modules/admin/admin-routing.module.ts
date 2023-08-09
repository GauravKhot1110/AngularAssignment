import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from 'src/app/guards/auth.service';

import { HomeComponent } from './component/home/home.component';
import { AdminRouteConfige } from './admin-route-confige';
//import { EnquiryListComponent } from './component/enquiry-list/enquiry-list.component';
const routes: Routes = [{
  //path: AdminRouteConfige.adminPparent, component: DashboardComponent, canActivate: [AuthService],
  children: [

    { path: AdminRouteConfige.adminHome, component: HomeComponent, canActivate: [AuthService] },

   
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
