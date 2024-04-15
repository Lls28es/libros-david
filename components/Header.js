import { React, Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header(props) {
  const router = useRouter();
  const [navBarOpen, setNavBarOpen] = useState(true);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    setCurrentPath(router.route);
    console.log(router);
  }, []);

  const toggleNavbar = () => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <Fragment>
      <div
        className="header"
        // id={this.props.isHome == "true" ? "header-transparent" : "header"}
        id="header"
      >
        <nav className="navbar navbar-expand-lg px-1">
          {/* <a className="navbar-brand" href="/">
              <img
                className="logo"
                alt="logo-prt-san-damaso"
                src="/images/logo-prt.png"
              />
            </a> */}
          <div
            className={
              navBarOpen
                ? 'collapse navbar-collapse show'
                : 'collapse navbar-collapse'
            }
            id="navbarToggler"
          >
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li
                className={currentPath == '/' ? 'nav-item active' : 'nav-item'}
              >
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li
                className={
                  currentPath == '/sobreMi' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href="/sobreMi" className="nav-link">
                  Sobre Mi
                </Link>
              </li>

              <li
                className={
                  currentPath == '/imagenes' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href="/imagenes" className="nav-link">
                  Imagenes utilizadas
                </Link>
              </li>

              <li
                className={
                  currentPath == '/contacto' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link href="/contacto" className="nav-link">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="logo"></div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <img
                alt="menu-mobile"
                className="w-100"
                src="/menu.png"
                onClick={() => toggleNavbar()}
              />
            </span>
          </button>
        </nav>
      </div>
    </Fragment>
  );
}
