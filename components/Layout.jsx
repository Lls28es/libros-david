import Header from './Header.jsx';
import Footer from './Footer.jsx';
// import { useRouter } from 'next/router';

const Layout = (props) => {
  // const router = useRouter();
  return (
    <div className="p-0">
      <Header />
      <div className="container-lg  layoutChild px-4">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
