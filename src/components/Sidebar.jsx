"use client" // Indique à Next.js que c'est un composant client 
import React, { useState } from 'react'
import { useSettings } from '@/SettingsContext';
// LUCIDE
import { Cog, X, Type, ListChevronsUpDown, ChevronDown, RotateCcw, Plus, Minus } from 'lucide-react';
import styles from '@/app/styles/Sidebar.module.css';

//Theme
const colors = [
    {
        id: 1,
        name: "Pistache & gris",
        bgColor: "rgb(84.699% 96.254% 83.914%)",
        textColor: "rgb(13.81% 13.179% 9.5057%)"
    },
    {
        id: 2,
        name: "Bleu & jaune",
        bgColor: "rgb(26.999% 9.8793% 74.757%)",
        textColor: "rgb(93.699% 99.691% 79.441%)"
    },
    {
        id: 3,
        name: "Rouge & blanc",
        bgColor: "#b91c1c",
        textColor: "#fef2f2"
    },
    {
        id: 4,
        name: "Kaki & blanc",
        bgColor: "rgb(21.176% 32.549% 7.8431%)",
        textColor: "#f7fee7"
    },
    {
        id: 5,
        name: "N&B",
        bgColor: "#2D2D2D",
        textColor: "#FFF0F0"
    },
    {
        id: 6,
        name: "Bleu & jaune (vif)",
        bgColor: "rgb(51.37% 99.562% 59.165%)",
        textColor: "rgb(6.1489% 1.6109% 2.6324%)"
    },
    {
        id: 7,
        name: "Jaune & marron",
        bgColor: "color(display-p3 0.302 0.023 0.149)",
        textColor: "color(display-p3 0.927 0.989 0.29)"
    },
    {
        id: 8,
        name: "Rose pâle & noir",
        bgColor: "rgb(96.702% 87.161% 90.199%)",
        textColor: "rgb(0.81603% 5.1251% 0%)"
    }
];

function Sidebar() {
    // Récupère les données du contexte
    //  renomme 
   const { 
        settings, 
        updateSize: onChangeSize, 
        updateLineHeight: onChangeLineHeight, 
        updateFontFamily: onUpdateFontFamily, 
        resetSettings: onResetSettings, 
        updateColors: onChangeColors, 
        reverseColors: onReverseColors 
    } = useSettings();

    const { fontFamily, fontSize, lineHeight, bgColor, textColor } = settings;

    /* --- 1. LES ÉTATS (STATES) --- */
    const [isOpen, setIsOpen] = useState(false); // State visibilité sidebar, fermé par défaut

    /* --- 2. LES FONCTIONS --- */
    function handleSizeClick(newSize) {
        const currentSize = Number(fontSize);
        // Math.min(2) max 2rem. Math.max(0.7) min 0.7rem.
        const nextSize = Math.min(2, Math.max(0.7, currentSize + newSize));
        // .toFixed(2) évite les bugs de calcul JavaScript et parseFloat le remet en nombre
        onChangeSize(parseFloat(nextSize.toFixed(2)));
    }

    function handleHeightClick(newHeight) {
        const currentHeight = Number(lineHeight);
        const nextHeight = Math.min(4, Math.max(1, currentHeight + newHeight));
        onChangeLineHeight(nextHeight.toFixed(1));
    }

    function handleResetSettings() {
        onResetSettings()
    }

    function handleFontSelect(selectedFont) {
        onUpdateFontFamily(selectedFont)
        // transmission de la valeur choisie au parent
    }

    function handleColorSelect(newBgColor, newTextColor) {
        onChangeColors(newBgColor, newTextColor)
    }

    function handleReverseColors(bgColor, textColor) {
        onReverseColors(bgColor, textColor)
    }

    return (
        <>
            {/* Le bouton ⚙️ (Garde la classe globale car il vit dans le body) */}
            <button
                id="sidebar-trigger"
                className="icon-btn-floating"
                onClick={() => setIsOpen(true)} // Au clic, on change le state isOpen à true
                aria-label="Ouvrir le menu">
                <Cog size={22} />
            </button>
            
            {/* Sidebar : Utilisation des classes Module CSS */}
            <aside id="sidebar" className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Réglages</h2>
                    <button
                        id="closeCustomBlock"
                        className={styles.closeBtn} 
                        onClick={() => setIsOpen(false)} // Au clic, on change le state isOpen à false
                        aria-label="Fermer le menu">
                        <X />
                    </button>
                </div>

                <div className={styles.content}>

                    {/* ---  TYPOGRAPHIE --- */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Typographie</h3>

                        {/* --- FONT SELECT DROPDOWN ---  */}
                        <div className={styles.controlRow}>
                            <label htmlFor="font-select" className={styles.label}>Police</label>
                            
                            {/* LE FAMEUX WRAPPER */}
                            <div className={styles.selectWrapper}> 
                                <select
                                    onChange={(event) => handleFontSelect(event.target.value)}
                                    value={settings.fontFamily}
                                    id="font-select"
                                    className={styles.dropdown}>
                                    <option value="--font-bbb-readme" className={styles.optBbbreadme}>BBB ReadMe</option>
                                    <option value="--font-eido" className={styles.optEido}>Eido</option>
                                    <option value="--font-accessibledfa" className={styles.optAccessibledfa}>Accessible DFA</option>
                                    <option value="--font-open-dyslexic" className={styles.optOpendyslexic}>Dyslexique</option>
                                    <option value="Arial, sans-serif" className={styles.optArial}>Arial</option>
                                    <option value="Times New Roman, serif" className={styles.optTimes}>Times</option>
                                </select>
                                <ChevronDown className={styles.selectArrow} size={16} />
                            </div>
                        </div>

                        {/* --- FONT SIZE BTN ---  */}
                        <div className={styles.controlRow}>
                            <span className={styles.label}>Taille</span>
                            <div className={styles.pillGroup}>
                                <button className={styles.pillBtn} onClick={() => handleSizeClick(-0.1)} aria-label="Diminuer la taille">
                                    <Minus size={16} strokeWidth={2.5} />
                                </button>
                                <Type size={18} style={{ margin: '0 4px' }} />
                                <button className={styles.pillBtn} onClick={() => handleSizeClick(0.1)} aria-label="Agrandir la taille">
                                    <Plus size={16} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>

                        {/* --- LINE HEIGHT BTN ---  */}
                        <div className={styles.controlRow}>
                            <span className={styles.label}>Interligne</span>
                            <div className={styles.pillGroup}>
                                <button className={styles.pillBtn} onClick={() => handleHeightClick(-0.1)} aria-label="Diminuer l'interligne">
                                    <Minus size={16} strokeWidth={2.5} />
                                </button>
                                <ListChevronsUpDown size={18} style={{ margin: '0 4px' }} />
                                <button className={styles.pillBtn} onClick={() => handleHeightClick(0.1)} aria-label="Agrandir l'interligne">
                                    <Plus size={16} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* --- THEME CHOICE ---  */}
                    <div className={styles.section}>
                        <h3 className={styles.sectionTitle}>Thèmes</h3>
                        <div className={styles.contrastGroup}>
                            {colors.map(color => {
                                // On vérifie si les couleurs correspondent (sens normal OU inversé)
                                const isActive = (bgColor === color.bgColor && textColor === color.textColor) || 
                                                 (bgColor === color.textColor && textColor === color.bgColor);

                                return (
                                    <button
                                        key={color.id}
                                        className={`${styles.contrastCircle} ${isActive ? styles.active : ''}`}
                                        style={{
                                            "--btn-bg": color.bgColor,
                                            "--btn-text": color.textColor,
                                        }}
                                        onClick={() => handleColorSelect(color.bgColor, color.textColor)}
                                        title={color.name} 
                                    />
                                );
                            })}
                        </div>
                        
                        <div className={styles.controlRow}>
                            <label htmlFor="invert-toggle" className={styles.label}>Inverser</label>
                            <div className={styles.switch}>
                                <input
                                    id="invert-toggle"
                                    type="checkbox"
                                    onChange={() => handleReverseColors(bgColor, textColor)}
                                    // Permet d'activer avec "Entrée" en plus d'"Espace"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') handleReverseColors(bgColor, textColor);
                                    }}
                                    aria-label="Inverser les couleurs"
                                />
                                <span className={styles.slider}></span>
                            </div>
                        </div>

                    </div> {/* Fin de la section Couleurs */}
                </div>
                {/* --- RESET ---  */}
                <div className={styles.controlRow}>
                    <button
                        onClick={handleResetSettings}
                        id="reset-theme"
                        className="btn btn-small btn-outline"
                        title="Réinitialiser le thème"
                        style={{ margin: "0 auto" }} /* Centre le bouton élégamment */
                    >
                        {/* On utilise "style" pour forcer le CSS à obéir et rétrécir l'icône */}
                        <RotateCcw style={{ width: "1.1rem", height: "1.1rem" }} strokeWidth={2.5} />
                        
                        {/* J'ai supprimé le marginLeft ici, la classe .btn s'occupe déjà de l'espacement ! */}
                        <span>Réinitialiser</span>
                    </button>
                </div>

            </aside >
        </>
    )
}

export default Sidebar