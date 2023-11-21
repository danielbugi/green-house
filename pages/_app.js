import Layout from '@/components/layout/layout';
import { SidebarProvider } from '@/context/sidebar-context';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SidebarProvider>
  );
}
