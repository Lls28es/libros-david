import { Component, React } from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';
import Lectura from '../../components/Lectura';

function Maniac() {
  return (
    <div className="container-fluid px-0 disp_cont">
      <div className="row w-100 mx-0" id="wrapper">
        <Layout>
          <Head>
            <title>Libro Maniac</title>
          </Head>
          <div className="row align-items-center justify-content-center p-3">
            <Lectura
              detail={{
                title: 'Maniac',
                description:
                  ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: '/libros/0016400.webp',
                linkRead: 'maniac',
                linkMP: '',
                linkAmazon: '',
                read: (
                  <>
                    <p className="chapter">Capitulo 1: Nudo</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </>
                ),
              }}
            />
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default Maniac;
