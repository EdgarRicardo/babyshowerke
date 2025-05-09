"use client"
import { useState } from "react";
import Envelope from "./components/Envolve";
import styles from "./page.module.css";

export default function Home() {
  const [type,setType] = useState(["large","small"]);
  const animate = ()=>{
    setType(["small","large"])

    setTimeout(() => {
      setType(["nodisplay","large"])
    }, 11000);
  }

  return (
    <div className={styles.page}>
      <div className={`card envelope-main ${type[0]}`} onClick={animate}>
        <Envelope />
      </div>
      <div className={`card invitation-main ${type[1]}`}></div>
    </div>
  );
}
