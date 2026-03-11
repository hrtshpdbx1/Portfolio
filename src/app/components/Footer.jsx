// components/Footer.jsx
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="main-footer-inverted">
            <div className="footer-container">
                
                {/* Colonne 1 : Branding */}
                <div className="footer-brand">
                    <Link href="/" className="footer-logo">
                        Louise Moraldy
                    </Link>
                    <p className="footer-tagline">Développeuse Fullstack</p>
                </div>

                {/* Colonne 2 : Navigation (Nouvelle partie) */}
                <nav className="footer-nav">
                    <div className="footer-nav-col">
                        <span className="footer-title">Plan du site</span>
                        <Link href="/">Accueil</Link>
                        <Link href="/#contact">Me contacter</Link>
                    </div>
                    <div className="footer-nav-col">
                        <span className="footer-title">Projets</span>
                        <Link href="/social-script">Social Script</Link>
                        <Link href="/paygap-quest">PayGap Quest</Link>
                    </div>
                </nav>
                
                {/* Colonne 3 : Réseaux Sociaux */}
                <div className="footer-socials">
                    <span className="footer-title">Réseaux</span>
                    <div className="social-icons">
                        <a href="https://github.com/hrtshpdbx1" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/louise-moraldy/" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://www.instagram.com/bxl_petitchien" target="_blank" rel="noopener noreferrer" aria-label="Profil Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="mailto:louisemoraldy@proton.me" aria-label="M'envoyer un email">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>

            </div>

            {/* Copyright  */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Louise Moraldy. Tous droits réservés.</p>
            </div>
        </footer>
    );
}