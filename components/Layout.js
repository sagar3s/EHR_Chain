import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Script from 'next/script';
import Header from './Header';


const Layout = (props) => {
  return (
    <Container>
      <Head>
        <title>EHRchain</title>
        <meta
          name="description"
          content="Platform for patient record and medical network"
        />
        <link rel="icon" href="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.15752-9/357330351_6566394126756962_6540851967248277045_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=XfZFYxUgMTQAX9KMtnE&_nc_oc=AQlBx0-PAMXNCU7k1HuH4Gyt-PvtMLfnRa9ilpSzVIGxly0I3afXhCucVRSvXBOKj7Y&_nc_ht=scontent.fktm6-1.fna&oh=03_AdR5ZqVonvGzhADHAhuyFBRL38aGLcTb4AKWPN6BJv7RLA&oe=64C7BF7E" />
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></Script>

      <Header />
      {props.children}
    </Container>
  );
};

export default Layout;
