import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemComponent } from './components/item/item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ArticleItemComponent,
    FooterComponent,
    ItemComponent,
  ],
  imports: [
    CommonModule,
	MaterialModule,
	FlexLayoutModule,
	RouterModule
  ],
  exports: [
	ArticleItemComponent,
    FooterComponent,
    ItemComponent,
  ]
})
export class SharedModule { }
