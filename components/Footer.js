import React from "react";
import { Icon } from '@iconify/react';
import Link from 'next/link';


// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="" id="footer">
      <div className=" copy-right">
        <div className="icons-container">
          <a href="https://github.com/sagar3s/EHR_Chain" target="_blank" rel="noreferrer">
            <Icon icon="akar-icons:github-fill" color="#000000" />
          </a>
        </div>
        <div className=" text-center small py-3">
           Copyright © &nbsp;
          <Link href="/" className="fs-6 fw-bold text-info ms-1">
             EHRChain
          </Link>
          . All Rights Reserved.
        </div>

      </div>
    </div>
  );
};
export default Footer;
