import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-article-item',
	templateUrl: './article-item.component.html',
	styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent {

	@Input() public article: any = {};

}
