import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ArrowUp} from 'lucide-react';

function BackToTop() {
    // State
    // Définition visibilité du bouton
    const [isVisible, setIsVisible] = useState(false);

    //  useEffect au montage du composant.
    useEffect(() => {

        // vérifie la position du scroll
        const handleScroll = () => {
            if (window.scrollY > 300) { // si descendu de 300px
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Lien addEventListener & fenêtre du navigateur
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []) // ne s'exécute qu'une fois au montage

    // LA FONCTION CLIC
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // LE RENDU 
    return (
        <>
            {/*  si isVisible est vrai, on affiche le bouton */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    // On combine notre classe globale avec la classe qui gère la visibilité
                    className={`icon-btn-floating back-to-top ${isVisible ? 'visible' : ''}`}
                    aria-label="Remonter en haut de page">

                    <ArrowUp />
                </button>
            )}
        </>
    );
}

export default BackToTop;

