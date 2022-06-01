import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, OperatorFunction, throwError } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	base_url: string = environment.apiUrl; // http://localhost:4000/

	private options: {headers: any, observe: any} = { headers: null, observe: null };

	constructor(
		private http: HttpClient,
	) {
		this.resetHeaders();
	}

	private resetHeaders() {
		this.options.headers = new HttpHeaders({
			'Content-Type': 'application/json',
		});
		this.options.observe = 'response'
	}

	private setToken() {
		const token = localStorage.getItem('token')
		const headers: any = {
			'Content-Type': 'application/json',
		}
		if (token && token.length)
			headers['x-auth-token'] = token
		this.options.headers = new HttpHeaders(headers);
		this.options.observe = 'response'
	}

	private handleError = (error: HttpErrorResponse) => {
		if (error.status == 406) localStorage.removeItem('token')
		if (error.error instanceof ErrorEvent) {
			console.error('Client side error occurred:', error.error.message);
			return throwError({ status: error.status, message: "An error ocurred" });
		} else {
			console.error(error)
			return throwError({ status: error.status, message: error.error });
		}
	}

	private attachQueryParams(params: any) {
		let keys: string[] = Object.keys(params)
		let result: string = "?"
		keys.forEach((key) => {
			result += `${key}=${params[key]}&`
		})
		return result.substring(0, result.length - 1)
	}

	// GET 

	get(endpoint: string, useToken: boolean = true, queryParams: object = {}): Observable<any> {
		useToken ? this.setToken() : this.resetHeaders()
		let url = `${this.base_url}${endpoint}${this.attachQueryParams(queryParams)}`
		return this.http.get(url, this.options)
			.pipe(
				retry(2),
				map((response: any) => ({ data: response.body, status: response.status }))
			);
	}

	// POST

	post(endpoint: string, data = {}, useToken: boolean = true, queryParams: object = {}): Observable<any> {
		useToken ? this.setToken() : this.resetHeaders()
		let url = `${this.base_url}${endpoint}${this.attachQueryParams(queryParams)}`
		return this.http.post(url, data, this.options)
			.pipe(
				retry(2),
				map((response: any) => ({ data: response.body, status: response.status }))
			)
	}

	// PUT 

	put(endpoint: string, data: any = {}, useToken: boolean = true, queryParams: object = {}): Observable<any> {
		useToken ? this.setToken() : this.resetHeaders()
		let url = `${this.base_url}${endpoint}${this.attachQueryParams(queryParams)}`
		return this.http.put(url, data, this.options)
			.pipe(
				retry(2),
				map((response: any) => ({ data: response.body, status: response.status }))
			);
	}

	// DELETE

	delete(endpoint: string, useToken: boolean = true, queryParams: object = {}): Observable<any> {
		useToken ? this.setToken() : this.resetHeaders()
		let url = `${this.base_url}${endpoint}${this.attachQueryParams(queryParams)}`
		return this.http.delete(url, this.options)
			.pipe(
				map((response: any) => ({ data: response.body, status: response.status })),
				retry(2),
			);
	}

}
