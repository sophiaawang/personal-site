import { React, useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import '../index.css';
import $ from "jquery";

const mobileMediaQuery = '(max-width: 850px)'

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.matchMedia(mobileMediaQuery).matches);
  const location = useLocation();

  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const query = window.matchMedia(mobileMediaQuery);

    function handleQueryChange(queryEvent) {
      const isMobileNow = queryEvent.matches;
      setIsMobile(isMobileNow);
    }

    handleQueryChange(query);
    query.addEventListener('change', handleQueryChange);
    return () => {
      query.removeEventListener('change', handleQueryChange);
    };
  }, [])

  const showMenu = () => {
    $(dropdownRef.current).removeClass("hidden");
    $('.menu-item').removeClass("hidden");
    $(menuButtonRef.current).addClass("hidden");
    $(closeButtonRef.current).removeClass("hidden");
  };

  const closeMenu = () => {
    $(dropdownRef.current).addClass("hidden");
    $('.menu-item').addClass("hidden");
    $(menuButtonRef.current).removeClass("hidden");
    $(closeButtonRef.current).addClass("hidden");
  }

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    // { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' }
  ];

  return (
    <div id="nav">
      <button
        ref={menuButtonRef}
        className={`button ${isMobile ? '' : 'hidden'}`}
        id="menu-button"
        onClick={showMenu}>Menu
      </button>
      <button
        ref={closeButtonRef}
        className={`button hidden ${isMobile ? '' : 'hidden'}`}
        id="close-button"
        onClick={closeMenu}>Close
      </button>

      {/* TODO fix the curr page thing */}
      <ul ref={dropdownRef} className={`${isMobile ? 'hidden' : ''}`} id="dropdown-ul">
        {pages.map((page, index) => (
          <li key={index} className={`menu-item ${isMobile ? 'hidden' : '' + location.pathname === page.path ? 'current-page' : ''}`}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
        <li className={`menu-item ${isMobile ? 'hidden' : ''}`}>
          <a href="Sophia_Wang_resume.pdf" target="_blank">Resume</a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;