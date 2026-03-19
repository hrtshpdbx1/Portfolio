// ROOT LAYOUT
// Le squelette: <html>, <body>, <Sidebar /> <nav>
// qui va entourer et qui va servir à créer chaque page de l'app

"use client" // Indique à Next.js que c'est un composant client 
import React, { useState } from 'react'

// ----------------------------------------------
// ------------------- IMPORTS ------------------
// ----------------------------------------------
import "./globals.css";
import localFont from 'next/font/local'
import { config, text } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";
config.autoAddCss = false; // pour eviter le css auto de FA
import { SettingsProvider } from '@/SettingsContext';

// Déclaration des polices
const bbbReadMe = localFont({ src: '../../public/fonts/BBBReadMe-Regular.woff2', variable: '--font-bbb-readme' });
const openDyslexic = localFont({ src: '../../public/fonts/OpenDyslexic-Regular.otf', variable: '--font-open-dyslexic', preload: false });
const eido = localFont({ src: '../../public/fonts/eido.otf', variable: '--font-eido' , preload: false });
const accessibleDFA = localFont({ src: '../../public/fonts/accessibledfa.woff', variable: '--font-accessibledfa', preload: false });

export default function RootLayout({ children }) {


  return (
   <html lang="fr" className={`${bbbReadMe.variable} ${openDyslexic.variable} ${eido.variable} ${accessibleDFA.variable}`}>
      <head>
        <title>Louise Moraldy | Développeuse Fullstack & Accessibilité</title>
        <meta name="description" content="Portfolio de Louise Moraldy, spécialisée en JavaScript et interfaces accessibles." />
      </head>
      
      {/* Plus de style en ligne sur le body, elles sont dans le Context*/}
      <body>
        <SettingsProvider>
          <main>
            {/* La Sidebar n'a plus besoin de props, elle se connecte directement au Context */}
            <Sidebar /> 
            <BackToTop />
            <Navigation />
            {children}
          </main>
        </SettingsProvider>
      </body>
    </html>
  );
}