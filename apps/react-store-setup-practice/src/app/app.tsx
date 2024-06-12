// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
import { ProductList } from '@react-monorepo/products';
import { OrderList } from '@react-monorepo/orders';

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NxWelcome title="react-store-setup-practice" />,
    },
    {
      path: 'product-list',
      element: <ProductList />,
    },
    {
      path: 'order-list',
      element: <OrderList />,
    },
  ]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <RouterProvider router={router}>
        {/* <h1 style={{ fontSize: '32px' }}>Test lah</h1>
        <NxWelcome title="react-store-setup-practice" /> */}
      </RouterProvider>
    </div>
  );
}

export default App;
