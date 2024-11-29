import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import Layout from '../components/Layout.jsx';
import Libros from '../components/Libros.jsx';
import SpinnerColor from '../components/SpinnerColor.jsx';
import { findElement, sortOrder } from '../components/SortFunctions.js';

function Home() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        await signInWithEmailAndPassword(
          auth,
          process.env.NEXT_PUBLIC_FIREBASE_EMAIL,
          process.env.NEXT_PUBLIC_FIREBASE_PASS
        );

        const querySnapshotContents = await getDocs(
          collection(db, 'contenidosLibros')
        );
        let contenidosDB = querySnapshotContents.docs.map((doc) => {
          let data = doc.data();
          data.contenidoId = doc.id;

          return data;
        });

        const querySnapshotBooks = await getDocs(collection(db, 'libros'));
        let librosDB = querySnapshotBooks.docs.map((doc) => {
          let data = doc.data();
          data.id = doc.id;

          let contenidoMatch = findElement(contenidosDB, 'libroId', data.id);

          return contenidoMatch ? Object.assign(data, contenidoMatch) : data;
        });
        librosDB.sort(sortOrder);

        setLibros(librosDB);
      } catch (error) {
        console.error('Error fetching libros:', error);
      }
    };

    fetchLibros();
  }, []);

  return (
    <div className="container-fluid px-0 disp_cont">
      <div className="row w-100 mx-0" id="wrapper">
        <Layout>
          <Head>
            <title>Libros</title>
          </Head>
          <div
            id="bodyCont"
            className="row align-items-center justify-content-center p-3 pb-4"
          >
            {libros.length !== 0 ? (
              libros.map((x, i) => {
                return <Libros detail={x} key={i} />;
              })
            ) : (
              <div className="col-md-12 mt-5 pt-5">
                <SpinnerColor padding={'pt-4'} />
              </div>
            )}
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default Home;
