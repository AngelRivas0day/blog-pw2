import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
	declarations: [
		LoginComponent,
		SignupComponent
	],
	imports: [
		CommonModule,
		AuthRoutingModule,
		MaterialModule,
		ReactiveFormsModule,
		FormsModule,
		SharedModule,
		FlexLayoutModule,
	]
})
export class AuthModule { }
