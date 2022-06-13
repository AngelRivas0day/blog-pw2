import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticleCommentsComponent } from './components/article-comments/article-comments.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [
		ArticlesComponent,
		ArticleDetailsComponent,
		ArticleCommentsComponent
	],
	imports: [
		CommonModule,
		BlogRoutingModule,
		FlexLayoutModule,
		MaterialModule,
		SharedModule,
	]
})
export class BlogModule { }
