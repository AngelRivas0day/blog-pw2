import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

	form: FormGroup = new FormGroup({
		name: new FormControl('', [Validators.required]),
		subject: new FormControl('', [Validators.required]),
		message: new FormControl('', [Validators.required]),
	})

	constructor() { }

	onSubmit(): void {

	}

}
