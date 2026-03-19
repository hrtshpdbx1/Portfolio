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

    // récupère les réglages de la page précédente au chargement
    useEffect(() => {
        setIsMounted(true);

        // --- 🕵️‍♀️ EASTER EGG CONSOLE ---
        console.log(
            "%c👀 Hi there ! ", 
            "color: #50fa7b; font-size: 24px; font-weight: bold; background: #2D2D2D; padding: 10px; border-radius: 8px;"
        );

        console.log(
            "%cIf you're poking around in my console, we're probably meant to get along. \nFeel free to click the little gear icon (⚙️) to play with the accessibility settings of this portfolio (fonts, themes, line height).\n\nIf my profile catches your eye, the contact section is waiting for you! 🚀",
            "font-size: 14px; line-height: 1.5; padding-top: 8px;"
        );
        // ------------------------------

        try {
            const savedSettings = localStorage.getItem('louiseSettings');
            if (savedSettings) {
                setSettings(JSON.parse(savedSettings));
            }
        } catch (e) {
            console.error("Erreur localStorage", e);
        }
    }, []);

    // sauvegarde à chaque changement 
    useEffect(() => {
        if (!isMounted) return;
        localStorage.setItem('louiseSettings', JSON.stringify(settings));
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
            {/* injection dynamique du CSS ! */}
            <style dangerouslySetInnerHTML={{__html: `
                :root {
                    --main-background: ${settings.bgColor};
                    --main-text: ${settings.textColor};
                    --dynamic-line-height: ${settings.lineHeight};
                    --user-size: ${settings.fontSize}rem;
                }
                body {
                    font-family: ${settings.fontFamily.startsWith('--') ? `var(${settings.fontFamily})` : settings.fontFamily};
                    background-color: var(--main-background);
                    color: var(--main-text);
                    /* C'est cette ligne qui permet aux paragraphes de grandir ! */
                    font-size: var(--user-size); 
                }
            `}} />
            
            <div className={settings.isInverted ? 'is-inverted' : ''}>
                {children}
            </div>
        </SettingsContext.Provider>
    );
}

export const useSettings = () => useContext(SettingsContext);