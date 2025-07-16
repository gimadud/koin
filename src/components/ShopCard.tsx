import '../styles/ShopCard.css'; 


type Shop = {
  id: number;
  name: string;
  phone: string;
  average_rate: number;
  review_count: number;
  open: {
    day_of_week: string;
    closed: boolean;
    open_time: string;
    close_time: string;
  }[];
};

function getTodayOperatingTime(shop: Shop) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  const todayInfo = shop.open.find((o) => o.day_of_week === today);
  if (!todayInfo || todayInfo.closed) return '휴무';
  return `${todayInfo.open_time}~${todayInfo.close_time}`;
}

export default function ShopCard({ shop }: { shop: Shop }) {
  if (!shop) return null;

  return (
    <div className='shop-card'>
      <h3>{shop.name}</h3>
      <p>⭐ {shop.average_rate} ({shop.review_count} 리뷰)</p>
      <p>전화번호: {shop.phone}</p>
      <p>운영시간: {getTodayOperatingTime(shop)}</p>
    </div>
  );
}
