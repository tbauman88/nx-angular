export interface Product {
  id: number;
  productName: string;
  productCode?: string;
  description?: string;
  price?: number;
  categoryId?: number;
  category?: string;
  quantityInStock?: number;
  searchKey?: string[];
  supplierIds?: number[];
  tags?: string[];
  releaseDate?: string;
  starRating?: number;
  imageUrl?: string;
}
