import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { FilterPipe } from './filter.pipe';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxTruncateTextModule } from 'ngx-truncate-text';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxStarsModule } from 'ngx-stars';
import { NgxStarRatingModule } from 'ngx-star-rating';
const routes:Routes=[
  {
     path: 'product', component: ProductsComponent 
  }
];


@NgModule({
  declarations: [
    ProductsComponent,
    FilterPipe
  ],

  imports: [
    CommonModule,
    NgxPaginationModule,
    FontAwesomeModule,
    NgxTruncateTextModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgxTruncateTextModule,

    NgxStarsModule,
    NgxStarRatingModule,
    RouterModule.forChild(routes)

  ],
  // exports: [
  //   ProductsComponent
  
  //  ],

})
export class ProductviewModule { }
