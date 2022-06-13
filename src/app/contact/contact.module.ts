import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		ContactComponent
	],
	imports: [
		CommonModule,
		ContactRoutingModule,
		MaterialModule,
		SharedModule,
		FlexLayoutModule,
		ReactiveFormsModule,
	]
})
export class ContactModule { }
