"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSliding } from '../../components/sidebar/SlidingContext';
import PopupAlert from './../Celebration/PopupAlert'; 

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { sliding } = useSliding();
  const [showPopup, setShowPopup] = useState(false);
  
  const isHomePage = pathname === '/';

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  if (pathname === '/app' || pathname === '/app/projectsbygit' || pathname === '/app/contactbygit' || pathname === '/app/search') return null;

  return (
    <>
    <aside className={`aside ${sliding ? "sliding" : ""} ${open ? "open" : ""}`}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        {isHomePage && (
          <div className="logo" style={{marginTop: '40px', marginBottom: '100px'}}>
            <Link href="/" onClick={handleClose}>
              CodeCraft
            </Link>
          </div>
        )}
        {!isHomePage && (
          <div className="logo-container">
            <img src="/imgs/Formal_DP.jpg" alt="Logo" className="logo-image" />
          </div>
        )}
        <ul className="nav">
          <li onClick={handleClose}>
            <Link href="/" className={`${pathname === "/" && "active"}`}>
              <i className="fa fa-home" /> Home
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/about" className={`${pathname === "/about" && "active"}`}>
              <i className="fa fa-user" /> About
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/projects" className={`${pathname === "/projects" && "active"}`}>
              <i className="fa fa-briefcase" /> Projects
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/features" className={`${pathname === "/features" && "active"}`}>
              <i className="fa fa-magic" /> Features
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/contact" className={`${pathname === "/contact" && "active"}`}>
              <i className="fa fa-comments" /> Contact
            </Link>
          </li>
        </ul>
        {!isHomePage && (
          <div className="logo" style={{marginBottom: '20px'}}>
            <Link href="/" onClick={handleClose}>
              CodeCraft
            </Link>
          </div>
        )}
          <div className="copyright" style={{ marginLeft: '13px' }}>
            Created with ❤️ by{" "}
            <button onClick={handlePopupOpen} className="glowing-text" >
              Shubham
            </button>
          </div>
      </div>
    </aside>
    {showPopup && (
      <PopupAlert
        message="Shubham says: Thanks for visiting 🤝"
        onClose={handlePopupClose}
      />
    )}
    </>
  );
};

export default Sidebar;

