import React from 'react';
import ContactForm from '../components/contactform';
import Header from '../components/Header';
import Footer from '../components/Footer';
const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Us</h1>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
