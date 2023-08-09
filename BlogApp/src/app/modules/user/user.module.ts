import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './component/home/home.component';
//import { PropertyDetailsComponent } from './component/property-details/property-details.component';
// import { PropertyListComponent } from './component/property-list/property-list.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { UserfooterComponent } from './component/shared/userfooter/userfooter.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AddCartListComponent } from './component/add-cart-list/add-cart-list.component';
@NgModule({
  declarations: [
    HomeComponent,
  //  PropertyDetailsComponent,
   
    HeaderComponent,
    FooterComponent,
    UserfooterComponent,
    AddCartListComponent,

  ],
  imports: [

    UserRoutingModule, FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    NgImageSliderModule,
    AutocompleteLibModule,
    CommonModule,

  ]
})
export class UserModule { }
