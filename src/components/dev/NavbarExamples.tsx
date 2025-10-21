/**
 * Navbar Component Usage Examples
 *
 * This file demonstrates how to use the config-driven Navbar component
 * with different configurations based on your needs.
 */

import Navbar, { NavbarConfig } from '@/components/common/Navbar/Navbar';

// Example 1: Default Navbar (uses all default settings)
export function DefaultNavbarExample() {
  return <Navbar />;
}

// Example 2: Minimal Navbar (only logo and get started button)
export function MinimalNavbarExample() {
  const config: Partial<NavbarConfig> = {
    showNavLinks: false,
    showSignIn: false,
  };

  return <Navbar config={config} />;
}

// Example 3: Custom Navigation Links
export function CustomNavLinksExample() {
  const config: Partial<NavbarConfig> = {
    navLinks: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  };

  return <Navbar config={config} />;
}

// Example 4: External Links
export function ExternalLinksExample() {
  const config: Partial<NavbarConfig> = {
    navLinks: [
      { label: 'Documentation', href: 'https://docs.example.com', external: true },
      { label: 'Support', href: 'https://support.example.com', external: true },
      { label: 'Blog', href: '/blog' }, // Internal link
    ],
  };

  return <Navbar config={config} />;
}

// Example 5: Custom Logo
export function CustomLogoExample() {
  const config: Partial<NavbarConfig> = {
    logo: {
      src: '/assets/images/custom-logo.png',
      alt: 'Custom Company',
      width: 150,
      height: 25,
    },
  };

  return <Navbar config={config} />;
}

// Example 6: Custom Auth Buttons
export function CustomAuthExample() {
  const config: Partial<NavbarConfig> = {
    signIn: {
      label: 'Login',
      href: '/login',
    },
    getStarted: {
      label: 'Start Free Trial',
      href: '/trial',
    },
  };

  return <Navbar config={config} />;
}

// Example 7: Mobile-Only Navbar
export function MobileOnlyExample() {
  const config: Partial<NavbarConfig> = {
    showNavLinks: false,
    showSignIn: false,
    showMobileMenu: true,
  };

  return <Navbar config={config} />;
}

// Example 8: Dark Theme (if supported)
export function DarkThemeExample() {
  const config: Partial<NavbarConfig> = {
    theme: 'dark',
  };

  return <Navbar config={config} />;
}

// Example 9: Complete Custom Configuration
export function CompleteCustomExample() {
  const config: Partial<NavbarConfig> = {
    showLogo: true,
    showNavLinks: true,
    showGetStarted: true,
    showSignIn: true,
    showMobileMenu: true,
    logo: {
      src: '/assets/images/company-logo.svg',
      alt: 'Company Name',
      width: 120,
      height: 30,
    },
    navLinks: [
      { label: 'Products', href: '/products' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Resources', href: '/resources' },
      { label: 'Company', href: '/company' },
    ],
    signIn: {
      label: 'Sign In',
      href: '/signin',
    },
    getStarted: {
      label: 'Get Started',
      href: '/signup',
    },
  };

  return <Navbar config={config} />;
}

/**
 * Navbar Configuration Interface Reference:
 *
 * interface NavbarConfig {
 *   showLogo?: boolean;           // Show/hide logo
 *   showNavLinks?: boolean;       // Show/hide navigation links
 *   showGetStarted?: boolean;     // Show/hide get started button
 *   showSignIn?: boolean;         // Show/hide sign in button
 *   showMobileMenu?: boolean;     // Show/hide mobile menu
 *
 *   logo?: {                      // Logo configuration
 *     src: string;                // Logo image path
 *     alt: string;                // Alt text
 *     width?: number;             // Logo width
 *     height?: number;            // Logo height
 *   };
 *
 *   navLinks?: Array<{            // Navigation links array
 *     label: string;              // Link text
 *     href: string;               // Link URL
 *     target?: string;            // Link target (_blank, etc.)
 *     external?: boolean;         // Is external link?
 *   }>;
 *
 *   getStarted?: {                // Get Started button
 *     label: string;              // Button text
 *     href: string;               // Button URL
 *     target?: string;            // Button target
 *     external?: boolean;         // Is external link?
 *   };
 *
 *   signIn?: {                    // Sign In button
 *     label: string;              // Button text
 *     href: string;               // Button URL
 *     target?: string;            // Button target
 *     external?: boolean;         // Is external link?
 *   };
 *
 *   theme?: 'light' | 'dark';     // Theme variant
 * }
 */
