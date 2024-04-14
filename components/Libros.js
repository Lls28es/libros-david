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

      {detail.linkMP || detail.linkAmazon ? (
        <>
          <a className="buttonBuy" href={`/leer/${detail.linkLeer}`}>
            Leer
          </a>
          <p className="subtBook mt-4">Métodos de compra:</p>
          <div className="boxButtonsBook mt-1 mb-3">
            {detail.linkAmazon ? (
              <button className="buyAm">
                <img alt="buyAm" className="" src={detail.linkAmazon} />
              </button>
            ) : null}
            {detail.linkMP ? (
              <button className="buyMP">
                <img alt="buyMP" className="" src={detail.linkMP} />
              </button>
            ) : null}
          </div>
        </>
      ) : (
        <div className="boxButtonsBook">
          <a className="buttonBuy" href={`/leer/${detail.linkLeer}`}>
            Leer
          </a>
          <button className="buttonMore">Comprar</button>
        </div>
      )}
    </div>
  </div>
);

export default Libros;
