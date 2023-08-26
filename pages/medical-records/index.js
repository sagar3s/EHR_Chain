import React from 'react';
import { Image } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginCards from '../../components/LoginCards';

const MedicalNetworkHome = () => {
  return (
    <>
<div style={{ marginTop: '-18px' }}>
      <link
        async
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
      />
      <Header />
      <LoginCards />
      <Footer />
    </div>
    </>
  );
};

export default MedicalNetworkHome;
