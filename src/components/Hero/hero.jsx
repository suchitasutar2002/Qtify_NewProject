import React from 'react';
import styles from './hero.module.css';
import {ReactComponent as HeroImage} from '../../assets/hero-image.png';

const Hero = () => {
  return (
    <div className={styles.headerContianer}>
      <div className={styles.headerInfo}>
        <p className={styles.headerP}>
          100 Thousand Songs, ad-free <br />
          Over thousands podcast episodes
        </p>
      </div>
      <div className={styles.headerImg}>
        <HeroImage/>
      </div>
    </div>
  );
};

export default Hero;
