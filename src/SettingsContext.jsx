// SettingContext.jsx

// stocke les réglages pour les distribuer à toutes les pages
// injecte le CSS et fait passer les infos à la Sidebar
"use client"
import React, { createContext, useState, useEffect, useContext } from 'react';

const SettingsContext = createContext();

const DEFAULTS = {
    fontFamily: "--font-bbb-readme",
    fontSize: 1,
    lineHeight: 1.5,
    bgColor: 'rgb(84.699% 96.254% 83.914%)',
    textColor: 'rgb(13.81% 13.179% 9.5057%)',
    isInverted: false 
};

export function SettingsProvider({ children }) {
    const [settings, setSettings] = useState(DEFAULTS);
    const [isMounted, setIsMounted] = useState(false);

    // Au chargement, récupère les réglages de la page précédente
   useEffect(() => {
        setIsMounted(true);
        try {
            const savedSettings = localStorage.getItem('louiseSettings');
            if (savedSettings) {
                setSettings(JSON.parse(savedSettings));
            }
        } catch (e) {
            console.error("Erreur localStorage", e);
        }
    }, []);

    // À chaque changement, sauvegarde et applique le CSS
    useEffect(() => {
        if (!isMounted) return;

        // Sauvegarde dans le navigateur
        localStorage.setItem('louiseSettings', JSON.stringify(settings));

        // Injection des variables CSS sur tout le site
        const root = document.documentElement;
        root.style.setProperty('--main-background', settings.bgColor);
        root.style.setProperty('--main-text', settings.textColor);
        root.style.setProperty('--dynamic-line-height', settings.lineHeight);
        root.style.setProperty('--user-size', `${settings.fontSize}rem`);
        
        // Gestion de la police
        document.body.style.fontFamily = settings.fontFamily.startsWith('--') 
            ? `var(${settings.fontFamily})` 
            : settings.fontFamily;
            
        // Gestion de l'inversion des couleurs
        if (settings.isInverted) {
            document.body.classList.add('is-inverted');
        } else {
            document.body.classList.remove('is-inverted');
        }
        
    }, [settings, isMounted]);

    // --- Les Fonctions ---
    const updateSize = (newSize) => setSettings(prev => ({ ...prev, fontSize: newSize }));
    const updateLineHeight = (newHeight) => setSettings(prev => ({ ...prev, lineHeight: newHeight }));
    const updateFontFamily = (newFont) => setSettings(prev => ({ ...prev, fontFamily: newFont }));
    
    const updateColors = (newBgColor, newTextColor) => {
        setSettings(prev => ({ ...prev, bgColor: newBgColor, textColor: newTextColor, isInverted: false }));
    };

    const reverseColors = (bgColor, textColor) => {
        setSettings(prev => ({ ...prev, bgColor: textColor, textColor: bgColor, isInverted: !prev.isInverted }));
    };

    const resetSettings = () => setSettings(DEFAULTS);

    return (
        <SettingsContext.Provider value={{
            settings,
            updateSize,
            updateLineHeight,
            updateFontFamily,
            updateColors,
            reverseColors,
            resetSettings
        }}>
            {children}
        </SettingsContext.Provider>
    );
}

export const useSettings = () => useContext(SettingsContext);