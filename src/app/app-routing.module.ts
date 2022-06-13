import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{ 
				path: 'home',
				loadChildren: () => import('../../src/app/home/home.module').then(m => m.HomeModule)
			},
			{ 
				path: 'auth',
				loadChildren: () => import('../../src/app/auth/auth.module').then(m => m.AuthModule)
			},
			{ 
				path: 'about',
				loadChildren: () => import('../../src/app/about/about.module').then(m => m.AboutModule)
			},
			{ 
				path: 'products',
				loadChildren: () => import('../../src/app/products/products.module').then(m => m.ProductsModule)
			},
			{ 
				path: 'contact',
				loadChildren: () => import('../../src/app/contact/contact.module').then(m => m.ContactModule)
			},
			{ 
				path: 'articles',
				loadChildren: () => import('../../src/app/blog/blog.module').then(m => m.BlogModule)
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
