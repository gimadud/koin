import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../api/categories';
import axios from 'axios';

useQuery({
  queryKey: ['categories'],
  queryFn: async () => {
    const res = await axios.get('https://api.stage.koreatech.in/shops/categories');
    return res.data.shop_categories;
  },
});
