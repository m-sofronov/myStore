import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
    selector: 'my-items',
    templateUrl: `app/items.component.html`,
    styleUrls: [`app/items.component.css`]
})

export class ItemsComponent implements OnInit { 
    items: Item[];
    selectedItem: Item;

    constructor(
        private itemService: ItemService,
        private router: Router) { }

    getItems(): void {
        this.itemService.getItems().then(items => this.items = items);
    }

    ngOnInit(): void {
        this.getItems();
    }

    onSelect(item: Item): void {
        this.selectedItem = item;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedItem.name]);
    }
}
