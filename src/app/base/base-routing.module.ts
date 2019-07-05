import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { UserComponent } from '../user/user.component';
import { CategoriesComponent } from '../categories/categories.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'user', component: UserComponent },
	{ path: 'categories', component: CategoriesComponent },
	{ path: '**', component: HomeComponent },
	//{ path: 'typography', component: TypographyComponent },
	//{ path: 'icons', component: IconsComponent },
	//{ path: 'maps', component: MapsComponent },
	//{ path: 'notifications', component: NotificationsComponent },
	//{ path: 'upgrade', component: UpgradeComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BaseRoutingModule { }
