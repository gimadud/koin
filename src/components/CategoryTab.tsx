import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import '../styles/CategoryTabs.css';
import type { Category } from '../types/category';

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
    <>
      <div className="category-bar">
        <h2 className="category-title">CATEGORY</h2>
        <div className="category-list">
          {data.map((cat) => (
            <div key={cat.id} className="category-item">
              <img
                src={cat.image_url}
                alt={cat.name}
                className="category-img"
              />
              <div className="category-name">{cat.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="category-benefit-button">
        <button>혜택이 있는 상점 모아보기</button>
      </div>
    </>
  );
}
