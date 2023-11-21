import Footer from './footer';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
