"use client"
import { useState } from "react";
import Envelope from "./components/Envolve";
import styles from "./page.module.css";
import BabyShowerInvitation from "./components/BabyShowerInvitation";

export default function Home() {
  const [type, setType] = useState(["large", "small"]);
  const animate = () => {
    setType(["small", "large"])

    setTimeout(() => {
      setType(["nodisplay", "large"])
    }, 9000);
  }

  return (
    <>
      <div className={`card envelope-main ${type[0]}`} >
        <Envelope animate={animate}/>
      </div>
      <div className={`card invitation-main ${type[1]}`}>
        <BabyShowerInvitation />
      </div>
    </>
  );
}
