"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Item = (function () {
    function Item() {
    }
    return Item;
}());
exports.Item = Item;
;
var ITEMS = [
    { price: 100, name: 'First' },
    { price: 200, name: 'Second' },
    { price: 300, name: 'Third' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'myStore';
        this.items = ITEMS;
    }
    AppComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "app/app.component.html",
        styleUrls: ["app/app.component.css"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map