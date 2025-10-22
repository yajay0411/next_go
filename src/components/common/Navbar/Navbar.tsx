'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MaxWidthContainerLayout from '@/core/Layouts/MaxWidthContainerLayout/MaxWidthContainerLayout';

import logo from '@/assets/images/logo.svg';

import './Navbar.scss';

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
      <ul className="navbar-links">
        {navbarConfig.navLinks.map((link, index) => (
          <li key={index} className="navbar-link-item">
            {link.external ? (
              <a
                href={link.href}
                target={link.target || '_blank'}
                rel="noopener noreferrer"
                className="navbar-link"
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className="navbar-link">
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
      <div className="navbar-logo">
        <Link href="/">
          <Image
            src={navbarConfig.logo.src}
            alt={navbarConfig.logo.alt}
            {...(navbarConfig.logo.width && { width: navbarConfig.logo.width })}
            {...(navbarConfig.logo.height && { height: navbarConfig.logo.height })}
            priority
          />
          <span className="navbar-logo-text">{navbarConfig.logo.alt}</span>
        </Link>
      </div>
    );
  };

  const renderAuthButtons = () => {
    return (
      <div className="navbar-auth">
        {navbarConfig.showSignIn && navbarConfig.signIn && (
          <Link href={navbarConfig.signIn.href} className="navbar-sign-in">
            {navbarConfig.signIn.label}
          </Link>
        )}

        {navbarConfig.showGetStarted && navbarConfig.getStarted && (
          <Link href={navbarConfig.getStarted.href} className="navbar-get-started">
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
        className="navbar-mobile-menu-button"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={`navbar-mobile-menu-icon ${isMobileMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    );
  };

  return (
    <nav className={`navbar-wrapper ${className}`}>
      <MaxWidthContainerLayout className="navbar-mwc">
        {/* Desktop Layout */}
        <div className="navbar-desktop">
          {renderLogo()}
          {renderNavLinks()}
          {renderAuthButtons()}
        </div>

        {/* Mobile Layout */}
        <div className="navbar-mobile">
          {renderLogo()}
          <div className="navbar-mobile-right">{renderMobileMenuButton()}</div>
        </div>

        {/* Mobile Menu Overlay */}
        {navbarConfig.showMobileMenu && (
          <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="navbar-mobile-menu-content">
              {renderNavLinks()}
              <div className="navbar-mobile-menu-auth">{renderAuthButtons()}</div>
            </div>
          </div>
        )}
      </MaxWidthContainerLayout>
    </nav>
  );
};

export default Navbar;
