import { React, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';
import Lectura from '../../components/Lectura';
import ListaLibros from '../../components/ListaLibros';
import ListImages from '../../components/ListImages';

function Index({ slug, id }) {
  const [book, setBook] = useState({ title: '' });
  const [images, setImages] = useState([]);
  useEffect(() => {
    let aux = ListaLibros.find((x) => x.id === Number(id));
    setBook(aux);
    fun(aux);
  }, []);

  const fun = (data) => {
    let aux = [];
    let amount = data.gallery.amount;
    for (let i = 1; i < amount; i++) {
      aux.push(`imagen ${i}`);
    }
    setImages(aux);
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
              {book.title !== '' ? (
                <div className="bookImages col-12 py-2">
                  <h2 className="p-1">{book.title}</h2>
                  <div className="row justify-content-center p-4">
                    <a className="buttonBuy" href="/">
                      Volver
                    </a>

                    <a
                      className="buttonMore"
                      href={`/leer/${book.linkRead}?id=${book.id}`}
                    >
                      Leer
                    </a>
                  </div>
                  <div className="boxImages row">
                    {images.length !== 0
                      ? images.map((x, i) => {
                          let aux = book.imageDesc[i].indexOf(':') + 1;
                          aux = book.imageDesc[i]
                            .slice(aux, book.imageDesc[i].length)
                            .trim();
                          return (
                            <ListImages
                              image={{
                                alt: `${x}`,
                                src: `/libros/${slug}/${x}.jpg`,
                              }}
                              desc={aux}
                              index={i}
                              key={i}
                            />
                          );
                        })
                      : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export async function getServerSideProps(contInt) {
  return {
    props: { slug: contInt.query['slug'], id: contInt.query['id'] },
  };
}

export default Index;
