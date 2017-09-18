import { Component, OnInit } from '@angular/core';

import { Item }			from './item';
import { ItemService }	from './item.service';

@Component ({
	selector: 'my-catalog',
	templateUrl: `app/catalog.component.html`,
})

export class CatalogComponent implements OnInit {
	items: Item[] = [];

	constructor(private itemService: ItemService) { }

	ngOnInit(): void {
    	this.itemService.getItems()
      		.then(items => this.items = items);
	}
}