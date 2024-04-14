import Header from './Header';
import Footer from './Footer';
// import { useRouter } from 'next/router';

const Layout = (props) => {
  // const router = useRouter();
  return (
    <div className='p-0'>
      <Header />
      <div className="layoutChild px-4">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
