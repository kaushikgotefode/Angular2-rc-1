import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

import { ContainerComponent } from '../container/container.component';

import '../../styles/app.scss';

@RouteConfig([
	{ path: '/', component: ContainerComponent, as: 'Container'}
])

@Component({
directives: [
	ROUTER_DIRECTIVES,
	HeaderComponent,
	FooterComponent
	],
	selector: 'app',
	providers: [],
	template: `
	<main>
		<header></header> 
		<div id="wrapper">
			<div id="page-content-wrapper">
			<router-outlet></router-outlet>
			</div>
		</div>
		<footer></footer>
	</main>
`
	})

export class AppComponent {}
