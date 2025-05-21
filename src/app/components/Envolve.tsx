"use client"
import { useState } from 'react';
import '../styles/Envelope.css';

export default function Envelope(props: { animate: () => void }) {
  const [isOpen, setIsOpen] = useState(false);


  return (<>
    <div className='initialmsg'>
      <span >
        ¡Te ha llegado una invitación, abrela!
      </span>
    </div>
    <div className="envlope-wrapper">
      <div className={`envelope ${isOpen ? "open" : "close"}`} onClick={() => { setIsOpen(lt => !lt); props.animate(); }}>
        <div className="front flap"></div>
        <div className="front pocket"></div>
        <div className="letter">
          <div className="words line1">Una linda espera</div>
          <div className="words line2">merece una celebración</div>
          <div className="words line3">especial...</div>
          <div className="words line4"></div>
        </div>
        <div className="hearts">
          <div className="heart a1"></div>
          <div className="heart a2"></div>
          <div className="heart a3"></div>
        </div>
      </div>
    </div>
  </>);
} 
