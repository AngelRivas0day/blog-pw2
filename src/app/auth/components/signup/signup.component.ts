import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

	form: FormGroup = new FormGroup({
		name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
		rep_password: new FormControl('', [Validators.required, Validators.minLength(8)]),
	})

	constructor(
		private authService: AuthService,
		private snackbar: MatSnackBar
	) { }

	onSubmit(): void {
		this.authService.register({
			name: this.form.controls.name.value,
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

	get name(): AbstractControl { return this.form.controls.name }
	get email(): AbstractControl { return this.form.controls.email }
	get password(): AbstractControl { return this.form.controls.password }
	get rep_password(): AbstractControl { return this.form.controls.rep_password }

}
