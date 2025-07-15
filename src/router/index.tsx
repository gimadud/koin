// src/router/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

//import ShopListPage from '../pages/ShopListPage';
//import ShopDetailPage from '../pages/ShopDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '',
        //element: <ShopListPage />, 
      },
      {
        path: 'shop/:id',
        //element: <ShopDetailPage />,
      },
    ],
  },
]);

export default router;
