import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BuyProductComponent } from './dialogs/buy-product/buy-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		ProductsComponent,
		ProductDetailsComponent,
  		BuyProductComponent
	],
	imports: [
		CommonModule,
		ProductsRoutingModule,
		SharedModule,
		MaterialModule,
		FlexLayoutModule,
		ReactiveFormsModule,
	]
})
export class ProductsModule { }
