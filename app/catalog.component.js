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
var item_service_1 = require("./item.service");
var CatalogComponent = (function () {
    function CatalogComponent(itemService) {
        this.itemService = itemService;
        this.items = [];
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItems()
            .then(function (items) { return _this.items = items; });
    };
    return CatalogComponent;
}());
CatalogComponent = __decorate([
    core_1.Component({
        selector: 'my-catalog',
        template: "\n<h3>My product</h3>\n<div class=\"grid grid-pad\">\n\t<div *ngFor=\"let item of items\" class=\"col-1-4\">\n\t\t<div class=\"module item\">\n\t\t\t<h4>{{item.name}}</h4>\n\t\t</div>\n\t</div>\n</div>\n\t",
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], CatalogComponent);
exports.CatalogComponent = CatalogComponent;
//# sourceMappingURL=catalog.component.js.map