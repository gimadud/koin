import '../styles/ShopCard.css'; 
import type { Shop } from '../types/shop';
import ShopTags from './ShopTags';
import { useNavigate } from 'react-router-dom';

function getTodayOperatingTime(shop: Shop) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  const todayInfo = shop.open.find((o) => o.day_of_week === today);
  if (!todayInfo || todayInfo.closed) return '휴무';
  return `${todayInfo.open_time}~${todayInfo.close_time}`;
}

const ShopCard = ({ shop }: { shop: Shop }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/shops/${shop.id}`);
    };
    
  return (
    <div className='shop-card' onClick={handleClick}>
      <h3>{shop.name}</h3>
      <p>⭐ {shop.average_rate} ({shop.review_count} 리뷰)</p>
      <p>전화번호: {shop.phone}</p>
      <p>운영시간: {getTodayOperatingTime(shop)}</p>

      <ShopTags
      className="shop-tags"
      pay_card={shop.pay_card}
      pay_bank={shop.pay_bank}
      delivery={shop.delivery}
      />
    </div>
  );
};

export default ShopCard;