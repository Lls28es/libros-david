import React, { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Libros from '../components/Libros';

function Home() {
  return (
    <div className="container-fluid px-0 disp_cont">
      <div className="row w-100 mx-0" id="wrapper">
        <Layout>
          <Head>
            <title>Libros</title>
          </Head>
          <div className="row align-items-center justify-content-center p-3 pb-4">
            <Libros
              detail={{
                title: 'Maniac',
                description:
                  ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: '/libros/0016400.webp',
                linkLeer: 'maniac',
                linkMP: '/Mercado-libre.jpg',
                linkAmazon: '/amazon.png',
              }}
            />
            <Libros
              detail={{
                title: 'El pensamiento posnazi',
                description:
                  ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: '/libros/0016401.webp',
                linkLeer: 'el-pensamiento-posnazi',
                linkMP: '/Mercado-libre.jpg',
                linkAmazon: '/amazon.png',
              }}
            />
            <Libros
              detail={{
                title: 'Lecciones',
                description:
                  ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: '/libros/0016402.webp',
                linkLeer: 'lecciones',
                linkMP: '/Mercado-libre.jpg',
                linkAmazon: '/amazon.png',
              }}
            />
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default Home;
