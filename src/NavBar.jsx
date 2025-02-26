import React from 'react';
import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';
import NavLinks from './Navlinks';
import logo from './assets/nexterizeFullWhite.png';

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
        <img src={logo} alt='Nexterize' style={{ width: 200 }} />
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
