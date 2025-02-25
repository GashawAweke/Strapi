import React, { useRef } from 'react';
import { useGlobalContext } from './context';
import sublinks from './data';
const Submenu = () => {
  const { pageID, setPageID } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageID);

  const submenuContainer = useRef(null);

  const handleMouseLeave = (e) => {
    const submenu = submenuContainer.current;
    const { clientX, clientY } = e;
    const { left, bottom, right } = submenu.getBoundingClientRect();

    if (clientX < left - 1 || clientY > bottom - 1 || clientX > right - 1) {
      setPageID(null);
      //  1 means 1 pixel and it is to make the disappearance faster by 1 pixel
    }

    // console.log(clientX, clientY);
  };

  return (
    <div
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
