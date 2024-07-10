import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import parse from 'html-react-parser';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, getDownloadURL } from 'firebase/storage';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db, storage } from '../services/firebase';
import Layout from '../components/Layout.jsx';
import ListImages from '../components/ListImages.jsx';
import SpinnerColor from '../components/SpinnerColor.jsx';
import { findElement, sortOrder } from '../components/SortFunctions.js';

function Imagenes() {
  const [books, setBooks] = useState([]);

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
          data.imagesUrl = [];
          data.id = doc.id;

          let contenidoMatch = findElement(contenidosDB, 'libroId', data.id);
          return contenidoMatch ? Object.assign(data, contenidoMatch) : data;
        });
        librosDB.sort(sortOrder);

        const updatedLibrosDB = await Promise.all(
          librosDB.map(async (element) => {
            if (
              element?.gallery &&
              element.gallery.amount !== 0 &&
              element?.gallery?.file
            ) {
              element.imagesUrl = await fetchImageUrls(element);
            }
            return element;
          })
        );

        setBooks(updatedLibrosDB);
      } catch (error) {
        console.error('Error fetching libros:', error);
      }
    };

    fetchLibros();
  }, []);

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
              {books.length !== 0 ? (
                books.map((y, j) => {
                  if (y.imagesUrl.length !== 0)
                    return (
                      <div className="bookImages col-12 py-2" key={j}>
                        <h2 className="p-1">{parse(`${y.title}`)}</h2>
                        <div className="boxImages row">
                          {y.imagesUrl.map((x, i) => {
                            if (x.src)
                              return (
                                <ListImages
                                  image={x}
                                  index={j + i}
                                  key={j + i}
                                />
                              );
                          })}
                        </div>
                        <hr className="mt-5" />
                      </div>
                    );
                })
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

export default Imagenes;
