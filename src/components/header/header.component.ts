import {Component,Input, Output, EventEmitter} from '@angular/core';

const template: string = require('./header.html');

@Component({
    selector: 'header',
    template,
    directives: []
    })

export class HeaderComponent {}