import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { PropertyDetailsComponent } from './component/property-details/property-details.component';
// import { PropertyListComponent } from './component/property-list/property-list.component';
import { AddCartListComponent } from './component/add-cart-list/add-cart-list.component';
import { UserguardGuard } from 'src/app/user-guard/userguard.guard';
import { LoginComponent } from '../auth/component/login/login.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate: [UserguardGuard],
    children: [

      // {
      //   path: '', redirectTo: 'property', pathMatch: 'full', canActivate: [UserguardGuard]
      // },
      // { path: 'property-list', component: PropertyListComponent, canActivate: [UserguardGuard] },
      //   { path: 'property-list', loadChildren: () => import('./component/property-list/property-list.component').then(m => m.ShopModule) },
      //{ path: 'property/:id', component: PropertyDetailsComponent, canActivate: [UserguardGuard] },
      { path: 'cart-list', component: AddCartListComponent, canActivate: [UserguardGuard] },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
