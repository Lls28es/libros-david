import { React, Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ListaLibros from '../components/ListaLibros';
import ListImages from '../components/ListImages';

function Imagenes() {
  const [books, setBooks] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    fun(ListaLibros);
  }, []);

  const fun = (data) => {
    let auxImages = [];
    data.forEach((x) => {
      let aux = [];
      if (x?.gallery) {
        x.gallery.dir = x.gallery.file.slice(0, x.gallery.file.indexOf('?'));
        let amount = x.gallery.amount;
        for (let i = 1; i < amount; i++) {
          aux.push(`/imagen ${i}`);
        }
      }
      auxImages.push(aux);
    });

    setBooks(data);
    setImages(auxImages);
  };

  return (
    <div className="container-fluid px-0 disp_cont">
      <div className="row w-100 mx-0" id="wrapper">
        <Layout>
          <Head>
            <title>Galería</title>
          </Head>
          <div className="row align-items-center justify-content-center px-3 pb-4">
            <div id="boxBook" className="row">
              {books.length !== 0
                ? books.map((y, j) => {
                    return (
                      <>
                        {images[j].length !== 0 ? (
                          <div className="bookImages col-12 py-2">
                            <h2 className="p-1">{y.title}</h2>
                            <div className="boxImages row">
                              {images[j].length !== 0
                                ? images[j].map((x, i) => {
                                    let aux = images[j][i];
                                    return (
                                      <ListImages
                                        image={{
                                          alt: `${aux}`,
                                          src: `/libros/${y.gallery.dir}/${aux}.jpg`,
                                        }}
                                        index={j + i}
                                        key={j + i}
                                      />
                                    );
                                  })
                                : null}
                            </div>
                            <hr className="mt-5" />
                          </div>
                        ) : null}
                      </>
                    );
                  })
                : null}
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default Imagenes;
