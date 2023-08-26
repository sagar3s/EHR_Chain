
import React, { useEffect, useState } from "react";
import Header from '../components/Header';
// import styles from '../styles/Home.module.css'

// import MyNav from "../components/MyNav";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer";
import Head from 'next/head';
import Image from 'next/image';


const About = () => (
  <>
  <Head>
        <title>EHR Chain</title>
        <meta
          name="description"
          content="Platform for patient record and medical network"
        />
        <link rel="icon" href="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.15752-9/357330351_6566394126756962_6540851967248277045_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=XfZFYxUgMTQAX9KMtnE&_nc_oc=AQlBx0-PAMXNCU7k1HuH4Gyt-PvtMLfnRa9ilpSzVIGxly0I3afXhCucVRSvXBOKj7Y&_nc_ht=scontent.fktm6-1.fna&oh=03_AdR5ZqVonvGzhADHAhuyFBRL38aGLcTb4AKWPN6BJv7RLA&oe=64C7BF7E" />
      </Head>
    <Header />

    <main>
        <section className=" py-5">
          <div className="py-3">
            <div className="">
              <div className=" mx-auto w-75 my-5 bg-opacity-10">
                <div className="">
                  <div className="row1" >
                  <Image
                    src="/aboutImg.jpg"
                    alt="About Image"
                    className="col-xl-6"
                    width={500} // Set the desired width
                    height={350} // Set the desired height
                  />
                    <div className="col-xl-5 p-4 pt-5">
                      <h1 className=" my-4">How can we help you?</h1>
                      <p className="">
                        We seek to put the patients in control of their medical
                        data, giving them the power to share the single, most
                        comprehensive version of their record, with every
                        organisation in their medical network securely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section id="about" className="about">
            <div className="bg-danger bg-opacity-50 p-5 text-center">
              <h1>The Problem</h1>
              <p>
                An electronic health record is defined as an electronic version
                of a medical history of the patient as kept by the health care
                provider. But it consists of some major security and privacy
                flaws.
              </p>
            </div>
            <div className="container-fluid prob">
              <div className="row mx-auto w-75">
                <div className="icon-boxes d-flex flex-column align-items-stretch justify-content-center py-1 px-lg-5">
                  <div className="icon-box">
                    <div className="icon">
                      {" "}
                      
                      <Icon icon="dashicons:database-remove" className="pro-sol" />
                    </div>
                    <h4 className="title">Potential Cybersecurity Issues</h4>
                    <p className="description">
                      The data of the patients lies on a centralized database,
                      which are prone to Denial of Service (DoS) attacks and
                      single point of failure
                    </p>
                  </div>
                  <div className="icon-box">
                    <div className="icon">
                      {" "}
                      
                      <Icon icon="ri:git-repository-private-fill" className="pro-sol" />
                    </div>
                    <h4 className="title">Privacy of Patients</h4>
                    <p className="description">
                      If the database ever gets hacked. The data of the Patients
                      can get leaked into the world which is unethical.
                      Centralized systems are vulnerable to privacy attacks as
                      well.
                    </p>
                  </div>
                  <div className="icon-box">
                    <div className="icon">
                      {" "}
                      
                      <Icon icon="bpmn:data-output" className="pro-sol" />
                    </div>
                    <h4 className="title">Inaccurate Data</h4>
                    <p className="description">
                      If an EMR is not updated immediately, as soon as new
                      information is known, such as after test results come in,
                      anyone viewing that EMR could receive incorrect. This
                      could lead to errors in diagnosis and treatment.
                    </p>
                  </div>
                  <div className="icon-box">
                    <div className="icon">
                      {" "}
                      <Icon icon="emojione-monotone:money-mouth-face" className="pro-sol" />
                    </div>
                    <h4 className="title">Time and Money</h4>
                    <p className="description">
                      It also takes time to demo EHR products and negotiate with
                      EHR system vendors to choose and implement the right
                      system for your practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="about">
            <div className="bg-success bg-opacity-50 p-5 mt-5 text-center">
              <h1>Our Solutions</h1>
              <p>
                EHRChain provides a decentralized easy to use Electronic
                Medical Record system(EMR). It is a free web application
                providing a feature rich as well as interactive UI making it
                easy to use.
              </p>
            </div>
            <div className="container-fluid sol">
              <div className="row mx-auto w-75">
                <div className="icon-boxes d-flex flex-column align-items-stretch justify-content-center py-1 px-lg-5">
                  <div className="icon-box">
                    <div className="icon">
                      {" "}
                      
                      <Icon icon="dashicons:database-remove" className="pro-sol" />
                    </div>
                    <h4 className="title">Minimal Security Risks</h4>
                    <p className="description">
                      As previously mentioned. We use Ethereum Network for our
                      computation making it very safe and secure. There cannot
                      be a single point of failure.
                    </p>
                  </div>
                  <div className="icon-box">
                    <div className="icon">
                      {" "}
                      
                      <Icon icon="ri:git-repository-private-fill" className="pro-sol" />
                    </div>
                    <h4 className="title">Complete Privacy</h4>
                    <p className="description">
                      The application used IPFS technology for storage of
                      patient data. Every patient can control who can access
                      their data. Only registerd Organizations and verified
                      Medical Institute can access your data.
                    </p>
                  </div>
                  <div className="icon-box">
                    <div className="icon">
                      {" "}
                      
                      <Icon icon="bpmn:data-output" className="pro-sol" />
                    </div>
                    <h4 className="title">Verifies Admins</h4>
                    <p className="description">
                      For a Medical Institute to participate in this shared
                      system, it need to be verified by one of the admins. Same
                      goes for the Organizations. They require proper medical
                      and identity license to be succesfully registerd.
                    </p>
                  </div>
                  <div className="icon-box">
                    <div className="icon">
                      {" "}
                      <Icon icon="emojione-monotone:money-mouth-face" className="pro-sol" />
                    </div>
                    <h4 className="title">Non Profit</h4>
                    <p className="description">
                      EHRChain is a free to use, non profit system. One does
                      not need to buy this software. It is available for
                      everyone. There are some public open feautes which can be
                      accessed by anyone, be it admin, owner or someone visiting
                      the website for he first time. All that is required is a
                      crypto wallet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="my-5">
            <div className="text-center py-5 px-3 bg-info bg-opacity-40">
              <h2 className="">Made By:</h2>
              <h5> Ashish Khakural </h5>
              <h5> Asmeet Aryal </h5>
              <h5> Safal Panta </h5>
              <h5> Sagar Panta </h5>
              <h5> Sulav Shrestha </h5>
          
            </div>
          </div>
        </section>
      </main>

    <Footer />
  </>
);

export default About;
