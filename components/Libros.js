import Link from 'next/link';
import { Tooltip } from '@nextui-org/react';

const Libros = ({ detail }) => {
  return (
    <div id="boxBook" className="row m-4 px-4">
      {/* {console.log(detail)} */}
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
            <div className="detBook">
              <p className="detSubrBook">Año: </p>{' '}
              <p className="detMargBook">{detail.year}</p>
            </div>

            <p className="detSubrBook mb-2">Descripción:</p>
            {typeof detail.description === 'string' ? (
              <p className="detNormBook">{detail.description}</p>
            ) : (
              <>
                {detail.description.length !== 0
                  ? detail.description.map((x, i) => {
                      detail.count = detail.description
                        .slice(0, i + 1)
                        .join(',').length;

                      if (detail.count < 2400 || i === 0) {
                        return (
                          <p className="detNormBook" key={i}>
                            {x}
                          </p>
                        );
                      }
                    })
                  : null}
              </>
            )}

            {/* {detail.observation === 'Disponible' ? (
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
            ) : null} */}

            <div className="d-flex pt-2 pb-4">
              {detail?.linkLeer ? (
                <a
                  className="buttonBuy2"
                  href={`/leer/${detail.linkLeer}?id=${detail.id}`}
                >
                  Leer
                </a>
              ) : (
                <button className="greyColor buttonBuy2">Leer</button>
              )}

              {detail?.gallery ? (
                <a
                  className="buttonBuy3"
                  href={`/galeria/${detail.gallery.file}`}
                >
                  Galería
                </a>
              ) : (
                <button className="greyColor buttonBuy3">Galería</button>
              )}
            </div>

            <p className="detSubrBook">Métodos de compra:</p>

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
            <p className="fs-12 ff-gotham text-muted mt-1 mx-2">
              {detail.linkAmazon && detail.linkAmazon
                ? '* Amazon libro físico y digital. Mercado Pago libro digital'
                : detail.linkAmazon
                ? '* Amazon: libro físico y digital'
                : detail.linkAmazon
                ? '*Mercado Pago: libro digital'
                : ''}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Libros;
