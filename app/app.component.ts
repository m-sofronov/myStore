import { Component, OnInit } from '@angular/core';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
    selector: 'my-app',
    templateUrl: `app/app.component.html`,
    styleUrls: [`app/app.component.css`],
    providers: [ItemService];
})

export class AppComponent implements OnInit { 
	title = 'myStore'
    items: Item[];
    selectedItem: Item;

    constructor(private itemService: ItemService) { }

    getItems(): void {
        this.itemService.getItems().then(items => this.items = items);
    }

    ngOnInit(): void {
        this.getItems();
    }

    onSelect(item: Item): void {
    	this.selectedItem = item;
    }
}