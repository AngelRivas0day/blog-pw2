import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	products: any[] = [];
	loading: boolean = false;

	constructor(
		private apiService: ApiService,
	) { }

	ngOnInit(): void {
		this.fetchData()
	}

	fetchData(): void {
		const products:any[] = [
			{ id: 1, title: 'Article title', },
			{ id: 2, title: 'Article title', },
			{ id: 3, title: 'Article title', },
			{ id: 4, title: 'Article title', },
		]
		this.loading = true;
		of({data:products})
		.pipe(
			delay(800)
		)
		.subscribe(({data}:any) => {
			this.products = data;
			this.loading = false;
		}, () => {
			this.loading = false;
		})
	}

}
