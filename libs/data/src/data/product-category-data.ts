import { ProductCategory } from '@nx-angular/api-interfaces';

export class ProductCategoryData {
  static categories: ProductCategory[] = [
    { id: 1, name: 'Garden' },
    { id: 3, name: 'Toolbox' },
    { id: 5, name: 'Gaming' }
  ];
}
