import { Component, React } from 'react';
import Layout from '../../components/Layout';
import Head from 'next/head';
import Lectura from '../../components/Lectura';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.slug,
    };
  }

  render() {
    return (
      <div className="container-fluid px-0 disp_cont">
        <div className="row w-100 mx-0" id="wrapper">
          <Layout>
            <Head>
              <title>Libro {this.state.slug}</title>
            </Head>
            <div className="row align-items-center justify-content-center p-3">
              <Lectura />
            </div>
          </Layout>
        </div>
      </div>
    );
  }
}

export async function getServerSideProps(contInt) {
  console.log();
  return { props: { slug: contInt.params['slug'] } };
}

export default Index;
