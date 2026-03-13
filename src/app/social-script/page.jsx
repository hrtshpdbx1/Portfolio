"use client"
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/project-detail.css';
import Footer from '@/app/components/Footer';
import CtaProject from '@/app/components/CtaProject';

export default function SocialScript() {

    // État pour stocker l'image à agrandir (null par défaut)
    const [zoomedImage, setZoomedImage] = useState(null);

    return (
        <div className="projectPageWrapper bbbreadme">

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
                    <p className="projectTagline">
                        SocialScript est un simulateur interactif d&apos;entraînement aux situations sociales,
                        développé dans le cadre d&apos;un workshop HTML/CSS/JavaScript de ma formation FullStack JavaScript Developer à Interface3. Le projet répond à un besoin d&apos;apprentissage explicite des codes sociaux dans un
                        environnement sécurisé, particulièrement utile pour les personnes neurodivergentes.
                    </p>
                    <figure className="imagePlaceholder no-decor">
                        <Image
                            src="/img/MockupSS.png"
                            alt="Mock-up"
                            width={800}
                            height={450}
                        />
                    </figure>
                </section>

                {/* --- OBJECTIFS PROJET --- */}
                <section className="projectSection">
                    <div className="objectif-section">
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
                                infini) en l&apos;intégrant aux S de Social Script. Cette fusion symbolise une boucle d&apos;apprentissage
                                continue et fluide tout en respectant les normes WCAG AAA voulues sur le site.
                            </p>
                        </div>

                        <div className='containerHorizontal'>
                            <figure
                                className="imagePlaceholder_Small clickable"
                                onClick={() => setZoomedImage({ src: "/img/croquislogo2.png", alt: "Croquis" })}
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
                                onClick={() => setZoomedImage({ src: "/img/recherchesgraphiques.png", alt: "Logos" })}
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
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    controls
                                >
                                    <source src="/img/screenshots/testnavclavier.mp4" type="video/mp4" />
                                </video>
                                <figcaption>Démonstration d&apos;une navigation au clavier sur les accordéons de la FAQ.</figcaption>
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
                                    <p>Pour éviter la perte de repères lors d&apos;interactions dynamiques, la méthode <code>.focus()</code>
                                         est déclenchée à chaque validation. Elle force le passage à l&apos;élément suivant, optimisant ainsi l&apos;accessibilité et la fluidité de la navigation au clavier.
                                        État visuel du bouton lorsqu&apos;il reçoit automatiquement le focus.
                                    </p>

                                </div>
                            </div>
                            <figure className="imagePlaceholder">
                                <Image
                                    src="/img/screenshots/focus.png" alt="Démonstration du focus visible"
                                    width={800}
                                    height={450}
                                />

                                <figcaption>État visuel du bouton lorsqu&apos;il reçoit automatiquement le focus.</figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* --- LEÇONS APPRISES --- */}
                <section className="projectSection">
                    <div className="objectif-section">
                        <h3>Ce que ce projet m&apos;a appris</h3>
                        <p>
                            Ce projet m&apos;a permis de transformer mes engagements en faveur de l&apos;inclusion en compétences techniques.
                            En m&apos;appuyant sur les standards du W3C, j&apos;ai consolidé ma pratique de l&apos;accessibilité native.
                        </p>

                        <ul className="projectList">
                            <li>
                                <strong>L&rsquo;accessibilit&eacute; comme socle technique :</strong> Ce projet m&rsquo;a permis de passer de la th&eacute;orie aux standards du W3C. J&rsquo;ai consolid&eacute; ma pratique de l&rsquo;accessibilit&eacute; native en m&rsquo;appuyant sur les principes POUR du WCAG 2.2 : Perceivable, Operable, Understandable, Robust.
                            </li>
                            <li>
                                <strong>Ma&icirc;trise des outils de diagnostic :</strong> L&rsquo;utilisation syst&eacute;matique des extensions <strong>Wave</strong> et <strong>axe DevTools</strong> fait d&eacute;sormais partie int&eacute;grante de mon workflow. Le test ultime via <strong>VoiceOver</strong> a &eacute;t&eacute; l&rsquo;&eacute;tape la plus formatrice, m&rsquo;obligeant &agrave; ajuster l&rsquo;annonce des feedbacks pour qu&rsquo;ils soient aussi fluides &agrave; l&rsquo;oreille qu&rsquo;&agrave; l&rsquo;&oelig;il.
                            </li>
                            <li>
                                <strong>Optimisation de la charge cognitive :</strong> J&rsquo;ai appris &agrave; appliquer le concept du &quot;Less is More&quot; pour les interfaces neuro-inclusives, en purgeant les distractions visuelles et en stabilisant la navigation pour r&eacute;duire la fatigue attentionnelle.
                            </li>
                            <li>
                                <strong>Architecture de donn&eacute;es et limites :</strong> L&rsquo;utilisation de <strong>JSON Server</strong> m&rsquo;a permis de mod&eacute;liser des arbres de d&eacute;cision complexes. Cela m&rsquo;a &eacute;galement sensibilis&eacute;e aux enjeux du passage d&rsquo;un prototype &agrave; une application de production n&eacute;cessitant une API REST plus robuste.
                            </li>
                        </ul>

                        <h4>Analyse critique du workflow et perspectives </h4>
                        <p>
                            Le développement de ce simulateur m&apos;a forcée à structurer une logique
                            conditionnelle avancée en JavaScript. J&apos;ai appris à gérer des flux de données
                            asynchrones tout en maintenant un état d&apos;interface cohérent, garantissant que
                            chaque branche du scénario reste accessible et réjouable.
                        </p>
                        <p>
                            Forte de cette base, je travaille actuellement à une refonte UI (via des gestionnaires d&apos;état) pour
                            optimiser l&apos;expérience et l&apos;accessibilité, notamment par l&apos;ajout d&apos;un mode
                            &quot;Surcharge Sensorielle&quot;. En parallèle, je prépare l&apos;évolution du
                            projet vers une architecture Full-Stack sécurisée (API RESTful,
                            authentification JWT, base de données) afin de transformer ce prototype
                            statique en une véritable plateforme communautaire et collaborative.
                        </p>

                    </div>
                </section>
                 <CtaProject />
            </main>
           
            <Footer />
        </div>
    );
}