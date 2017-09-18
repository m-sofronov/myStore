"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var item_service_1 = require("./item.service");
var ItemsComponent = (function () {
    function ItemsComponent(itemService, router) {
        this.itemService = itemService;
        this.router = router;
    }
    ItemsComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getItems().then(function (items) { return _this.items = items; });
    };
    ItemsComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    ItemsComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    ItemsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedItem.name]);
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    core_1.Component({
        selector: 'my-items',
        templateUrl: "app/items.component.html",
        styleUrls: ["app/items.component.css"]
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService,
        router_1.Router])
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=items.component.js.map