import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LandingComponent } from './landing/landing.component';
import { CurrentListComponent } from './current-list/current-list.component';

export const routes: Routes = [
	{
		path: '', component: AppLayoutComponent, children: [
			{ path: '', component: LandingComponent },
			{ path: 'current-list', component: CurrentListComponent }
		]
	}
];
