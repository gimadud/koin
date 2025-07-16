import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CategoryList from './components/CategoryTab';
import ShopCardList from './components/ShopCardList';
import Layout from './components/Layout';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <Layout>
      <div className="app-container">
        <h1>주변 상점</h1>
        <CategoryList />
        <ShopCardList />
      </div>
    </Layout>
  );
}

export default App;
