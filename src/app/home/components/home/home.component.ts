import { Component, OnInit } from '@angular/core';
import { defer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	articles: any[] = [];
	items: any[] = [];
	loading: boolean = false;

	constructor(
		private apiService: ApiService,
	) { 
		this.items = [
			{id: 1,description: 'TEST'},
			{id: 2,description: 'TEST'},
			{id: 3,description: 'TEST'},
			{id: 4,description: 'TEST'},
		];
		this.articles = [
			{id: 1, title: 'TEST', body: 'this is a body test'},
			{id: 2, title: 'TEST', body: 'this is a body test'},
			{id: 3, title: 'TEST', body: 'this is a body test'},
		];
	}

	ngOnInit(): void {
		// this.fetchData()
	}

	fetchData(): void {
		defer(() => {
			this.loading = true;
			return this.apiService.get('articles', false, { limit: 3 })
		})
		.pipe(
			switchMap(({data}:any) => {
				this.articles = data;
				return this.apiService.get('items', false, { limit: 4 })
			})
		)
		.subscribe(({data}:any) => {
			this.items = data;
		}, () => {
			this.loading = false;
		}, () => {
			this.loading = false;
		})
	}

}
