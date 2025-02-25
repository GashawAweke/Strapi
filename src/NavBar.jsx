import React from 'react';
import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';
import NavLinks from './Navlinks';

const NavBar = () => {
  const { openSidebar, setPageID } = useGlobalContext();
  const handleSubmenu = (e) => {
    // console.log(e.target);
    if (!e.target.classList.contains('nav-link')) {
      setPageID(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
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
