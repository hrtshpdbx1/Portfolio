"use client" // Indique à Next.js que c'est un composant client 
import React, { useState } from 'react'
// LUCIDE
import { Cog, X, Type, ListChevronsUpDown, RotateCcw, Plus, Minus } from 'lucide-react';

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

function Sidebar(props) {
    const { settings, onChangeSize, onChangeLineHeight, onUpdateFontFamily, onResetSettings, onChangeColors, onReverseColors } = props;
    const { fontFamily, fontSize, lineHeight, bgColor, textColor } = settings


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
            {/* Le bouton ⚙️ */}
            <button
                // id="logo_trigger_menu"
                id="sidebar-trigger"
                className="icon-btn-floating"
                onClick={() => setIsOpen(true)} // Au clic, on change le state isOpen à true
                aria-label="Ouvrir le menu">
                <Cog size={22} />
                {/* <Settings /> */}
            </button>
            {/* Sidebar  */}
            {/*  si isOpen est vrai, on ajoute la classe 'sticky' 
                sinon on ne met rien. */}
            {/* todo: vérifier si class sticky s'applique, cf Nesting mess */}
            <aside id="sidebar" className={
                isOpen ?
                    'sticky' :
                    ''}>
                <div className="sidebar__header">
                    <h2 className="sidebar__title">Réglages</h2>
                    <button
                        id="closeCustomBlock"
                        onClick={() => setIsOpen(false)}// Au clic, on change le state isOpen à false
                        aria-label="Fermer le menu">
                        <X />
                    </button>
                </div>

                <div className="sidebar__content">

                    {/* ---  TYPOGRAPHIE --- */}
                    <div className="sidebar__section">
                        <h3 className="sidebar__section-title">Typographie</h3>

                        {/* --- FONT SELECT DROPDOWN ---  */}
                        <div className="sidebar__control-row">
                            <label htmlFor="font-select" className="sidebar__label">Police</label>
                            <select
                                // onChange = {(event) => fonctionMAJ (event.target.value) }
                                onChange={(event) => handleFontSelect(event.target.value)}
                                value={settings.fontFamily}
                                id="font-select"
                                className="sidebar_dropdown">
                                <option value="--font-bbb-readme" className="opt-bbbreadme">BBB ReadMe</option>
                                <option value="--font-eido"
                                    className="opt-eido">Eido</option>
                                <option value="--font-accessibledfa" className="opt-accessibledfa">Accessible DFA</option>
                                <option value="--font-open-dyslexic" className="opt-opendyslexic">Dyslexique</option>
                                <option value="Arial, sans-serif" className="opt-arial">Arial</option>
                                <option value="Times New Roman, serif" className="opt-times">Times</option>
                            </select>
                        </div>

                        {/* --- FONT SIZE BTN ---  */}
                        <div className="sidebar__control-row">
                            {/* avec valeur :  <h3 className="sidebar__label">Taille : {fontSize}px</h3> */}
                            <span className="sidebar__label">Taille</span>
                            <div className="sidebar__pill-group">
                                {/* Au clic, on appelle la fonction locale qui communique avec layout */}
                                <button className="pill-btn" onClick={() => handleSizeClick(-0.1)} aria-label="Diminuer la taille">
                                    <Minus size={16} strokeWidth={2.5} />
                                </button>


                                <Type size={18} style={{ margin: '0 4px' }} />

                                <button className="pill-btn" onClick={() => handleSizeClick(0.1)} aria-label="Agrandir la taille">
                                    <Plus size={16} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>

                        {/* --- LINE HEIGHT BTN ---  */}
                        <div className="sidebar__control-row">
                            {/* <h3 className="sidebar__label">Interligne: {lineHeight}px</h3> */}
                            <span className="sidebar__label">Interligne</span>
                            <div className="sidebar__pill-group">
                                {/* Au clic, on appelle la fonction locale qui communique avec layout */}
                                <button className="pill-btn" onClick={() => handleHeightClick(-0.1)} aria-label="Diminuer l'interligne">
                                    <Minus size={16} strokeWidth={2.5} />
                                </button>

                                <ListChevronsUpDown size={18} style={{ margin: '0 4px' }} />

                                <button className="pill-btn" onClick={() => handleHeightClick(0.1)} aria-label="Agrandir l'interligne">
                                    <Plus size={16} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* --- THEME CHOICE ---  */}
                    <div className="sidebar__section">
                        <h3 className="sidebar__section-title">Thèmes</h3>
                        <div className="contrast-group">
                            {colors.map(color => {
                                // On vérifie si les couleurs correspondent (sens normal OU inversé)
                                const isActive = (bgColor === color.bgColor && textColor === color.textColor) || 
                                                 (bgColor === color.textColor && textColor === color.bgColor);

                                return (
                                    <button
                                        key={color.id}
                                        className={`contrast-circle ${isActive ? 'active' : ''}`}
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
                        

                        <div className="sidebar__control-row">
                            <label htmlFor="invert-toggle" className="sidebar__label">Inverser</label>
                            <div className="switch">
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
                                <span className="slider round"></span>
                            </div>
                        </div>

                    </div> {/* Fin de la section Couleurs */}
                </div>
                {/* --- RESET---  */}
                <div className="sidebar__control-row">
                    <button
                        onClick={handleResetSettings}
                        id="reset-theme"
                        className="btn btn-outline"
                        title="Réinitialiser le thème">
                        <RotateCcw />
                        <span>Réinitialiser</span>
                    </button>
                </div>

            </aside >

        </>
    )
}

export default Sidebar