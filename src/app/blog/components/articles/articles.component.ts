import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
	selector: 'app-articles',
	templateUrl: './articles.component.html',
	styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

	articles: any[] = [];
	loading: boolean = false;

	constructor() { }

	ngOnInit(): void {
		this.fetchData();
	}

	fetchData(): void {
		const articles: any[] = [
			{ id: 1, title: 'Article title', }
		];
		this.loading = true;
		of({data:articles})
		.pipe(
			delay(800)
		)
		.subscribe(({data}:any) => {
			this.articles = data;
			this.loading = false;
		})
	}

}
