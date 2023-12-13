import Layout from '@/components/layout/layout';
import { CartProvider } from '@/context/cart-context';
import { SidebarProvider } from '@/context/sidebar-context';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <SidebarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SidebarProvider>
    </CartProvider>
  );
}
