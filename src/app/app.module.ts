import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { LegalComponent } from './legal/legal.component';
import { MaterialModule } from './material/material.module';

@NgModule({
	declarations: [
		AppComponent,
		MainLayoutComponent,
		DashboardLayoutComponent,
		LegalComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
