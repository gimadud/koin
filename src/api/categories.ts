import axios from 'axios';
import type { Category } from '../types/category';

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get('https://api.stage.koreatech.in/shops/categories');
  return data.shop_categories;
};
