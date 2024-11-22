import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AppLayoutModule } from './layout/app.layout.module';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		AppLayoutModule,
		RouterOutlet
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

	constructor(private primengConfig: PrimeNGConfig) { }

	ngOnInit(): void {
		this.primengConfig.ripple = true;
	}
}
