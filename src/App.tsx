import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import StoreListPage from './pages/ShopListPage';
import ShopDetailPage from './pages/ShopDetailPage'; 

import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <div className="app-container">
            <Routes>
              <Route path="/" element={<StoreListPage />} />
              <Route path="/shops/:id" element={<ShopDetailPage />} />
            </Routes>
          </div>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
