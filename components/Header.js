import Logo from "../components/Logo";
import config from "../config/config.json";
import menu from "../config/menu.json";
import Link from "next/link";
import Head from 'next/head';
import { useRouter } from "next/router";
import React, { useState } from "react";
//import { useWeb3React } from '@web3-react/core';
import { Button } from 'semantic-ui-react';

const Header = () => {
  //router
  const router = useRouter();
  //const { account, deactivate } = useWeb3React();

  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navOpen, setNavOpen] = useState(false);

  // logo source
  const { logo } = config.site;
  const { enable, label, link} = config.nav_button;

  return (
    <header className="header">
            <Head>
        <title>EHR Chain</title>
        <meta
          name="description"
          content="Platform for patient record and medical network"
        />
        <link rel="icon" href="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.15752-9/357330351_6566394126756962_6540851967248277045_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=XfZFYxUgMTQAX9KMtnE&_nc_oc=AQlBx0-PAMXNCU7k1HuH4Gyt-PvtMLfnRa9ilpSzVIGxly0I3afXhCucVRSvXBOKj7Y&_nc_ht=scontent.fktm6-1.fna&oh=03_AdR5ZqVonvGzhADHAhuyFBRL38aGLcTb4AKWPN6BJv7RLA&oe=64C7BF7E" />
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0">
          <Logo src={logo} />
        </div>

        {/* navbar toggler */}
        <button
          id="show-button"
          className="order-2 flex cursor-pointer items-center md:hidden md:order-1"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          id="nav-menu"
          className={`order-3 md:order-1 ${
            navOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          
          <ul className="navbar-nav block w-full md:flex md:w-auto">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span className="nav-link inline-flex items-center">
                      {menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <Link
                            href={child.url}
                            className="nav-dropdown-link block"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      onClick={() => setNavOpen(false)}
                      className={`nav-link block ${
                        router.asPath === menu.url ? "nav-link-active" : ""
                      }`}
                      style={{ fontSize: '18px' }} // Set the font size here
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
                
              </React.Fragment>
            ))}
            
          </ul>
        </div>
        {/* {account ? (
          <div className="d-flex order-1 ml-auto min-w-[200px] items-center justify-end md:ml-0 md:flex md:order-2">
            <Button color="red" onClick={() => deactivate()}>
              Logout
            </Button>
          </div>
        ) :  */}
        {(
          enable && (
            <div className="d-flex order-1 ml-auto min-w-[200px] items-center justify-end md:ml-0 md:flex md:order-2">
              <Link href="/medical-records" rel="">
                <a className="getStartedButton">
                  {label}
                </a>
              </Link>
            </div>
          )
        )}
      </nav>
    </header>
  );
};

export default Header;
