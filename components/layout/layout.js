import Cart from './cart/cart';
import Footer from './footer';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Cart />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
