import { React, useEffect, useState } from 'react';
import Head from 'next/head';
import parse from 'html-react-parser';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, getDownloadURL } from 'firebase/storage';
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { auth, db, storage } from '../../services/firebase';
import Layout from '../../components/Layout.jsx';
import ListImages from '../../components/ListImages.jsx';
import SpinnerColor from '../../components/SpinnerColor.jsx';

function Galeria({ id }) {
  const [book, setBook] = useState({ title: '' });
  const [images, setImages] = useState([]);
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
        let bookData = bookDoc.data();

        const contentQuery = query(
          collection(db, 'contenidosLibros'),
          where('libroId', '==', bookId)
        );
        const contentSnapshot = await getDocs(contentQuery);

        setBook(
          !contentSnapshot.empty
            ? (bookData = Object.assign(
                bookData,
                contentSnapshot.docs[0].data()
              ))
            : bookData
        );

        if (bookData?.gallery?.amount && bookData?.gallery?.file) {
          const imageUrls = await fetchImageUrls(bookData);
          setImages(imageUrls);
        }
      }
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };

  const fetchImageUrls = async (book) => {
    let { gallery, imageDesc } = book;

    const imageUrls = await Promise.all(
      Array.from({ length: gallery.amount }, async (_, i) => {
        let description = '';
        if (imageDesc[i] !== undefined) {
          description = imageDesc[i].indexOf(':') + 1;
          description = imageDesc[i]
            .slice(description, imageDesc[i].length)
            .trim();
        }

        try {
          const imageRef = ref(storage, `${gallery.file}/Imagen ${i + 1}.jpg`);
          const url = await getDownloadURL(imageRef);

          return {
            src: url,
            alt: `Imagen ${i + 1}.jpg`,
            description: description,
          };
        } catch (error) {
          console.error('Error fetching image URL:', error);
          return null;
        }
      })
    );

    return imageUrls.filter((url) => url !== null);
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
                  <h2 className="p-1">{parse(`${book.title}`)}</h2>
                  <div className="row justify-content-center p-4">
                    <a className="buttonBuy" href="/">
                      Volver
                    </a>

                    {book?.read && book.read.length > 1000 ? (
                      <a
                        className="buttonMore"
                        href={`/leer/libro?id=${book.id}`}
                      >
                        Leer
                      </a>
                    ) : (
                      <button className="greyColor buttonMore">Leer</button>
                    )}
                  </div>
                  <div className="boxImages row">
                    {images.length !== 0 ? (
                      images.map((x, i) => {
                        if (x.src)
                          return <ListImages image={x} index={i} key={i} />;
                      })
                    ) : (
                      <SpinnerColor padding={'pt-4'} />
                    )}
                  </div>
                  <div className="row justify-content-center p-4">
                    <a className="buttonBuy" href="/">
                      Volver
                    </a>

                    {book?.read && book.read.length > 1000 ? (
                      <a
                        className="buttonMore"
                        href={`/leer/libro?id=${book.id}`}
                      >
                        Leer
                      </a>
                    ) : (
                      <button className="greyColor buttonMore">Leer</button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="col-md-12 mt-5 pt-5">
                  <SpinnerColor padding={'pt-4'} />
                </div>
              )}
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

export default Galeria;
