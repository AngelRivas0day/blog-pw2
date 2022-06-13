import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
	selector: 'app-article-details',
	templateUrl: './article-details.component.html',
	styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

	loading: boolean = false;
	articleId: number;
	article: any = undefined;
	error: boolean = false;

	constructor(
		private apiService: ApiService,
		private route: ActivatedRoute,
	) { 
		this.articleId = this.route.snapshot.params.id;
	}

	ngOnInit(): void {
		// this.fetchData();
	}

	fetchData(): void {
		this.loading = true;
		this.apiService.get(`articles/${this.articleId}`, false)
		.subscribe(({data}:any) => {
			this.article = data;
			this.error = false;
			this.loading = false;
		}, () => {
			this.error = true;
			this.loading = false;
		})
	}

}
