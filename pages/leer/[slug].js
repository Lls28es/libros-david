import { React, Fragment, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';
import Lectura from '../../components/Lectura';
import ListaLibros from '../../components/ListaLibros';

function Index({ slug, id }) {
  const [book, setBook] = useState({ title: '' });
  useEffect(() => {
    setBook(ListaLibros.find((x) => x.id === Number(id)));
  }, []);

  return (
    <div className="container-fluid px-0 disp_cont">
      <div className="row w-100 mx-0" id="wrapper">
        <Layout>
          <Head>
            <title>Libro {book.title}</title>
          </Head>
          <div className="row align-items-center justify-content-center p-3">
            {book.title !== '' ? <Lectura detail={book} /> : null}
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
