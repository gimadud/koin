import type { Shop } from '../types/shop';
import '../styles/ShopDetailInfo.css';

interface Props {
  shop: Shop;
}

export default function ShopDetailInfo({ shop }: Props) {
  const today = new Date().getDay();
  const openInfo = shop.open?.[today - 1]; 

  return (
    <div className="shop-info">
      <h5>{shop.name}</h5>
      <p><strong>전화번호:</strong> {shop.phone || '정보 없음'}</p>
      <p><strong>운영 시간:</strong> {openInfo ? `${openInfo.open_time} ~ ${openInfo.close_time}` : '운영 시간 정보 없음'}</p>
      <p><strong>주소정보:</strong></p>
      <p><strong>배달요금:</strong></p>
    </div>
  );
}
