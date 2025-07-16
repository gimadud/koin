import React from 'react';
import { useParams } from 'react-router-dom';
import { useShopDetail } from '../hooks/useShopDetail';
import ShopInfo from '../components/ShopDetailInfo';
import '../styles/ShopDetailPage.css';


export default function ShopDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useShopDetail(id);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {(error as Error).message}</div>;
  if (!data) return <div>상점 정보를 찾을 수 없습니다.</div>;

  return (
    <div className="shop-detail-wrapper">
      <h1>주변 상점</h1>
      <ShopInfo shop={data} />
    </div>
  );
}
