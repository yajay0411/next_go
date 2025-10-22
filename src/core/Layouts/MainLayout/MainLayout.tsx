import React from 'react';

import Footer from '@/components/common/Footer/Footer';
import Navbar from '@/components/common/Navbar/Navbar';
import MaxWidthContainerLayout from '@/core/Layouts/MaxWidthContainerLayout/MaxWidthContainerLayout';

interface MainLayoutProps {
  showNavbar?: boolean;
  showFooter?: boolean;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  showNavbar: propShowNavbar,
  showFooter: propShowFooter,
  children,
}) => {
  const showNavbar = propShowNavbar !== undefined ? propShowNavbar : true;
  const showFooter = propShowFooter !== undefined ? propShowFooter : true;

  return (
    <>
      {showNavbar && <Navbar />}
      <main>
        <MaxWidthContainerLayout>{children}</MaxWidthContainerLayout>
      </main>
      {showFooter && <Footer />}
    </>
  );
};

export default MainLayout;
