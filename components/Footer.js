import Link from 'next/link';

const Footer = () => (
  <div id="footer">
    <div className="container-fluid py-4" id="footer-links">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <Link href="/sobreMi">
            <p className="fs-14">Sobre Mi</p>
          </Link>
        </div>
        <div className="col-md-3">
          <Link href="/contacto">
            <p className="fs-14">Contacto</p>
          </Link>
          {/* <Link href="/informacion#educacion">
            <p>Educación al usuario</p>
          </Link> */}
        </div>
        {/* <div className="col-md-3">
          <Link href="/reserva">
            <p>Reserva tu cita para RT</p>
          </Link>
          <Link href="/reservas/anular">
            <p>Anula tu reserva</p>
          </Link>
        </div> */}
        <div className="col-md-2"></div>
        <div className="col-md-1"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <hr />
          <p className="m-0">© 2024 | L Ll. Todos los derechos reservados</p>
        </div>
      </div>
    </div>
    {/*<div className="fixed-callcenter">
      <a href="tel:+56552844635">
        <img src="/images/callcenter2.png" />
      </a>
  </div>*/}
  </div>
);

export default Footer;
