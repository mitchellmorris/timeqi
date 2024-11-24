import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
	{
		path: '', component: AppLayoutComponent, children: [
			{ path: '', component: LandingComponent },
			{ path: 'tasklist', data: { breadcrumb: 'Task List' }, loadChildren: () => import('./tasklist/tasklist.app.module').then(m => m.TaskListAppModule) },
		]
	}
];
