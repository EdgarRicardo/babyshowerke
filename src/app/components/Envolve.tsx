"use client"
import { useState } from 'react';
import '../styles/Envelope.css';

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="envlope-wrapper">
      <div className={`envelope ${isOpen ? "open" : "close"}`} onClick={()=>setIsOpen(lt=>!lt)}>
        <div className="front flap"></div>
        <div className="front pocket"></div>
        <div className="letter">
          <div className="words line1">Hola</div>
          <div className="words line2">¡Estas invitado!</div>
          <div className="words line3">A nuestro Baby Shower</div>
          <div className="words line4"></div>
        </div>
        <div className="hearts">
          <div className="heart a1"></div>
          <div className="heart a2"></div>
          <div className="heart a3"></div>
        </div>
      </div>
    </div>
  );
} 
