import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Libros from '../components/Libros';
import ListaLibros from '../components/ListaLibros';
import { auth, db } from '../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';

function Home() {
  return (
    <div className="container-fluid px-0 disp_cont">
      <div className="row w-100 mx-0" id="wrapper">
        <Layout>
          <Head>
            <title>Libros</title>
          </Head>
          <div className="row align-items-center justify-content-center p-3 pb-4">
            {ListaLibros.map((x, i) => {
              return <Libros detail={x} key={i} />;
            })}
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default Home;
