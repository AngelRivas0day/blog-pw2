import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private _user = new BehaviorSubject<any>(false);
	public get user$(): Observable<any> { return this._user.asObservable() }

	constructor(
		private apiService: ApiService,
		private router: Router
	) {
		this.restoreAccess();
		setTimeout(() => this.saveLastItem(), 1000)
	}
	
	saveLastItem(): void {
		this.router.events.subscribe(() => {
			var url = this.router.url
			do {
				if (this.router.url != '/auth/login')
					localStorage.setItem('last_url', this.router.url)
			} while (url != this.router.url);
		})
	}

	login(credentials: { email: string, password: string }): Observable<any> {
		return this.apiService.post('users/login', credentials, false)
	}

	register(data: any): Observable<any> {
		return this.apiService.post('register', data, false)
	}

	handleLogin(data: any): void {
		localStorage.setItem('token', data.token)
		this._user.next({ 
			name: data.name, 
			role: data.role,
			email: data.email
		})
		if (data.role == 'user') {
			this.router.navigate(['profile'])
			return
		}
		if (data.role == 'admin') {
			this.router.navigate(['dashboard/articles'])
			return
		}
		this.router.navigate(['profile'])
	}

	logout(): void {
		localStorage.removeItem('token')
		this._user.next(false)
		this.router.navigate(['auth','login'])
	}

	restoreAccess(): void {
		const token = localStorage.getItem('token')
		if (token && token.length) {
			this.apiService.get('users/restore-access', true, { temp: false })
			.subscribe(({ data }: any) => {
				if (data.success) {
					let user: any = data.user
					this._user.next({ 
						name: user.name,
						role: user.role,
						email: user.email
					})
					let lastUrl: string | null = localStorage.getItem('last_url');
					if (lastUrl)
						this.router.navigateByUrl(lastUrl)
				} else {
					this.logout()
				}
			},
			() => {
				this.logout()
			})
		}
	}

}
