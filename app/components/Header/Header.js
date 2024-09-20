'use client';

import styles from './header.module.css';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.menuIcon}>
          {/* Nove pontos finos */}
          {[...Array(9)].map((_, index) => (
            <div key={index}></div>
          ))}
        </div>
        <div className={styles.logo}>
          <Image src="/Microsoft_Office_Teams_Logo_512px.png" alt="Logo" width={30} height={30} />
        </div>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Buscar..." />
          <FaSearch className={styles.searchIcon} />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.moreOptions}>
          {/* Três pontos finos */}
          {[...Array(3)].map((_, index) => (
            <div key={index}></div>
          ))}
        </div>
        <div className={styles.account}>AB</div>
      </div>
    </header>
  );
}
