import Link from 'next/link';

const Libros = ({ detail }) => (
  <div id="boxBook" className="row m-4 px-4">
    <div className="col-4">
      <img alt="menu-mobile" className="imageBook w-100" src={detail.image} />
    </div>
    <div className="col-8 detailBook">
      <h2 className="titleBook">{detail.title}</h2>
      <p className="subtBook">Descripción:</p>
      <p className="descBook">{detail.description}</p>
      <div className="d-flex">
        <a
          className="buttonBuy"
          href={`/leer/${detail.linkLeer}?id=${detail.id}`}
        >
          Leer
        </a>
        <a
          className="buttonBuy2"
          href={`/leer/${detail.linkLeer}?id=${detail.id}`}
        >
          Leer
        </a>
        <a className="buttonBuy3" href={`/galeria/${detail.gallery.file}`}>
          Galería
        </a>
      </div>

      <p className="subtBook mt-4">Métodos de compra:</p>

      <div className="boxButtonsBook mt-1 mb-3">
        {detail.linkAmazon ? (
          <button className="buyAm">
            <img alt="buyAm" className="" src="/amazon.png" />
          </button>
        ) : null}
        {detail.linkMP ? (
          <button className="buyMP">
            <img alt="buyMP" className="" src="Mercado-libre.jpg" />
          </button>
        ) : null}
      </div>
    </div>
  </div>
);

export default Libros;
