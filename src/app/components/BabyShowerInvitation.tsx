"use client"
import React from "react";
import styles from "../styles/BabyShowerInvitation.module.css";
import { Tangerine } from "next/font/google";
import { URL_MAIN } from "../services/variables";

const tangerine = Tangerine({ subsets: ["latin"], weight: ["400", "700"] });


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
            <img className={`${styles.animal} ${styles.giraffe}`} src={`${URL_MAIN}/JIRAFA.png`} />
          </div>
          <div className={styles.letterItem}>
            <span className={styles.letterA}>A</span>
            <img className={`${styles.animal} ${styles.zebra}`} src={`${URL_MAIN}/CEBRA.png`} />
            <img className={`${styles.animal} ${styles.cloud1}`} src={`${URL_MAIN}/NUBE.png`} />
          </div>
          <div className={styles.letterItem}>
            <img className={`${styles.animal} ${styles.cloud2}`} src={`${URL_MAIN}/NUBE.png`} />
            <img className={`${styles.animal} ${styles.hipo}`} src={`${URL_MAIN}/HIPOPOTAMO.png`} />
            <span className={styles.letterSecondB}>B</span>
            <img className={`${styles.animal} ${styles.elephant}`} src={`${URL_MAIN}/ELEFANTE.png`} />
          </div>
          <div className={styles.letterItem}>
            <span className={styles.letterY}>Y</span>
            <img className={`${styles.animal} ${styles.lion}`} src={`${URL_MAIN}/LEON.png`} />
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
        Tú presencia será el mejor
        <br />
        regalo para este nuevo
        <br />
        comienzo.
      </p>
    </main>
  );
};

export default BabyShowerInvitation;
