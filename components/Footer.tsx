import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://aleksas.dev/" target="_blank" rel="noopener noreferrer">
        Made by
        <span className={styles.logo}>
          <Image src="/logo.png" alt="Alex logo" width={60} height={30} />
        </span>
      </a>
      <code
        style={{
          textAlign: "center",
        }}
      >
        <span style={{ lineHeight: 1.5 }}>
          try me:
          <a href="https://game-spot.netlify.app/" target="_blank">
            gamespot
          </a>
        </span>
      </code>

      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
