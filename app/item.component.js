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
var AppComponent = (function () {
    function AppComponent(itemService) {
        this.itemService = itemService;
        this.title = 'myStore';
    }
    AppComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getItems().then(function (items) { return _this.items = items; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    AppComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "app/app.component.html",
        styleUrls: ["app/app.component.css"],
        providers: [item_service_1.ItemService]
    }),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=item.component.js.map