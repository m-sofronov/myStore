"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var catalog_component_1 = require("./catalog.component");
var cart_component_1 = require("./cart.component");
var items_component_1 = require("./items.component");
var item_detail_component_1 = require("./item-detail.component");
var routes = [
    { path: '', redirectTo: '/catalog', pathMatch: 'full' },
    { path: 'catalog', component: catalog_component_1.CatalogComponent },
    { path: 'detail/:name', component: item_detail_component_1.ItemDetailComponent },
    { path: 'items', component: items_component_1.ItemsComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map