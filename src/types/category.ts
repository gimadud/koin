export interface Category {
  id: number;
  name: string;
  image_url: string;
}

export interface CategoryListResponse {
  total_count: number;
  shop_categories: Category[];
}
