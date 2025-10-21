'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MaxWidthContainerLayout from '@/core/Layouts/MaxWidthContainerLayout/MaxWidthContainerLayout';

import logo from '@/assets/images/logo.svg';

import styles from './Navbar.module.scss';

// Configuration interface for Navbar
export type NavbarConfig = {
  showLogo?: boolean;
  showNavLinks?: boolean;
  showGetStarted?: boolean;
  showSignIn?: boolean;
  showMobileMenu?: boolean;
  logo?: {
    src: string;
    alt: string;
    width?: number | null;
    height?: number | null;
  };
  navLinks?: Array<{
    label: string;
    href: string;
    target?: string;
    external?: boolean;
  }>;
  getStarted?: {
    label: string;
    href: string;
    target?: string;
    external?: boolean;
  };
  signIn?: {
    label: string;
    href: string;
    target?: string;
    external?: boolean;
  };
  theme?: 'light' | 'dark';
};

// Default configuration
const defaultConfig: NavbarConfig = {
  showLogo: true,
  showNavLinks: true,
  showGetStarted: true,
  showSignIn: true,
  showMobileMenu: true,
  logo: {
    src: logo, // Update with actual logo path
    alt: 'MetaGO',
    width: null,
    height: null,
  },
  navLinks: [
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Benefits', href: '/benefits' },
    { label: 'FAQs', href: '/faqs' },
  ],
  getStarted: {
    label: 'Get Started',
    href: '/get-started',
  },
  signIn: {
    label: 'Sign in',
    href: '/signin',
  },
  theme: 'light',
};

interface NavbarProps {
  config?: Partial<NavbarConfig>;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ config = {}, className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Merge default config with provided config
  const navbarConfig: NavbarConfig = {
    ...defaultConfig,
    ...config,
    logo: config.logo ? { ...defaultConfig.logo, ...config.logo } : defaultConfig.logo,
    navLinks: config.navLinks || defaultConfig.navLinks,
    getStarted: config.getStarted
      ? { ...defaultConfig.getStarted, ...config.getStarted }
      : defaultConfig.getStarted,
    signIn: config.signIn ? { ...defaultConfig.signIn, ...config.signIn } : defaultConfig.signIn,
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderNavLinks = () => {
    if (!navbarConfig.showNavLinks || !navbarConfig.navLinks) return null;

    return (
      <ul className={`${styles['navbar-links']}`}>
        {navbarConfig.navLinks.map((link, index) => (
          <li key={index} className={`${styles['navbar-link-item']}`}>
            {link.external ? (
              <a
                href={link.href}
                target={link.target || '_blank'}
                rel="noopener noreferrer"
                className={`${styles['navbar-link']}`}
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className={`${styles['navbar-link']}`}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  };

  const renderLogo = () => {
    if (!navbarConfig.showLogo || !navbarConfig.logo) return null;

    return (
      <div className={`${styles['navbar-logo']}`}>
        <Link href="/">
          <Image
            src={navbarConfig.logo.src}
            alt={navbarConfig.logo.alt}
            {...(navbarConfig.logo.width && { width: navbarConfig.logo.width })}
            {...(navbarConfig.logo.height && { height: navbarConfig.logo.height })}
            priority
          />
        </Link>
      </div>
    );
  };

  const renderAuthButtons = () => {
    return (
      <div className={`${styles['navbar-auth']}`}>
        {navbarConfig.showSignIn && navbarConfig.signIn && (
          <Link href={navbarConfig.signIn.href} className={`${styles['navbar-sign-in']}`}>
            {navbarConfig.signIn.label}
          </Link>
        )}

        {navbarConfig.showGetStarted && navbarConfig.getStarted && (
          <Link href={navbarConfig.getStarted.href} className={`${styles['navbar-get-started']}`}>
            {navbarConfig.getStarted.label}
          </Link>
        )}
      </div>
    );
  };

  const renderMobileMenuButton = () => {
    if (!navbarConfig.showMobileMenu) return null;

    return (
      <button
        className={`${styles['navbar-mobile-menu-button']}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span
          className={`${styles['navbar-mobile-menu-icon']} ${isMobileMenuOpen ? styles.active : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    );
  };

  return (
    <nav className={`${styles['navbar-wrapper']} ${className}`}>
      <MaxWidthContainerLayout className={`${styles['navbar-mwc']}`}>
        {/* Desktop Layout */}
        <div className={`${styles['navbar-desktop']}`}>
          {renderLogo()}
          {renderNavLinks()}
          {renderAuthButtons()}
        </div>

        {/* Mobile Layout */}
        <div className={`${styles['navbar-mobile']}`}>
          {renderLogo()}
          <div className={`${styles['navbar-mobile-right']}`}>{renderMobileMenuButton()}</div>
        </div>

        {/* Mobile Menu Overlay */}
        {navbarConfig.showMobileMenu && (
          <div className={`${styles['navbar-mobile-menu']} ${isMobileMenuOpen ? styles.open : ''}`}>
            <div className={`${styles['navbar-mobile-menu-content']}`}>
              {renderNavLinks()}
              <div className={`${styles['navbar-mobile-menu-auth']}`}>{renderAuthButtons()}</div>
            </div>
          </div>
        )}
      </MaxWidthContainerLayout>
    </nav>
  );
};

export default Navbar;
