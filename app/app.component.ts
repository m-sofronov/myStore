import { Component } from '@angular/core';

@Component ({
    selector: 'my-app',
    template: `
    <h1>Welcome to {{title}}</h1>
    <nav>
    	<a routerLink="/catalog">Catalog</a>
    	<a routerLink="/items">Items</a>
    </nav>
    <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = 'myStore';
}