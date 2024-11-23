import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Tasks',
                icon: 'pi pi-fw pi-star-fill',
                items: [
                    {
                        label: 'Current Task List',
                        icon: 'pi pi-fw pi-table',
                        routerLink: ['/uikit/table']
                    }
				]
			}
        ];
    }
}
