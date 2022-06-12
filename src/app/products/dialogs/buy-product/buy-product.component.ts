import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
	selector: 'app-buy-product',
	templateUrl: './buy-product.component.html',
	styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent implements OnInit {

	loading: boolean = false;
	orderError: boolean = false;
	form: FormGroup = new FormGroup({
		card: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
		expiry: new FormControl('', [Validators.required, Validators.maxLength(5)]),
		cvv: new FormControl('', [Validators.required, Validators.maxLength(4), Validators.minLength(3)]),
		holder_name: new FormControl('', [Validators.required]),
	})

	constructor(
		private dialogRef: MatDialogRef<BuyProductComponent>,
		private apiService: ApiService,
		@Inject(MAT_DIALOG_DATA) private data: { product: any },
	) { }

	ngOnInit(): void {
	}

	onPay(): void {
		this.loading = true;
		this.apiService.post('orders', {
			amount: this.data.product.price,
			article: this.data.product.name,
			payment_status: 'DONE',
		}, false)
		.pipe(
			switchMap(() => {
				return this.form.controls.card.value == '4242424242424242' ?
					of(true) :
					of(false)
			})
		)
		.subscribe((data: boolean) => {
			this.loading = false;
			if (data) {
				this.orderError = false;
				this.dialogRef.close(true);
				return;
			}
			this.orderError = true;
			this.dialogRef.close(false);
		}, () => {
			this.orderError = true;
			this.dialogRef.close(false);
		})
	}

}
