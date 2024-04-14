import Link from 'next/link';

const Lectura = ({ detail }) => (
  <div className="row">
    {/* <div className="col-12">
      <img alt="menu-mobile" className="w-100" src={detail.image} />
    </div> */}
    <div className="col-12 detailBook">
      <h2 className="titleBook text-center">{detail.title}</h2>
      {/* <p className="subtBook">Descripción:</p> */}
      <div className="readBook">{detail.read}</div>
      <div className="boxButtonsBook justify-content-center mb-4">
        <a className="buttonBuy" href="/">
          Volver
        </a>
        <button className="buttonMore">Comprar</button>
      </div>
    </div>
  </div>
);

export default Lectura;
