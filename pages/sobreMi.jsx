import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout.jsx';
import SpinnerColor from '../components/SpinnerColor.jsx';

function SobreMi() {
  return (
    <div className="container-fluid px-0 disp_cont">
      <div className="row w-100 mx-0" id="wrapper">
        <Layout>
          <Head>
            <title>Libros</title>
          </Head>
          <div className="row align-items-center justify-content-center p-3 pb-4">
            <div className="col-md-12 mt-5 pt-5">
              <SpinnerColor padding={'pt-4'} />
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default SobreMi;
