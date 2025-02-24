import React from 'react';
import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';
import NavLinks from './Navlinks';

const NavBar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav>
      <div className='nav-center'>
        <h3 className='logo'>SubMenu</h3>
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
