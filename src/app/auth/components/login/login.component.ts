import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	form: FormGroup = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
	})

	constructor(
		private authService: AuthService,
		private snackbar: MatSnackBar
	) { }

	onSubmit(): void {
		this.authService.login({
			email: this.form.controls.email.value,
			password: this.form.controls.password.value,
		})
		.subscribe(({data, status}) => {
			if (data && status == 200)
				this.authService.handleLogin(data);
		}, (error: any) => {
			this.snackbar.open(error.message, '', { duration: 3000 })
		})
	}

	get email(): AbstractControl { return this.form.controls.email }
	get password(): AbstractControl { return this.form.controls.password }

}
