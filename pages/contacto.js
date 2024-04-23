import React, { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

function Contacto() {
  return (
    <div className="container-fluid px-0 disp_cont">
      <div className="row w-100 mx-0" id="wrapper">
        <Layout>
          <Head>
            <title>Libros</title>
          </Head>
          <div className="row align-items-center justify-content-center p-3 pb-4">
            CONTACTO
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default Contacto;
