import { useEffect, useState } from 'react';
import classes from './navbar.module.css';

import { FaUser } from 'react-icons/fa';
import { useSidebarContext } from '@/context/sidebar-context';
import Link from 'next/link';
import CartButton from '../ui/cart-button';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const { sidebarOpen, setSidebarOpen } = useSidebarContext();

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollTop = e.target.documentElement.scrollTop;
      if (scrollTop > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    if (document) {
      document.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (document) {
        document.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scroll]);

  const navActiveClass = scroll
    ? `${classes.navbar} ${classes.navActive}`
    : `${classes.navbar}`;

  const hamburgerBtnClasses = sidebarOpen
    ? `${classes.hamburgerBtn} ${classes.open}`
    : `${classes.hamburgerBtn}`;

  return (
    <nav className={navActiveClass}>
      <Link className="logo" href={'/'}>
        <h3>GreenHouse</h3>
      </Link>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/shop'}>Plants</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/contact'}>Contact</Link>
        </li>

        <li>
          <CartButton />
        </li>
        <li>
          <a href="/">
            <FaUser />
          </a>
        </li>
      </ul>
      <div
        className={hamburgerBtnClasses}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
export default Navbar;
