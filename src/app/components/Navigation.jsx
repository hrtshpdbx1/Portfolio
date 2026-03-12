"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import style from '../styles/Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <button
                className={style.triggerBtn}
                onClick={() => setIsOpen(true)}
                aria-label="Ouvrir le menu de navigation"
            >
                <FontAwesomeIcon icon={faBars} />
            </button>

            <nav className={`${style.sidebar} ${isOpen ? style.open : ''}`}>

                <div className={style.header}>
                    <h2 className={style.title}>Menu</h2>
                    <button
                        className={style.closeBtn}
                        onClick={closeMenu}
                        aria-label="Fermer le menu"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                <ul className={style.links}>
                    <li><Link href="/#section1" onClick={closeMenu}>Accueil</Link></li>
                    <li><Link href="/#section2" onClick={closeMenu}>À propos</Link></li>
                    <li><Link href="/#section3" onClick={closeMenu}>Compétences</Link></li>
                    <li><Link href="/#section4" onClick={closeMenu}>Projets</Link></li>
                    <li><Link href="/#section5" onClick={closeMenu}>Me contacter</Link></li>
                </ul>

                {/* Footer avec icones en boutons */}
                <div className={style.footerIcons}>
                    
                    {/* Bouton CV (Pleine largeur) */}
                    <a href="/cv-louise-moraldy.pdf" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir mon CV" className={`btn btn-small btn-outline ${style.cvBtn}`} onClick={closeMenu}>
                        <FontAwesomeIcon icon={faDownload} style={{ marginRight: '8px' }} /> Mon CV
                    </a>
                    
                    {/* Bouton LinkedIn (Moitié) */}
                    <a href="https://www.linkedin.com/in/louise-moraldy/" target="_blank" rel="noopener noreferrer" aria-label="Mon profil LinkedIn" className={`btn btn-small btn-outline ${style.socialBtn}`} onClick={closeMenu}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    
                    {/* Bouton Mail (Moitié) */}
                    <Link href="/#section5" aria-label="Aller au formulaire de contact" className={`btn btn-small btn-outline ${style.socialBtn}`} onClick={closeMenu}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                    
                </div>   
            </nav>

            {isOpen && (
                <div className={style.overlay} onClick={closeMenu} aria-hidden="true"></div>
            )}
        </>
    );
}