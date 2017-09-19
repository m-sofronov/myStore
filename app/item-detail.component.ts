import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';


import { Item } from './item';
import { ItemService } from './item.service';

@Component ({
	selector: 'item-detail',
	templateUrl: `app/item-detail.component.html`,
	styleUrls: [`app/item-detail.component.css`]
})

export class ItemDetailComponent implements OnInit {
	@Input() item: Item;

	constructor(
  		private itemService: ItemService,
  		private route: ActivatedRoute,
  		private location: Location
	) {}

	ngOnInit(): void {
  		this.route.paramMap
    	.switchMap((params: ParamMap) => this.itemService.getItem(params.get('name')))
    	.subscribe(item => this.item = item);
	}

	goBack(): void {
  		this.location.back();
	}

    buyItem(name: string, price: number){
        alert('This item was added to cart');
    }
}