import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ShopCard from './ShopCard';
import '../styles/ShopCardList.css'; 
import type { Shop } from '../types/Shop';

export default function ShopCardList() {
  const { data, isLoading } = useQuery({
    queryKey: ['shops'],
    queryFn: async () => {
      const res = await axios.get('https://api.stage.koreatech.in/v2/shops?sorter=NONE');
      return res.data.shops as Shop[];
    },
  });

  if (isLoading) return <div>상점 목록 불러오는 중...</div>;

  return (
    <div className="shop-card-list" >
      {data?.map((shop) => (
        <ShopCard key={shop.id} shop={shop} />
      ))}
    </div>
  );
}
