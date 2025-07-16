// src/pages/StoreListPage.tsx
import React from 'react';
import CategoryList from '../components/CategoryTab';
import ShopCardList from '../components/ShopCardList';
import SearchBar from '../components/SearchBar';

export default function StoreListPage() {
  return (
    <div className="store-page-wrapper">
      <h1>주변 상점</h1>
      <CategoryList />
      <SearchBar />
      <ShopCardList />
    </div>
  );
}
