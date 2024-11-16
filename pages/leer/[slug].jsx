import { React, useEffect, useState } from 'react';
import Head from 'next/head';
import parse from 'html-react-parser';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { auth, db } from '../../services/firebase';
import Layout from '../../components/Layout.jsx';
import Lectura from '../../components/Lectura.jsx';
import SpinnerColor from '../../components/SpinnerColor.jsx';

function Leer({ id }) {
  const [book, setBook] = useState({ title: '' });

  useEffect(() => {
    if (id) {
      fetchBook(id);
    }
  }, [id]);

  const fetchBook = async (bookId) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        process.env.NEXT_PUBLIC_FIREBASE_EMAIL,
        process.env.NEXT_PUBLIC_FIREBASE_PASS
      );
      const bookRef = doc(db, 'libros', bookId);
      const bookDoc = await getDoc(bookRef);
      if (bookDoc.exists()) {
        const contentQuery = query(
          collection(db, 'contenidosLibros'),
          where('libroId', '==', bookId)
        );
        const contentSnapshot = await getDocs(contentQuery);

        let data = bookDoc.data();
        data.id = id;
        setBook(
          !contentSnapshot.empty
            ? Object.assign(data, contentSnapshot.docs[0].data())
            : data
        );
      }
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };

  return (
    <div className="container-fluid px-0 disp_cont">
      <div className="row w-100 mx-0" id="wrapper">
        <Layout>
          <Head>
            <title>{parse(`${book.title}`)}</title>
          </Head>
          <div className="row align-items-center justify-content-center p-3">
            {book.title !== '' && book.read ? (
              <Lectura detail={book} />
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

export async function getServerSideProps(contInt) {
  return {
    props: { slug: contInt.query['slug'], id: contInt.query['id'] },
  };
}

export default Leer;
