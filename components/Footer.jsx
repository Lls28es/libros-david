import Link from 'next/link';

const Footer = () => (
  <div id="footer">
    <div className="container-fluid py-4" id="footer-links">
      <div className="row">
        <hr />
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <Link
            href="mailto:nicolasdavidtrape@gmail.com"
            target="_blank"
            className="d-flex align-items-center mb-2"
          >
            <img
              src="/icon-mail.png"
              alt="login form"
              width="28px"
              className="img-fluid logo-black mx-1"
            />
            <p className="fs-14 mb-1">nicolasdavidtrape@gmail.com</p>
          </Link>
          <Link
            href="https://www.instagram.com/axeltrape/"
            target="_blank"
            className="d-flex align-items-center mb-2"
          >
            <img
              src="/icon-instagram.png"
              alt="login form"
              width="29px"
              className="img-fluid logo-black mx-1"
            />
            <p className="fs-14 mb-1">@axeltrape</p>
          </Link>
          <Link
            href="https://www.instagram.com/malvinas_por_david_trape_libro/"
            target="_blank"
            className="d-flex align-items-center mb-2"
          >
            <img
              src="/icon-instagram.png"
              alt="login form"
              width="29px"
              className="img-fluid logo-black mx-1"
            />
            <p className="fs-14 mb-1">@malvinas_por_david_trape_libro</p>
          </Link>
          <Link
            href="https://www.facebook.com/p/Malvinas-Por-David-Trap%C3%A9-100078081248267"
            target="_blank"
            className="d-flex align-items-center mb-2"
          >
            <img
              src="/icon-facebook.png"
              alt="login form"
              width="27px"
              className="img-fluid logo-black mx-1"
            />
            <p className="fs-14 mb-1">Malvinas Por David Trapé</p>
          </Link>
          {/* <Link href="/contacto">
            <p className="fs-14">Contacto</p>
          </Link> */}
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <p className="fs-14 mb-1 text-end">Sitio web creado por </p>
          <Link
            href="mailto:luciallprogramacion@gmail.com"
            target="_blank"
            className="mb-2"
          >
            <p className="fs-14 mb-1 text-end">luciallprogramacion@gmail.com</p>
          </Link>
        </div>
        <div className="col-md-1"></div>
        {/* <div className="col-md-1"></div> */}
      </div>
      {/* <div className="row">
        <div className="col-md-12">
          <hr />
          <p className="m-0">
            Sitio web creado por:
            <br />
            luciallprogramacion@gmail.com
          </p>
        </div>
      </div> */}
    </div>
    {/* <div className="fixed-callcenter">
      <a href="tel:+56544444444">
        <img src="/images/image.png" />
      </a>
    </div> */}
  </div>
);

export default Footer;
