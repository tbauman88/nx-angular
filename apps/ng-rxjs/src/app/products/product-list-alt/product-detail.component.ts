import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product, Supplier } from '@nx-angular/api-interfaces';
import { combineLatest, EMPTY, Subject } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'nx-angular-product-detail',
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  product$ = this.productService.selectedProduct$.pipe(
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );

  pageTitle$ = this.product$.pipe(
    map((p: Product) => (p ? `Product Detail for ${p.productName}` : null))
  );

  productSuppliers$ = this.productService.selectedProductSuppliers$.pipe(
    catchError(err => {
      this.errorMessageSubject.next(err);
      return EMPTY;
    })
  );

  vm$ = combineLatest([
    this.product$,
    this.productSuppliers$,
    this.pageTitle$
  ]).pipe(
    filter(([product]) => Boolean(product)),
    map(
      ([product, productSuppliers, pageTitle]: [
        Product,
        Supplier[],
        string
      ]) => ({
        product,
        productSuppliers,
        pageTitle
      })
    )
  );

  constructor(private productService: ProductService) {}
}
