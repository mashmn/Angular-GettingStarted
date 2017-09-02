import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductListComponent } from "./product-list.component";

import { RouterModule } from "@angular/router";
import { SharedModule } from './../shared/shared.module';

import { ProductGuardService } from './product-guard.service';
import { ProductService } from "./product.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', 
        canActivate: [ ProductGuardService ],
        component: ProductDetailComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
