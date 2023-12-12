import { useSidebarContext } from '@/context/sidebar-context';
import classes from './sidebar.module.css';

import { FaShoppingBag, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import CartButton from '../ui/cart-button';
import { useEffect, useRef } from 'react';

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebarContext();

  const sidebarClasses = sidebarOpen
    ? `${classes.sidebar} ${classes.sidebarActive}`
    : `${classes.sidebar}`;

  return (
    <aside className={sidebarClasses} onClick={() => setSidebarOpen(false)}>
      <ul>
        <div className={classes.navControls}>
          <li>
            <CartButton />
          </li>
          <li>
            <a href="/">
              <FaUser />
            </a>
          </li>
        </div>

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
      </ul>
    </aside>
  );
};
export default Sidebar;
