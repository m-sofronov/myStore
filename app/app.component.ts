import { Component } from '@angular/core';

@Component ({
    selector: 'my-app',
    template: `
    <h1>Welcome to {{title}}</h1>
    <my-items></my-items>
    `
})

export class AppComponent {
    title = 'myStore';
}