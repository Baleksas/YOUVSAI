"use client";
import Link from "next/link";
import React from "react";
import AvatarsSelection from "../../components/AvatarsSelection";
import ToolTip from "../../components/ToolTip";
import styles from "../../styles/Home.module.css";

export default function Game() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <code className={styles.code}>Told you! 🥸</code>
        <code className={styles.code}>
          <ToolTip title="Now, choose your avatar">
            {" "}
            You can use{" "}
            <button
              className={`${styles.buttonKeyboard} ${styles.tooltipBtn}`}
              role="button"
            >
              Tab
            </button>{" "}
            ,
            <button
              className={`${styles.buttonKeyboard} ${styles.tooltipBtn}`}
              role="button"
            >
              Shift
            </button>{" "}
            +
            <button
              className={`${styles.buttonKeyboard} ${styles.tooltipBtn}`}
              role="button"
            >
              Tab
            </button>{" "}
            and{" "}
            <button
              className={`${styles.buttonKeyboard} ${styles.tooltipBtn}`}
              role="button"
            >
              Space
            </button>{" "}
            to navigate in a more special way!
          </ToolTip>
        </code>
        <AvatarsSelection />
        <Link href="/">
          <button className={styles.buttonKeyboard} role="button">
            Back
          </button>
        </Link>
      </main>
    </div>
  );
}
