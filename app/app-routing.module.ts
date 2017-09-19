import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogComponent }		from './catalog.component';
import { CartComponent }        from './cart.component';
import { ItemsComponent }		from './items.component';
import { ItemDetailComponent }	from './item-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
  { path: 'catalog',  component: CatalogComponent },
  { path: 'detail/:name', component: ItemDetailComponent },
  { path: 'items',     component: ItemsComponent },
  { path: 'cart',  component: CartComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}