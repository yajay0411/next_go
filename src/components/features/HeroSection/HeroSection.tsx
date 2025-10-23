import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import './HeroSection.scss';

export interface HeroButton {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  external?: boolean;
}

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  heroImage?: {
    src: StaticImageData;
    alt: string;
    width?: number;
    height?: number;
  };
  buttons?: HeroButton[];
  variant?: 'default' | 'centered' | 'split' | 'minimal';
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  overlayOpacity?: number;
  height?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  heroImage,
  buttons = [],
  variant = 'default',
  className = '',
}) => {
  const renderButton = (button: HeroButton, index: number) => {
    const buttonClasses = [
      'hero-button',
      `hero-button--${button.variant || 'primary'}`,
      'btn-primary',
    ]
      .filter(Boolean)
      .join(' ');

    const buttonContent = (
      <button key={index} className={buttonClasses} onClick={button.onClick}>
        {button.text}
      </button>
    );

    if (button.href) {
      if (button.external) {
        return (
          <a
            key={index}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button-wrapper"
          >
            {buttonContent}
          </a>
        );
      }
      return (
        <Link key={index} href={button.href} className="hero-button-wrapper">
          {buttonContent}
        </Link>
      );
    }

    return (
      <div key={index} className="hero-button-wrapper">
        {buttonContent}
      </div>
    );
  };

  const heroClasses = ['hero-section', `hero-section--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={heroClasses}>
      {backgroundImage && <div className="hero-section__overlay" />}

      <div className="hero-section__container">
        <div className="hero-section__content">
          <h1 className="hero-section__title">{title}</h1>
          {subtitle && <p className="hero-section__subtitle">{subtitle}</p>}

          {description && <p className="hero-section__description">{description}</p>}

          {buttons.length > 0 && (
            <div className="hero-section__buttons">{buttons.map(renderButton)}</div>
          )}
        </div>

        {heroImage && (
          <div className="hero-section__image">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width || 600}
              height={heroImage.height || 400}
              priority
              className="hero-section__image-content"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
