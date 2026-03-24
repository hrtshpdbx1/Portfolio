"use client"
import React from 'react';
import '../styles/project-detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Settings } from 'lucide-react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import CtaProject from '@/components/CtaProject';


export default function Demarche() {
    return (
        <div className="projectPageWrapper bbbreadme">
            <main id="main-content" className="projectPage">

                {/* --- HEADER --- */}
                <header className="projectHero">
                    <h1>L&apos;accessibilité par le design</h1>

                    <div className="projectMeta">
                        <div className="metaContainerLeft">
                            <div className="metaItem">
                                <strong>Type</strong>
                                <ul><li>Portfolio</li></ul>
                            </div>
                            <div className="metaItem">
                                <strong>Focus</strong>
                                <ul>
                                    <li>Accessibilité</li>
                                    <li>Design</li>
                                </ul>
                            </div>
                            <div className="metaItem">
                                <strong>Tech</strong>
                                <ul>
                                    <li>React</li>
                                    <li>Next.js</li>
                                </ul>
                            </div>
                        </div>
                        <div className="metaContainerRight">
                            <div className="metaItem">
                                <a href="https://github.com/hrtshpdbx1/Portfolio.git" target="_blank" rel="noopener noreferrer" className="btn">
                                    <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} /> Code source
                                </a>
                            </div>

                        </div>
                    </div>
                </header>

                {/* --- INTRO --- */}
                <section className="projectSection ">

                    <div className="introText">
                        <p> Bienvenue sur mon portfolio. Si vous cliquez sur l&apos;icône <Settings size={22} style={{ display: 'inline', verticalAlign: 'text-bottom', strokeWidth: 2.5, color: 'var(--main-text)' }} aria-label="roue crantée" />
                            , vous découvrirez un panneau de réglages un peu particulier.
                            Mon approche du développement web est simple : <strong>ce n&apos;est
                                pas à l&apos;utilisateur de s&apos;adapter à l&apos;interface, c&apos;est à l&apos;interface de
                                s&apos;adapter à l&apos;utilisateur.</strong> Plutôt que de prétendre deviner vos besoins ou
                            de &quot;me mettre à votre place&quot;, j&apos;ai conçu ce site pour vous donner le
                            contrôle. Typographie, interlignage, contrastes : à vous de choisir
                            l&apos;expérience de lecture qui vous convient le mieux.
                        </p>
                    </div>

                </section>

                {/* --- DESIGN --- */}
                <section className="projectSection">
                    <div className='containerHorizontal'>
                        <figure>
                            <Image
                                src="/img/ThemesAdaptables_tiny.png"
                                alt="Plusieurs écrans de smartphones illustrant le portfolio avec différentes combinaisons de thèmes de couleurs et de polices de caractères"
                                width={821}
                                height={314}
                            />
                        </figure>
                    </div>
                    <div className="objectif-section">


                        {/* --- A11Y --- */}
                        <div className="objectif-section">
                            <h2>Un design a11y</h2>
                            <p>
                                L'accessibilité web ("a11y") consiste à concevoir des interfaces utilisables par toutes et tous, y compris les personnes en situation de handicap. Plus qu'une obligation légale, c'est pour moi un droit humain fondamental et une responsabilité de développeuse. Pour garantir cette inclusion, je me suis imposé une contrainte technique forte : coder un portfolio 100% modulable, qui s'adapte à vos réglages sans jamais casser la mise en page.
                            </p>

                        </div>

                        <ul className="projectList">
                            <li>
                                <strong>Une architecture CSS 100% mathématique :</strong> Presque toutes les tailles du
                                site reposent sur des variables relatives (<code>rem</code> et <code>em</code>). Lorsque vous
                                cliquez sur + ou - pour changer la taille du texte, vous modifiez une
                                unique variable racine (<code>--user-size</code>). Les titres, les marges et les
                                espacements se recalculent instantanément et proportionnellement en cascade.
                            </li>
                            <li>
                                <strong>Deux couleurs pour tout gouverner :</strong> Le thème visuel entier repose sur
                                seulement deux variables CSS (<code>--main-text</code> et <code>--main-background</code>). Chaque
                                élément (bordures, ombres subtiles, transparences) est calculé à partir de
                                ces deux couleurs. Cela permet une inversion parfaite des couleurs en un
                                clic pour réduire la fatigue visuelle.
                            </li>
                            <li>
                                <strong>Zéro &quot;Flash Blanc&quot; (FOUC) :</strong> Vos préférences sont sauvegardées
                                dans le navigateur (<code>localStorage</code>). Pour éviter que le site ne s&apos;affiche en
                                blanc avant d&apos;appliquer votre thème sombre, le CSS est injecté
                                dynamiquement dès la première milliseconde de chargement.
                            </li>
                            <li>
                                <strong>Navigation au clavier & Mobile :</strong> Le site est entièrement navigable sans
                                souris grâce à des états <code>:focus-visible</code> très marqués. De plus, les
                                animations ou les comportements de défilement (comme le <code>scroll-snapping</code>)
                                sont désactivés sur mobile ou petit écran pour garantir une expérience
                                tactile sans frustration.
                            </li>
                        </ul>
                    </div>
                    <div className='containerHorizontal'>
                        <figure>
                            <Image
                                src="/img/CustomSidebar_tiny.png"
                                alt="Maquette du panneau de réglages affichant les options de personnalisation illustrée avec un curseur de souris et un indicateur de focus au clavier visible"
                                width={821}
                                height={314}
                            />
                        </figure>


                    </div>

                </section>



                {/* --- OUTILS ET CREDITS */}
                <section className="projectSection">
                    <div className="objectif-section">
                        <h2>Crédits</h2>
                        <h3>Typographies inclusives</h3>
                        <p>Aller au-delà de la simple taille du texte est essentiel pour une vraie démarche d'accessibilité. J'ai donc sélectionné plusieurs polices de caractères pensées par des chercheurs et des designers pour répondre à divers besoins cognitifs ou visuels. Vous pouvez les activer librement depuis le panneau de réglages.</p>
                        {/* ACCORDÉON */}
                        <div className="creditsAccordion">
                            {/* --- BBB--- */}
                            <details>
                                <summary>
                                    <span className="accordionArrow">▶</span> BBBReadMe
                                </summary>
                                <div className="accordionContent">
                                    <p>
                                        <strong><a href="https://typotheque.byebyebinary.space/fr/fontes/bbb-readme" target="_blank" rel="noopener noreferrer">BBB ReadMe</a> :</strong> Cette typographie a été développée pour tenter de répondre aux besoins spécifiques des personnes ayant un trouble cognitif impactant la lecture, comme les troubles dys, le TDAH ou le TSA. Pour s&apos;assurer de son efficacité, la police a fait l&apos;objet d&apos;une étude rigoureuse via des entretiens avec un panel mixte d&apos;utilisateurs. Leurs retours ont permis d&apos;apporter des corrections précises aux caractères, qui ont ensuite été validées par les participants eux-mêmes pour confirmer l&apos;amélioration du confort de lecture.
                                    </p>
                                    <p> Crée par Eugénie
                                        Bidaut, Ludi Loiseau & Clara Sambot de la collective ByeByeBinary.
                                        <br />
                                        Étude menée par Sophie Vela, Enz@ Le Garrec et Camille Circlude.
                                        <br />
                                        Licence :
                                        <a href="https://typotheque.genderfluid.space/fr/licences" target="_blank" rel="noopener noreferrer">CUTE</a>
                                    </p>
                                </div>
                            </details>

                            {/* --- EIDO --- */}
                            <details>
                                <summary>  <span className="accordionArrow">▶</span> Eido </summary>
                                <div className="accordionContent">
                                    <p>
                                        <strong><a href="https://lpc.univ-amu.fr/en/eido-font.html" target="_blank" rel="noopener noreferrer">Eido</a> :</strong>Eido est une police de caractères conçue spécifiquement pour la vision périphérique, ciblant principalement les personnes malvoyantes. Elle s&apos;adresse tout particulièrement aux patients atteints de DMLA (Dégénérescence Maculaire Liée à l&apos;Âge, soit plus d&apos;un million de personnes en France), qui peinent à reconnaître les mots dans un texte. Sa grande spécificité est d&apos;améliorer significativement la reconnaissance périphérique des lettres et des mots, sans pour autant modifier les performances de la lecture centrale classique. Ces travaux ont d&apos;ailleurs été publiés dans la revue scientifique PLoS ONE.

                                        <p> Crée par J.-B. Bernard, C. Aguilar et E. Castet du Laboraroire de psychologie cognitive Univ. Aix-Marseille
                                            <br />
                                            Licence :
                                            Non précisée.
                                        </p>

                                        (Créée par J.-B. Bernard, C. Aguilar et E. Castet /
                                        Lab. de psychologie cognitive Univ. Aix-Marseille).
                                    </p>
                                </div>
                            </details>
                            <details>
                                {/* --- ACCESSIBLE DFA--- */}
                                <summary>  <span className="accordionArrow">▶</span>  Accessible-DfA </summary>
                                <div className="accordionContent">
                                    <p>
                                        <strong><a href="https://github.com/Orange-OpenSource/font-accessible-dfa" target="_blank" rel="noopener noreferrer">Accessible-DfA</a> :</strong> PCette typographie est pensée pour offrir une lisibilité universelle et surmonter diverses contraintes, qu&apos;elles soient visuelles (basse vision, cataracte), cognitives (dyslexie, lecteurs débutants) ou environnementales (lecture en extérieur sur mobile, interface de conduite). Elle est également optimisée pour un sous-titrage efficace à destination des personnes malentendantes. Pour garantir une lisibilité maximale, son design est épuré, très contrasté, avec des formes larges et des espacements généreux. Elle se distingue par un travail poussé sur la différenciation des caractères pour éviter les confusions (comme l/I/i/1 ou C/O/0) et intègre un système anti-inversion en concentrant le poids sur la base des lettres (comme q/p/d/b). Enfin, la ponctuation et l&apos;accentuation sont fortement renforcées pour rester parfaitement distinctes, y compris sur les lettres majuscules.
                                    </p>
                                    <p> Crée par  <a href="https://github.com/denischene" target="_blank" rel="noopener noreferrer">Denis Chêne </a> Chêne au sein de l&apos;unité de recherche Orange Labs à Grenoble
                                        <br />
                                        Licence : SIL Open Font License
                                    </p>
                                </div>

                            </details>


                            {/* --- OPENDYSLEXIC --- */}
                            <details>
                                <summary>  <span className="accordionArrow">▶</span>  OpenDyslexic </summary>
                                <div className="accordionContent">
                                    <p>
                                        <strong>
                                            <a href="https://opendyslexic.org" target="_blank" rel="noopener noreferrer"> OpenDyslexic
                                            </a>
                                        </strong>
                                        Cette police vise à accroître la fluidité de la lecture pour les personnes dyslexiques en réduisant la confusion, le chevauchement et l&apos;inversion des lettres. Pour y parvenir, les caractères possèdent une base élargie et plus lourde qui aide l&apos;œil à les ancrer sur la ligne, évitant ainsi de confondre des lettres visuellement proches comme le b, d, p ou q. Elle propose également des formes uniques et un espacement accru. Très accessible, elle est intégrée par défaut dans plusieurs outils (liseuses Kindle, Instapaper, Wikipedia) et peut s&apos;installer facilement sur vos ordinateurs (Windows, Mac) et appareils mobiles.
                                    </p>
                                    <p> Crée par  <a href="https://abbiegonzalez.com/" target="_blank" rel="noopener noreferrer">Abelardo Gonzalez </a>
                                        <br />
                                        Licence : SIL Open Font License
                                    </p>
                                </div>
                            </details>
                        </div>

                        <div className="creditsAccordion">
                            <h3>Couleurs et contrastes</h3>
                            <p>
                                L&apos;esthétique ne devrait jamais se faire au détriment du confort de lecture. Pour prévenir la fatigue visuelle, toutes les couleurs de ce menu respectent scrupuleusement les exigences de contraste du WCAG. Chaque palette a été générée et validée via l&apos;outil  <strong><a href="https://randoma11y.com/" target="_blank" rel="noopener noreferrer">RandomA11y</a></strong>, garantissant ainsi une expérience à la fois harmonieuse, moderne et 100% accessible.
                            </p>
                        </div>


                        {/* ACCORDÉON 2 */}
                        <div className="creditsAccordion">
                            {/* --- RandomA11y-- */}
                            <details>
                                <summary>   <span className="accordionArrow">▶</span> RandomA11y
                                </summary>
                                <div className="accordionContent">
                                    <p>
                                        <strong><a href="https://randoma11y.com/" target="_blank" rel="noopener noreferrer">RandomA11y</a> :</strong> Ce générateur de palettes gratuit est conçu pour aider les designers et développeurs à créer des interfaces accessibles. Il génère automatiquement des paires de couleurs (texte et arrière-plan) qui respectent strictement les standards de contraste WCAG (garantissant un ratio minimum de 4.5:1 pour le texte normal). Cet outil élimine le besoin de tester manuellement les couleurs et permet d&quot;explorer des combinaisons créatives tout en s&quot;assurant qu&quot;elles restent parfaitement lisibles pour tous et toutes.
                                    </p>
                                    <p> Crée par par <a href="https://www.johno.com/" target="_blank" rel="noopener noreferrer">John Otander</a> & <a href="https://mrmrs.cc/" target="_blank" rel="noopener noreferrer">Adam Morse</a>.
                                    </p>
                                </div>
                            </details>
                        </div>
                    </div>

                </section>



                <CtaProject />
            </main>

            <Footer />
        </div>
    );
}