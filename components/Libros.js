import Link from 'next/link';
import { Tooltip } from '@nextui-org/react';

const Libros = ({ detail }) => (
  <div id="boxBook" className="row m-4 px-4">
    <div className="col-4">
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

      {detail.observation !== 'No publicado' ? (
        <>
          <p className="detSubrBook">Descripción:</p>
          <p className="detNormBook">{detail.description}</p>

          {detail.observation === 'Disponible' ? (
            <div className="detBook">
              <p className="detSubrBook">Stock Físico: </p>{' '}
              <p className="detMargBook">{detail.stockFisico}</p>
            </div>
          ) : null}

          {detail.observation === 'Disponible' ? (
            <div className="detBook">
              <p className="detSubrBook">Stock Digital: </p>{' '}
              <p className="detMargBook">{detail.stockDigital}</p>
            </div>
          ) : null}

          <div className="detBook">
            <p className="detSubrBook">Año: </p>{' '}
            <p className="detMargBook">{detail.year}</p>
          </div>

          <div className="d-flex pt-2 pb-4">
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

          <p className="detSubrBook">Métodos de compra:</p>

          <div className="boxButtonsBook my-2">
            {detail.linkAmazon ? (
              <Tooltip
                content={'libro físico y digital'}
                color="invert"
                placement="bottom"
                animated="false"
                hideArrow="true"
              >
                <button className="buyAm buttonMl-0">
                  <img alt="buyAm" className="" src="/amazon.png" />
                </button>
              </Tooltip>
            ) : (
              <button className="greyColor buyAm buttonMl-0">
                <img alt="buyAm" src="/amazon.png" />
              </button>
            )}
            {detail.linkMP ? (
              <Tooltip
                content={'libro digital'}
                color="invert"
                placement="bottom"
                animated="false"
                hideArrow="true"
              >
                <button className="buyMP">
                  <img alt="buyMP" className="" src="Mercado-libre.jpg" />
                </button>
              </Tooltip>
            ) : (
              <button className="greyColor buyMP">
                <img alt="buyMP" className="" src="Mercado-libre.jpg" />
              </button>
            )}
          </div>
          {/* <p className="fs-12 ff-gotham text-muted mt-5 mx-2">
            {detail.linkAmazon && detail.linkAmazon
              ? '* Amazon libro físico y digital. Mercado Pago libro digital'
              : detail.linkAmazon
              ? '* Amazon: libro físico y digital'
              : detail.linkAmazon
              ? '*Mercado Pago: libro digital'
              : ''}
          </p> */}
        </>
      ) : null}
    </div>
  </div>
);

export default Libros;
