import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductStarData } from '@nx-angular/data';
import { UiModule } from '@nx-angular/ui';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditGuard } from './product-edit.guard';
import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [
    UiModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductStarData),
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      {
        path: 'products/:id/edit',
        canDeactivate: [ProductEditGuard],
        component: ProductEditComponent
      }
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent
  ]
})
export class ProductModule {}
