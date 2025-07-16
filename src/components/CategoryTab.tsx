import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import '../styles/CategoryTabs.css'; 

type Category = {
  id: number;
  name: string;
  image_url: string;
};

export default function CategoryList() {
  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await axios.get('https://api.stage.koreatech.in/shops/categories');
      return res.data.shop_categories as Category[];
    },
  });

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div className="category-list">
      <h2>CATEGORY</h2>
      {data?.map((cat) => (
        <div key={cat.id} style={{ textAlign: 'center', width: '60px' }}>
          <img src={cat.image_url} alt={cat.name} width={50} height={50} />
          <div style={{ fontSize: '12px' }}>{cat.name}</div>
        </div>
      ))}
    </div>
  );
}
