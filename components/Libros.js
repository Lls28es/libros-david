import Link from 'next/link';

const Libros = ({ detail }) => (
  <div id="boxBook" className="row m-4 px-4">
    <div className="col-4">
      {console.log(detail)}
      <img alt="menu-mobile" className="imageBook w-100" src={detail.image} />
    </div>
    <div className="col-8 detailBook">
      <h2 className="titleBook">{detail.title}</h2>
      <p
        className={`${
          detail.observation === 'Disponible'
            ? 'observationBlue'
            : 'observationRed'
        }`}
      >
        {detail.observation}
      </p>

      <p className="detSubrBook">Descripción:</p>
      <p className="detNormBook">{detail.description}</p>
      {detail.observation === 'Disponible' ? (
        <div className="detBook">
          <p className="detSubrBook">Stock: </p>{' '}
          <p className="detMargBook">{detail.stock}</p>
        </div>
      ) : null}

      <div className="detBook">
        <p className="detSubrBook">Año: </p>{' '}
        <p className="detMargBook">{detail.year}</p>
      </div>

      <div className="d-flex pt-2">
        <a
          className="buttonBuy buttonMl-0"
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

      <p className="detSubrBook mt-4">Métodos de compra:</p>

      <div className="boxButtonsBook mt-1 mb-3">
        {detail.linkAmazon ? (
          <button className="buyAm  buttonMl-0">
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
