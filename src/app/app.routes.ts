import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
	{
		path: '', component: AppLayoutComponent, children: [
			{ path: '', component: LandingComponent }
		]
	}
];
