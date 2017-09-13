import { Component, Input } from '@angular/core';

export class Item {
	price: number,
	name: string;
};

const ITEMS: Item[] = [
	{price: 100, name: 'First'},
	{price: 200, name: 'Second'},
	{price: 300, name: 'Third'},
];

@Component({
    selector: 'my-app',
    templateUrl: `app/app.component.html`,
    styleUrls: [`app/app.component.css`]
})

export class AppComponent { 
	title = 'myStore'
    items = ITEMS;
    selectedItem: Item;

    onSelect(item: Item): void {
    	this.selectedItem = item;
    }
}