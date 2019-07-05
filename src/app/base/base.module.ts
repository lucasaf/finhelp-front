import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from "../home/home.component";
import { UserComponent } from '../user/user.component';
import { CategoriesComponent } from '../categories/categories.component';

@NgModule({
	declarations: [
		HomeComponent,
		UserComponent,
		CategoriesComponent, 
	],
	imports: [
		CommonModule,
		BaseRoutingModule,
		FormsModule,
	]
})
export class BaseModule { }
