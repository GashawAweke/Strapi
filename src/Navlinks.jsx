import React from 'react';
import sublinks from './data';
import { useGlobalContext } from './context';

const NavLinks = () => {
  const { setPageID } = useGlobalContext();
  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPageID(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
