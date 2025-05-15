"use client"
import React from "react";
import styles from "../styles/BabyShowerInvitation.module.css";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["400", "700"] });

const URL_MAIN = "/babyshowerke/";
const BabyShowerInvitation = () => {
  return (
    <main className={styles.containerInv}>
      <h2 className={styles.introText}>
        Una linda espera merece una <br /> celebración especial
      </h2>

      <div className={styles.letterBlock}>
        {/* Letras BABY */}
        <div className={styles.letterWrapper}>
          <div className={styles.letterItem}>
            <span className={styles.letterB}>B</span>
          </div>
          <div className={styles.letterItem}>
            <span className={styles.letterA}>A</span>
            {/* Zebra image would go here */}
          </div>
          <div className={styles.letterItem}>
            <span className={styles.letterSecondB}>B</span>
          </div>
          <div className={styles.letterItem}>
            <span className={styles.letterY}>Y</span>
            {/* León image would go here */}
          </div>
        </div>
        <h3 className={styles.showerText}>s h o w e r</h3>
        <h1 className={styles.babyName}>BABY NAME</h1>
      </div>

      <div className={styles.details}>
        <p className={styles.date}>
          <span className={styles.month}>Noviembre</span>
          <br />
          <span className={styles.day}>03</span>
        </p>
        <div className={styles.timeBlock}>
          <span className={styles.time}>12:00 PM</span>
          <div className={styles.address}>
            <br />
            Calle Holanda. No. 34.
            <br />
            Col. Jardines de Cerro Gordo.
            <br />
            Ecatepec. Edo. México.
          </div>
        </div>
      </div>

      <p className={styles.footer}>
        Tu presencia será el mejor
        <br />
        regalo para este nuevo
        <br />
        comienzo.
      </p>
    </main>
  );
};

export default BabyShowerInvitation;
