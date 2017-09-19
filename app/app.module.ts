import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } 		from './app.component';
import { ItemDetailComponent }  from './item-detail.component';
import { ItemsComponent }		from './items.component';
import { ItemService }			from './item.service';
import { CatalogComponent }		from './catalog.component';
import { CartComponent }        from './cart.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
    	AppComponent,
        CartComponent,
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
