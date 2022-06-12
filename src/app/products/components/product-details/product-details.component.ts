import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { BuyProductComponent } from '../../dialogs/buy-product/buy-product.component';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

	productId: number;
	loading: boolean = false;
	product: any = undefined;

	constructor(
		private route: ActivatedRoute,
		private apiService: ApiService,
		private dialog: MatDialog
	) { 
		this.productId = this.route.snapshot.params.id
	}

	ngOnInit(): void {
		this.fetchData();
	}

	fetchData(): void {
		this.loading = true;	
		this.apiService.get(`products/${this.productId}`, false)
		.subscribe(({data}:any) => {
			this.product = data;
			this.loading = false;
		}, () => {
			this.loading = false;
		})
	}

	openDialog(): void {
		this.dialog.open(BuyProductComponent, {
			width: '600px',
			disableClose: true,
			data: {
				product: this.product
			}
		})
	}

}
