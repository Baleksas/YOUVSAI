"use client";
import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

export default function Game() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <code className={styles.code}>Choose your avatar</code>

        <Link href="/">
          <button className={styles.buttonKeyboard} role="button">
            Back
          </button>
        </Link>
      </main>
    </div>
  );
}
