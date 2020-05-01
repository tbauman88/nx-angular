import {
  ProductCategoryData,
  ProductData,
  SupplierData
} from '@nx-angular/data';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppData implements InMemoryDbService {
  createDb() {
    const products = ProductData.products;
    const productCategories = ProductCategoryData.categories;
    const suppliers = SupplierData.suppliers;
    return { products, productCategories, suppliers };
  }
}
