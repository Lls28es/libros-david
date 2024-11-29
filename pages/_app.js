import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Basic_FontSize-Medias.scss';
import '../styles/style.css';
import '../styles/DVStyles.scss';
import '../styles/estilosGenerales.scss';
import '../styles/mediaQueries.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
