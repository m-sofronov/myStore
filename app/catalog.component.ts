import { Component, OnInit } from '@angular/core';

import { Item }			from './item';
import { ItemService }	from './item.service';

@Component ({
	selector: 'my-catalog',
	template: `
<h3>My product</h3>
<div class="grid grid-pad">
	<div *ngFor="let item of items" class="col-1-4">
		<div class="module item">
			<h4>{{item.name}}</h4>
		</div>
	</div>
</div>
	`,
})

export class CatalogComponent implements OnInit {
	items: Item[] = [];

	constructor(private itemService: ItemService) { }

	ngOnInit(): void {
    	this.itemService.getItems()
      		.then(items => this.items = items);
	}
}