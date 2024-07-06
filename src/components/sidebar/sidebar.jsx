"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useSliding } from '../../components/sidebar/SlidingContext';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { sliding } = useSliding();

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (pathname === '/app') return null;
  if (pathname === '/app/projectsbygit') return null;
  if (pathname === '/app/contactbygit') return null;
  
  const pathUrl = usePathname();

  return (
    <aside className={`aside ${sliding? "sliding" : ""} ${open ? "open" : ""} `}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/" onClick={handleClose}>
            Shubham
          </Link>
        </div>
        <ul className="nav">
          <li onClick={handleClose}>
            <Link href="/" className={`${pathUrl == "/" && "active"}`}>
              <i className="fa fa-home" /> Home
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/about"
              className={`${pathUrl == "/about" && "active"}`}
            >
              <i className="fa fa-user" /> About
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/projects"
              className={`${pathUrl == "/projects" && "active"}`}
            >
              <i className="fa fa-briefcase" /> Projects
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/contact"
              className={`${pathUrl == "/contact" && "active"}`}
            >
              <i className="fa fa-comments" /> Contact
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/features"
              className={`${pathUrl == "/features" && "active"}`}
            >
              <i className="fa fa-magic" /> Features
            </Link>
          </li>
        </ul>
        <div className="copyright">
          Created with ❤️ By{" "}
          <a href="http://shubham.com" target="_blank" rel="noopener noreferrer">
            Shubham
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
