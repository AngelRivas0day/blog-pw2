import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components/about/about.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [
		AboutComponent
	],
	imports: [
		CommonModule,
		AboutRoutingModule,
		MaterialModule,
		FlexLayoutModule,
		SharedModule,
	]
})
export class AboutModule { }
