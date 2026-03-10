"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faRocket, faCheckDouble, faCompassDrafting, faPeopleGroup, faBullhorn, faChartLine, faPenNib, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/project-detail.css';

export default function SocialScript() {

  // État pour stocker l'image à agrandir (null par défaut)
    const [zoomedImage, setZoomedImage] = useState(null);

    return (
        <div className="projectPageWrapper bbbreadme">
            <nav className="projectNav">
                {/* Overlay */}
            {zoomedImage && (
                <div className="imageOverlay" onClick={() => setZoomedImage(null)}>
                    <Image
                        src={zoomedImage.src}
                        alt={zoomedImage.alt}
                        width={1200}
                        height={800}
                        className="enlarged-img"
                    />
                    <span className="closeOverlay">&times;</span>
                </div>
            )}

                <Link href="/" className="back-link">
                    <button className="btn">
                        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '10px' }} />
                        Retour au portfolio
                    </button>
                </Link>
            </nav>

            <main id="main-content" className="projectPage">
                <header className="projectHero">
                    <h1>Social Script</h1>


                    <div className="projectMeta">
                        <div className="metaContainerLeft">
                            <div className="metaItem">
                                <strong>Type</strong>
                                <ul><li>Workshop</li></ul>
                            </div>
                            <div className="metaItem">
                                <strong>Rôle</strong>
                                <ul>
                                    <li>Développement</li>
                                    <li>Design</li>
                                    <li>Rédaction</li>
                                </ul>
                            </div>
                            <div className="metaItem">
                                <strong>Tech</strong>
                                <ul>
                                    <li>HTML / CSS</li>
                                    <li>JavaScript</li>
                                    <li>JSON Server</li>
                                </ul>
                            </div>
                        </div>
                        <div className="metaContainerRight">
                            <div className="metaItem">
                                <a href="https://github.com/hrtshpdbx1/SocialScript" target="_blank" rel="noopener noreferrer" className="btn">
                                    <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} /> Code source
                                </a>
                            </div>
                            <div className="metaItem">
                                <a href="https://social-script-nine.vercel.app" target="_blank" rel="noopener noreferrer" className="btn">
                                    <FontAwesomeIcon icon={faRocket} style={{ marginRight: '8px' }} /> Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="projectSection">
                    <figure className="imagePlaceholder">
                        <Image
                            src="/img/MockupSS.png"
                            alt="Mock-up"
                            width={800}
                            height={450}
                        />
                    </figure>

                    <p className="projectTagline">
                        SocialScript est un simulateur interactif d&apos;entraînement aux situations sociales,
                        développé dans le cadre d&apos;un workshop HTML/CSS/JavaScript de ma formation Developper Javascript
                        Fullstack à Interface3. Le projet répond à un besoin d&apos;apprentissage explicite des codes sociaux dans un
                        environnement sécurisé, particulièrement utile pour les personnes neurodivergentes.
                    </p>
                </section>

                {/* <figure className="imagePlaceholder">
                        <Image
                            src="/img/screenshots/homepageSS.png"
                            alt="capture d'écran de la page d'accueil du site SocialScript"
                            width={800}
                            height={450}
                        />
                        <figcaption>Capture d&apos;écran de la page d&apos;accueil du site SocialScript</figcaption>
                    </figure> */}


                {/* --- OBJECTIFS PROJET --- */}
                <section className="projectSection">
                    <div className="highlight">
                        <h2>Objectif du projet</h2>
                        <p>
                            Ce projet vient d&apos;un besoin que j&apos;ai rencontré personnellement. Étant autiste et TDAH, c&apos;est par la
                            répétition et l&apos;analyse consciente des interactions que j&apos;ai acquis des compétences sociales qui ne me venaient pas naturellement. J&apos;ai
                            toujours rêvé d&apos;un environnement où m&apos;entraîner sans craindre les malentendus ou les faux
                            pas du temps réel. Ce projet est cette réalisation : un simulateur où les personnes neurodivergentes
                            peuvent expérimenter, analyser et progresser dans un cadre structuré et bienveillant.
                        </p>

                        <h4>✅ Fonctionnalités clés :</h4>
                        <ul className="projectList">
                            <li><strong>Affichage dynamique :</strong> Gestion des scénarios via JavaScript et un JSON server.</li>
                            <li><strong>Génération d&apos;avatars :</strong> Utilisation de Dicebear API pour générer des interlocuteur..ices uniques.</li>
                            <li><strong>Feedback pédagogique :</strong> Explication détaillée des codes implicites et possibilité de rejouer pour explorer toutes les issues possibles.</li>
                            <li><strong>Ressources :</strong> Pages comprenant diverses ressources facilement accessibles grâce au champ de recherches et labels.</li>
                        </ul>
                    </div>
                </section>

                {/* --- DESIGN --- */}
                <section className="projectSection">
                    <div className="projet_design">
                        <h2>Design</h2>
                        <div className="elem_design">
                            <p>
                                Mes recherches graphiques ont abouti à un design qui reprend le logo de l&apos;autisme (un sigle
                                infini) en l&apos;intégrant au S de Social Script. Cette fusion symbolise une boucle d&apos;apprentissage
                                continue et fluide tout en respectant les normes WCAG AAA voulues sur le site.
                            </p>
                        </div>

                        <div className='containerHorizontal'> 
                            {/* <figure className="imagePlaceholder_Small">
                            <Image
                                src="/img/croquislogo2.png" alt="Croquis et recherches graphiques"
                                width={800}
                                height={450}
                            />
                            <figcaption>Croquis et recherches graphiques</figcaption> 
                            </figure>
                        <figure className="imagePlaceholder_Small">
                            <Image
                                src="/img/recherchesgraphiques.png"
                                alt="Différentes versions du logo"
                                style={{ marginTop: '20px' }}
                                width={800}
                                height={450}
                            />
                            <figcaption>Différentes versions du logo réalisées sur Illustrator</figcaption>
                        </figure> */}

                     
                          <figure 
        className="imagePlaceholder_Small clickable" 
        onClick={() => setZoomedImage({src: "/img/croquislogo2.png", alt: "Croquis"})}
    >
        <Image
            src="/img/croquislogo2.png" 
            alt="Croquis graphiques"
            width={800}
            height={450}
        />
        <figcaption>Croquis (cliquer pour agrandir)</figcaption> 
    </figure>

    <figure 
        className="imagePlaceholder_Small clickable"
        onClick={() => setZoomedImage({src: "/img/recherchesgraphiques.png", alt: "Logos"})}
    >
        <Image
            src="/img/recherchesgraphiques.png"
            alt="Différentes versions du logo"
            width={800}
            height={450}
        />
        <figcaption>Versions Illustrator (cliquer pour agrandir)</figcaption>
    </figure>
                        </div>
                        
                    </div>
                </section>

                {/* --- DEFI TECH --- */}
                <section className="projectSection">
                    <div className="project-technique">
                        <h2>L&apos;Accessibilité</h2>
                        <div className="intro-text">
                            <p>
                                Pour un projet s&apos;adressant aux personnes neurodivergentes, l&apos;accessibilité n&apos;est pas une option,
                                mais le socle de l&apos;expérience utilisateur. Mon défi a été de réduire la charge cognitive tout en
                                assurant une navigation robuste pour les technologies d&apos;assistance.
                            </p>
                        </div>

                        <div className="article-point">
                            <div className="point-content">
                                <div className="title-wrapper">
                                    <div className="section-title-line"></div>
                                    <h3>Navigation sémantique native</h3>
                                </div>
                                <p>
                                    J&apos;ai privilégié l&apos;utilisation des balises HTML5 <code>&lt;details&gt;</code> et
                                    <code>&lt;summary&gt;</code> pour les FAQ et les sections d&apos;analyse.
                                </p>
                            </div>
                            <div className="point-media">
                                <div className="htmlConcept">
                                    <span className="codeComment">L&apos;élément natif permet de gérer l&apos;ouverture/fermeture sans JS </span> <br /><br />
                                    <code>
                                        &lt;<span className='rose'>details</span>&gt;<br />
                                        &nbsp;&nbsp; &lt;<span className='rose'>summary</span>&gt;Titre de la FAQ&lt;/<span className='rose'>summary</span>&gt; <br />
                                        &nbsp;&nbsp; &lt;<span className='rose'>p</span>&gt;Contenu accessible par défaut.&lt;/<span className='rose'>p</span>&gt; <br />
                                        &lt;/<span className='rose'>details</span>&gt;<br />
                                    </code>
                                </div>
                                <div className="benefit-box">
                                    <p>
                                        <strong>L&apos;intérêt technique :</strong> Ces balises offrent une interactivité native sans
                                        JavaScript. Elles sont <strong>accessibles par défaut</strong> : le navigateur gère lui-même le focus
                                        clavier et communique automatiquement l&apos;état aux lecteurs d&apos;écran.
                                    </p>

                                </div>
                            </div>
                            <figure className="imagePlaceholder">
                                <video loop muted playsInline controls>
                                    <source src="/img/screenshots/testnavclavier.mp4" type="video/mp4" />
                                </video>
                                <figcaption>Navigation clavier de la FAQ</figcaption>
                            </figure>
                        </div>

                        <div className="article-point">
                            <div className="point-content">
                                <div className="title-wrapper">
                                    <div className="section-title-line"></div>
                                    <h3>Gestion proactive du Focus</h3>
                                </div>
                                <p>
                                    Dans une application dynamique où le contenu est généré par JavaScript,
                                    le curseur clavier se perd souvent lors d&apos;un rafraîchissement. J&apos;ai implémenté un système de <strong>Focus Management</strong>.
                                </p>
                            </div>
                            <div className="point-media">
                                <div className="codeConcept">
                                    <span className="codeComment">On force le focus sur le bouton suivant pour guider l&apos;utilisateur clavier</span>
                                    <br />
                                    <code>
                                        <br />
                                        <span className='rose'>const </span>
                                        <span className='lila'>nextBtn </span>
                                        <span className='rose'> = </span>
                                        <span className='lila'> document</span>
                                        .
                                        <span className='vert'>querySelector</span>
                                        <span className='orange'>&#x28;</span>
                                        <span className='yellow'>&apos;.option-btn&apos;</span>
                                        <span className='orange'>&#x29;</span>;
                                        <br />
                                        <span className='lila'>nextBtn</span>
                                        .<span className='vert'>focus</span>
                                        <span className='orange'>&#x28;</span>
                                        <span className='rose'>&#123; </span>
                                        focusVisible
                                        <span className='rose'> :</span>
                                        <span className='lila'> true </span>
                                        <span className='rose'>&#125;</span>
                                        <span className='orange'>&#x29;</span>;
                                    </code>
                                </div>
                                <div className="benefit-box">
                                    <p> <strong>Focus dynamique :</strong> Dès que l&apos;utilisateur valide un choix, j&apos;utilise la méthode <code>.focus()</code>. Cela garantit une navigation fluide au clavier et évite les clics inutiles.</p>

                                </div>
                            </div>
                            <figure className="imagePlaceholder">
                                <Image
                                    src="/img/screenshots/focus.png" alt="Démonstration du focus visible"
                                    width={800}
                                    height={450}
                                />

                                <figcaption>Capture d&apos;écran montrant le focus visible sur le premier bouton de réponse</figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* --- LEÇONS APPRISES --- */}
                <section className="projectSection">
                    <div className="highlight">
                        <h3>Ce que ce projet m&apos;a appris</h3>
                        <p>
                            Ce projet m&apos;a permis de transformer mes engagements en faveur de l&apos;inclusion en compétences techniques.
                            En m&apos;appuyant sur les standards du W3C, j&apos;ai consolidé ma pratique de l&apos;accessibilité native.
                        </p>

                        <ul className="projectList">
                            <li>
                                <strong>L&rsquo;accessibilit&eacute; comme socle technique :</strong> Ce projet m&rsquo;a permis de passer de la th&eacute;orie aux standards du W3C. J&rsquo;ai consolid&eacute; ma pratique de l&rsquo;accessibilit&eacute; native en m&rsquo;appuyant sur les principes <strong>POUR</strong> (Perceptible, Utilisable, Compr&eacute;hensible, Robuste).
                            </li>
                            <li>
                                <strong>Ma&icirc;trise des outils de diagnostic :</strong> L&rsquo;utilisation syst&eacute;matique de <strong>Wave</strong> et des <strong>axe DevTools</strong> fait d&eacute;sormais partie int&eacute;grante de mon workflow. Le test ultime via <strong>VoiceOver</strong> a &eacute;t&eacute; l&rsquo;&eacute;tape la plus formatrice, m&rsquo;obligeant &agrave; ajuster l&rsquo;annonce des feedbacks pour qu&rsquo;ils soient aussi fluides &agrave; l&rsquo;oreille qu&rsquo;&agrave; l&rsquo;&oelig;il.
                            </li>
                            <li>
                                <strong>Optimisation de la charge cognitive :</strong> J&rsquo;ai appris &agrave; appliquer le concept du &quot;Less is More&quot; pour les interfaces neuro-inclusives, en purgeant les distractions visuelles et en stabilisant la navigation pour r&eacute;duire la fatigue attentionnelle.
                            </li>
                            <li>
                                <strong>Architecture de donn&eacute;es et limites :</strong> L&rsquo;utilisation de <strong>JSON Server</strong> m&rsquo;a permis de mod&eacute;liser des arbres de d&eacute;cision complexes. Cela m&rsquo;a &eacute;galement sensibilis&eacute;e aux enjeux du passage d&rsquo;un prototype &agrave; une application de production n&eacute;cessitant une API REST plus robuste.
                            </li>
                        </ul>

                        <h4>Analyse critique du workflow</h4>
                        <p>
                            Le d&eacute;veloppement de ce simulateur m&rsquo;a forc&eacute;e &agrave; structurer une logique conditionnelle avanc&eacute;e en JavaScript. J&rsquo;ai appris &agrave; g&eacute;rer des flux de donn&eacute;es asynchrones tout en maintenant un &eacute;tat d&rsquo;interface coh&eacute;rent, garantissant que chaque branche du sc&eacute;nario reste accessible et r&eacute;jouable.
                        </p>

                    </div>
                </section>
            </main>

            <div className="projectFooter">
                <p>Prêt·e à discuter d&apos;accessibilité et de neuro-inclusion ?</p>
                <Link href="/#contact" className="btn">Me contacter</Link>
            </div>

            <footer className="main-footer-inverted">
                <div className="footer-container">
                    <div className="footer-left">
                        <Link href="/" className="footer-logo">Louise Moraldy</Link>
                    </div>
                    <div className="footer-right">
                        <div className="social-icons">
                            <a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="https://instagram.com/ton-profil" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="mailto:ton-email@exemple.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}