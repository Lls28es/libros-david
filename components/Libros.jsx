import parse from 'html-react-parser';
import SpinnerColor from './SpinnerColor.jsx';
import Detail from './Detail.jsx';
// import Link from 'next/link';
// import { Tooltip } from '@nextui-org/react';

const Libros = ({ detail }) => {
  return (
    <div id="boxBook" className="row m-4 px-4">
      <div className="col-11 col-sm-10 col-md-5 col-lg-6 col-xl-5 imgBook">
        <img alt="menu-mobile" className="imageBook w-100" src={detail.image} />
      </div>
      <div className="col-11 col-sm-10 col-md-7  col-lg-6 col-xl-7 detailBook">
        <h2 className="titleBook">{parse(`${detail.title}`)}</h2>
        <p
          className={`${
            detail.observation === 'Disponible'
              ? 'observationBlue'
              : 'observationRed'
          }`}
        >
          {detail.observation}
        </p>

        {detail.observation !== 'No publicado' ? (
          <>
            <div className="detBook">
              <p className="detSubrBook fs-18">Año: </p>{' '}
              <p className="detMargBook fs-18">{detail.year}</p>
            </div>

            <p className="detSubrBook fs-18 mb-2">Descripción:</p>
            {typeof detail.description === 'string' ? (
              <p className="detNormBook fs-18">{detail.description}</p>
            ) : (
              <>
                {detail.description.length !== 0 &&
                detail.description[0].length > 10 ? (
                  <Detail description={detail.description} />
                ) : null}
              </>
            )}

            {/* {detail.observation === 'Disponible' ? (
              <div className="detBook">
                <p className="detSubrBook fs-18">Stock Físico: </p>{' '}
                <p className="detMargBook fs-18">{detail.stockPhysical}</p>
              </div>
            ) : null}

            {detail.observation === 'Disponible' ? (
              <div className="detBook">
                <p className="detSubrBook fs-18">Stock Digital: </p>{' '}
                <p className="detMargBook fs-18">{detail.stockDigital}</p>
              </div>
            ) : null} */}

            <div className="d-flex pt-2 pb-4">
              {/* {detail?.read && detail.read.length > 1000 ? (
                <a className="buttonBuy2" href={`/leer/libro?id=${detail.id}`}>
                  Leer
                </a>
              ) : (
                <button className="greyColor buttonBuy2">Leer</button>
              )} */}

              {detail?.gallery &&
              detail.gallery.amount &&
              detail.gallery?.amount !== 0 ? (
                <a
                  className="buttonBuy3"
                  href={`/galeria/libro?id=${detail.id}`}
                >
                  Galería
                </a>
              ) : (
                <button className="greyColor buttonBuy3">Galería</button>
              )}
            </div>

            <p className="detSubrBook fs-18">Métodos de compra:</p>

            <div className="boxButtonsBook my-2">
              {detail.linkAmazon ? (
                <a href={detail.linkAmazon} target="_blank">
                  <button className="buyAm buttonMl-0">
                    <img alt="buyAm" className="" src="/amazon.png" />
                  </button>
                </a>
              ) : (
                <button className="greyColor buyAm buttonMl-0">
                  <img alt="buyAm" src="/amazon.png" />
                </button>
              )}
              {detail.linkMP ? (
                <a href={detail.linkMP} target="_blank">
                  <button className="buyMP">
                    <img alt="buyMP" className="" src="Mercado-libre.jpg" />
                  </button>
                </a>
              ) : (
                <button className="greyColor buyMP">
                  <img alt="buyMP" className="" src="Mercado-libre.jpg" />
                </button>
              )}
            </div>
            <p className="fs-12 ff-gotham text-muted mx-2 my-1">
              {detail.linkAmazon && detail.linkAmazon
                ? '* Amazon libro físico y digital. Mercado Pago libro digital'
                : detail.linkAmazon
                ? '* Amazon: libro físico y digital'
                : detail.linkAmazon
                ? '*Mercado Pago: libro digital'
                : ''}
            </p>
          </>
        ) : (
          <SpinnerColor padding={'pb-4'} />
        )}
      </div>
    </div>
  );
};

export default Libros;
