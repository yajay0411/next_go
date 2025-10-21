'use client';
import React from 'react';

import MaxWidthContainerLayout from '@/core/Layouts/MaxWidthContainerLayout/MaxWidthContainerLayout';

import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <MaxWidthContainerLayout className="footer-mwc">
          <div className="footer-container">footer</div>
        </MaxWidthContainerLayout>
      </footer>
    </>
  );
};

export default Footer;
