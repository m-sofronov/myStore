import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent } 		from './app.component';
import { ItemDetailComponent }  from './item-detail.component';
import { ItemsComponent }		from './items.component';
import { ItemService }			from './item.service';
import { CatalogComponent }		from './catalog.component';

@NgModule({
    imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
			{
				path: 'items',
				component: ItemsComponent
			},
			{
				path: 'catalog',
				component: CatalogComponent
			},
			{
				path: '',
				redirectTo: '/catalog',
				pathMatch: 'full'
			}
		])
    ],
    declarations: [
    	AppComponent,
    	CatalogComponent,
    	ItemDetailComponent,
    	ItemsComponent
    ],
    providers: [
    	ItemService
    ],
    bootstrap: [
    	AppComponent
    ]
})

export class AppModule { }
