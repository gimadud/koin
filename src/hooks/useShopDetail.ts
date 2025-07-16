import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { Shop } from '../types/shop';

export function useShopDetail(id: string | undefined) {
  return useQuery<Shop | undefined>({
    queryKey: ['shop-detail', id],
    queryFn: async () => {
      const res = await axios.get('https://api.stage.koreatech.in/v2/shops');
      const shops: Shop[] = res.data.shops;
      return shops.find((shop) => shop.id === Number(id));
    },
    enabled: !!id,
  });
}
