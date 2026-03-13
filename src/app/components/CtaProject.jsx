import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; 
import style from '../styles/CtaProject.module.css'; // 

export default function CtaProject() {
    return (
        <section className={style.ctaSection}>
            <div className={style.ctaContainer}>
                <h3 className={style.ctaTitle}>
                    Ce projet vous a plu ?
                </h3>
                <p className={style.ctaText}>
                    Je suis actuellement à la recherche de nouvelles opportunités. 
                    Discutons ensemble de vos besoins en développement web et accessibilité.
                </p>
                
                <Link href="/#section5" className={`btn btn-outline ${style.ctaButton}`}>
                    Me contacter
                    <ArrowRight size={16} className={style.ctaIcon} />
                </Link>
            </div>
        </section>
    );
}