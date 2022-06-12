import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule,
		FlexLayoutModule,
		MaterialModule,
		SharedModule,
	]
})
export class HomeModule { }
