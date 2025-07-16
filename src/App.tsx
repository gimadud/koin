import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import './App.css';
import StoreListPage from './pages/ShopListPage';

const queryClient = new QueryClient();

function App() {
  return (
    <Layout>
      <div className="app-container">
        <StoreListPage />
      </div>
    </Layout>
  );
}

export default App;
