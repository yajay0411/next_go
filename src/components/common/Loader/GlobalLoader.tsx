'use client';
import Image from 'next/image';
import loaderGif from '@/assets/images/loader.gif';
import logo from '@/assets/images/logo.svg';
import styles from './GlobalLoader.module.scss';

interface GlobalLoaderProps {
  message?: string;
}

export default function GlobalLoader({ message = 'LOADING...' }: GlobalLoaderProps) {
  return (
    <div className={styles.globalLoaderOverlay}>
      <div className={styles.globalLoader}>
        <div className={styles.loaderGifContainer}>
          <Image
            src={loaderGif}
            alt="Loading animation"
            width={150}
            height={106}
            priority
            unoptimized // For GIF animations
          />
        </div>

        <div className={styles.loaderText}>{message}</div>

        <div className={styles.loaderLogo}>
          <Image src={logo} alt="MetaGO" width={47} height={20} priority />
        </div>
      </div>
    </div>
  );
}
