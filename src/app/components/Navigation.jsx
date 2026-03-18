"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import style from '../styles/Navigation.module.css';
import { Menu, X, Mail, Download } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <button
                id="nav-trigger"
                className="icon-btn-floating"
                onClick={() => setIsOpen(true)}
                aria-label="Ouvrir le menu">

                <Menu />
            </button>

            <nav className={`${style.sidebar} ${isOpen ? style.open : ''}`}>

                <div className={style.header}>
                    <h2 className={style.title}>Menu</h2>
                    <button
                        className={style.closeBtn}
                        onClick={closeMenu}
                        aria-label="Fermer le menu"
                    >
                        <X />
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

                    {/* Bouton CV */}
                    <a href="/CVLouiseMoraldy.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Télécharger mon CV"
                        download="CV_Louise_Moraldy.pdf"
                        className={`btn btn-small btn-outline ${style.cvBtn}`}
                        onClick={closeMenu}>

                        <Download style={{ marginRight: '8px' }} /> Mon CV
                    </a>

                    {/* Bouton LinkedIn (Moitié) */}
                    <a href="https://www.linkedin.com/in/louise-moraldy/" target="_blank" rel="noopener noreferrer" aria-label="Mon profil LinkedIn" className={`btn btn-small btn-outline ${style.socialBtn}`} onClick={closeMenu}>
                     <FontAwesomeIcon icon={faLinkedin} className={style.iconLinkedin} />
                    </a>

                    {/* Bouton Mail (Moitié) */}
                    <Link href="/#section5" aria-label="Aller au formulaire de contact" className={`btn btn-small btn-outline ${style.socialBtn}`} onClick={closeMenu}>
                        <Mail />
                    </Link>

                </div>
            </nav>

            {isOpen && (
                <div className={style.overlay} onClick={closeMenu} aria-hidden="true"></div>
            )}
        </>
    );
}