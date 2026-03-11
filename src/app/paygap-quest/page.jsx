"use client"
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faRocket, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/project-detail.css';
import Image from 'next/image';
import { useState } from 'react';
import Footer from '@/app/components/Footer';


const CounterSrc = '/img/screenshots/CompteRebourok3.mp4';
const CalculatorScreen = '/img/screenshots/Calculateurv2.mp4';


export default function PayGapQuest() {
    const [zoomedImage, setZoomedImage] = useState(null);

    return (
        <div className="projectPageWrapper bbbreadme">
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

            <nav className="projectNav">
                <Link href="/" className="back-link">
                    <button className="btn">
                        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '10px' }} />
                        Retour au portfolio
                    </button>
                </Link>
            </nav>

            <main id="main-content" className="projectPage">
                <header className="projectHero">
                    <h1>PayGap Quest</h1>

                    <div className="projectMeta">
                        <div className="metaContainerLeft">
                            <div className="metaItem">
                                <strong>Type</strong>
                                <ul>
                                    <li>Hackathon</li>
                                </ul>
                            </div>
                            <div className="metaItem">
                                <strong>Rôle</strong>
                                <ul>
                                    <li>Porteuse de projet</li>
                                    <li>Développement Front-End</li>
                                    <li>Rédaction du contenu</li>
                                </ul>
                            </div>
                            <div className="metaItem">
                                <strong>Tech</strong>
                                <ul>
                                    <li>HTML / CSS</li>
                                    <li>JavaScript</li>
                                    <li>PHP / JSON</li>
                                </ul>

                            </div>

                        </div>
                        <div className="metaContainerRight">
                            <div className="metaItem">
                                <a href="https://github.com/sahardel92/PayGapHackathon" target="_blank" rel="noopener noreferrer" className="btn">
                                    <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} /> Code Source
                                </a>
                            </div>
                            <div className="metaItem">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="btn">
                                    <FontAwesomeIcon icon={faRocket} style={{ marginRight: '8px' }} /> Demo
                                </a>
                            </div>
                        </div>
                        <p> ⚠️ <strong>Cette version est une démonstration interactive Frontend uniquement.</strong> L&apos;architecture complète est consultable sur GitHub.</p>
                    </div>
                </header>

                <section className="projectSection">
                      <p className="projectTagline">
                        PayGap Quest est un simulateur interactif conçu pour lever le voile sur les
                        inégalités de rémunération et transformer la
                        négociation de carrière en un exercice accessible à toutes. En traduisant des données macro-économiques
                        complexes en une
                        expérience utilisateur fluide et pédagogique, cet outil permet aux femmes de simuler leurs trajectoires,
                        de calculer
                        leur manque à gagner et de structurer leur discours pour exiger une rémunération à la hauteur de leur
                        talent.
                    </p>

                    <figure className="imagePlaceholder no-decor">
                        <Image
                            src="/img/MockupPG.png"
                            alt="Mock-up"
                            width={800}
                            height={450}
                        />
                    </figure>
                </section>



                {/* --- OBJECTIFS PROJET --- */}

                <section className="projectSection">
                    <div className="projet_purpose">
                        <div className='objectif-section'>
                            <h2>Objectif du projet</h2>

                            <p>
                                Le Problème : En Belgique, les femmes travaillent  &quot;gratuitement&quot; dès le 20 octobre (écart de 20%). L&rsquo;absence de négociation peut coûter 1M€ sur une carrière. </p>
                            <p>
                                La Solution : Un simulateur pédagogique pour transformer des données froides en outils de négociation concrets. </p>

                            {/* En Belgique, l&rsquo;égalité salariale est un enjeu de justice sociale : les femmes gagnent encore en
                                moyenne 20 % de moins que les hommes, travaillant symboliquement &quot;gratuitement&quot; à partir du 20 octobre. L&apos;absence de
                                négociation peut coûter jusqu&apos;à 1 million d&apos;euros sur une carrière.</p>
                            <p>J&apos;ai proposé ce projet pour répondre au thème <em>« @Finances, 3 jours pour prouver que la finance
                                peut être créative, accessible et engagée»</em> au Hackathon d&rsquo;Interface3 &#40;novembre 2025&#41;, et fut rapidement
                                rejointe par une équipe super motivée issues des différentes formations.</p> */}




                            <h4> ✅ Fonctionnalités clés :</h4>
                            <ul className="projectList">
                                <li><strong>Calculateur salarial :</strong> Comparatif dynamique basé sur le secteur, l&rsquo;ancienneté et le genre.</li>
                                <li><strong>Feuille de route :</strong> Guide de négociation salarial structuré et téléchargeable en PDF.</li>
                                <li><strong>Boîte à outils :</strong> Annuaire de ressources (livres, podcasts, lois) pour s&apos;informer.</li>
                                <li><strong>API Sectorielle :</strong> Structuration des données réelles du rapport 2024 de l&apos;IEFH.</li>
                            </ul>

                        </div>
                    </div>
                </section>

                {/* --- TECHNIQUES --- */}
                <section className="projectSection">
                    <div className="project-technique">
                        <h2>Réalisations</h2>

                        <div className="article-point">
                            <div className="point-content">
                                <div className="title-wrapper">
                                    <div className="section-title-line"></div>
                                    <h3> Front : Le compte à rebour dynamique</h3>
                                </div>

                                <h4>Rendre concret l&apos;éccart salarial</h4>
                                <p>
                                    Pour capter imm&eacute;diatement l&apos;attention des utilisateur&middot;ices,
                                    j&apos;ai d&eacute;velopp&eacute; un compteur pour cr&eacute;er un impact d&egrave;s la page d&apos;accueil.
                                    Mon objectif &eacute;tait de traduire une statistique &quot;froide&quot; en une r&eacute;alit&eacute; tangible.
                                    Le compte &agrave; rebours est initialis&eacute; &agrave; partir de la date du 20 octobre qui est la
                                    Journ&eacute;e de l&rsquo;in&eacute;galit&eacute; salariale (UnEqual Pay Day), date &agrave; partir
                                    de laquelle les femmes belges travaillent &quot;gratuitement&quot; jusqu&rsquo;&agrave; la fin de l&rsquo;ann&eacute;e.
                                    J&rsquo;ai con&ccedil;u une logique hybride qui d&eacute;tecte la date du jour.
                                    Avant le 20 octobre, le script affiche un compte &agrave; rebours (&quot;Dans X jours...&quot;);
                                    d&egrave;s la date pass&eacute;e, il bascule automatiquement en compteur de temps &eacute;coul&eacute;
                                    (&quot;Depuis X jours...&quot;). Ainsi le message reste percutant toute l&rsquo;ann&eacute;e.
                                </p>
                            </div>
                            <div className="point-media">
                                <div className="codeConcept">
                                    <span className="codeComment">&#x2f;&#x2f; Calcul dynamique du temps </span><br />
                                    <span className="rose">function</span> <span className="lila">updateCounter</span>
                                    <span className="yellow">()</span>
                                    <span className="orange"> &#123;</span><br />
                                    &nbsp;&nbsp;<span className="rose">const</span>
                                    <span className="lila"> today </span>
                                    <span className="rose"> =</span>
                                    <span className="rose">new </span>
                                    <span className="cyan">Date</span>
                                    <span className="rose">()</span>;<br />
                                    &nbsp;&nbsp;
                                    <span className="rose">let </span>
                                    diff
                                    <span className="rose"> = </span>
                                    <span className="lila">today</span>
                                    <span className="rose"> - </span>
                                    unequalPayDay;<br />

                                    &nbsp;&nbsp;<span className="rose">const </span>
                                    <span className="lila">diffDays</span>
                                    <span className="rose"> =</span>
                                    <span className="lila">Math</span>.
                                    <span className="vert">floor</span>
                                    <span className="rose"> (</span>
                                    diff
                                    <span className="rose"> / </span>
                                    <span className="indigo">(</span>
                                    <span className="lila">1000</span>
                                    <span className="rose"> * </span>
                                    <span className="lila">60</span>
                                    <span className="rose"> * </span>
                                    <span className="lila">60</span>
                                    <span className="rose"> * </span>
                                    <span className="lila">24</span>
                                    <span className="indigo">)</span>
                                    <span className="rose">)</span>
                                    ;
                                    <br />
                                    &nbsp;
                                    counterElement.innerHTML
                                    <span className="rose"> = </span>
                                    <span className="yellow">`Depuis </span>
                                    <span className="rose"> $&#123;</span>
                                    <span className="lila">diffDays</span>
                                    <span className="rose">&#125;</span>
                                    <span className="yellow"> jours...`</span>
                                    ;
                                    <br />
                                    <span className="orange">    &#125;</span><br />

                                </div>
                                <div className="project-homepage_screen">
                                    <figure className="imagePlaceholder">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            controls
                                            width="100%"
                                            style={{
                                                borderRadius: '8px',
                                            }}
                                            preload="metadata"
                                        >
                                            <source src={CounterSrc} type="video/mp4" />
                                            Votre navigateur ne supporte pas la lecture de vidéos.
                                        </video>
                                        <figcaption>Animation du compte à rebours hybride sur la page d&rsquo;accueil.
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <div className="article-point">
                            <div className="point-content">
                                <div className="title-wrapper">
                                    <div className="section-title-line"></div>
                                    <h3>Back : Le calculateur d&rsquo;&eacute;cart salarial</h3>
                                </div>
                                <h4>Comparatif bas&eacute; sur le secteur, l&rsquo;anciennet&eacute; et le genre.</h4>
                                <p>Pour rendre les donn&eacute;es de l&rsquo;IEFH concr&egrave;tes, notre &eacute;quipe a mis en place un simulateur dynamique. Le fonctionnement repose sur une architecture d&eacute;coupl&eacute;e o&ugrave; le Front-end interroge une API REST d&eacute;velopp&eacute;e en PHP</p>
                                {/* Diagramme et JSON */}
                                <div className='containerHorizontal'>
                                    <figure
                                        className={`imagePlaceholder_Small no-decor clickable ${zoomedImage ? 'zoomed' : ''}`}
                                        onClick={() => setZoomedImage({ src: "/img/PayGapdrawio.png", alt: "Architecture" })}
                                    >
                                        <Image
                                            src="/img/PayGapdrawio.png"
                                            alt="Diagramme de l'architecture"
                                            width={800}
                                            height={450}
                                            className="diagram-img"
                                        />
                                        <figcaption>
                                            Schéma de l&rsquo;architecture logicielle (cliquer pour agrandir).
                                        </figcaption>
                                    </figure>

                                    {/* Demo JSON*/}
                                    <div className="point-media">
                                        <div className="jsonConcept">
                                            <code>

                                                <span className='cyan'>  	&#8243;Santé&#8243; </span>
                                                <span className='rose'>  	&#58;  	&#123; </span>  <br />
                                                &nbsp;&nbsp; <span className='cyan'>  	&#8243;ecartHF&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='lila'> 0.17 </span>
                                                , <br />
                                                &nbsp;&nbsp;  <span className='cyan'> 	&#8243;metier&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='indigo'> 	&#123; </span>
                                                <br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; <span className='cyan'> 	&#8243;Infirmier Hospitalier&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='orange'> 	&#123; </span> <br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span className='cyan'> 	&#8243;CP&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='yellow'> 	&#8243;330&#8243; </span>
                                                , <br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span className='cyan'> 	&#8243;base&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='lila'> 	2800 </span>
                                                , <br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span className='cyan'> 	&#8243;femme&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='lila'> 	2700 </span>
                                                , <br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;  <span className='cyan'> 	&#8243;homme&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='lila'> 	2900 </span> <br />
                                                &nbsp;&nbsp; &nbsp;&nbsp;<span className='orange'>&#x7D;</span>,   <br />

                                                {/* Aide Soignante */}
                                                &nbsp;&nbsp; &nbsp;&nbsp;  <span className='cyan'> 	&#8243;Aide-Soignante&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='orange'> 	&#123; </span><br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span className='cyan'> 	&#8243;CP&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='yellow'> 	&#8243;330&#8243; </span>
                                                ,<br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span className='cyan'> 	&#8243;base&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='lila'> 	2500 </span>
                                                ,<br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<span className='cyan'> 	&#8243;femme&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='lila'> 	2450 </span>
                                                ,<br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span className='cyan'> 	&#8243;homme&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='lila'> 	2600 </span>
                                                <br />
                                                &nbsp;&nbsp; &nbsp;&nbsp;  <span className='orange'>&#x7D;</span>
                                                ,   <br />
                                                &nbsp;&nbsp; &nbsp;&nbsp;

                                                {/* --- Kinésithérapeute --- */}
                                                &nbsp;&nbsp; &nbsp;&nbsp; <span className='cyan'> &#8243;Kinesitherapeute&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='orange'> &#123; </span> <br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span className='cyan'> &#8243;CP&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='yellow'> &#8243;330&#8243; </span>, <br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span className='cyan'> &#8243;base&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='lila'> 3100 </span>, <br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span className='cyan'> &#8243;femme&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='lila'> 3000 </span>, <br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <span className='cyan'> &#8243;homme&#8243; </span>
                                                <span className='rose'> &#58; </span>
                                                <span className='lila'> 3200 </span> <br />
                                                &nbsp;&nbsp; &nbsp;&nbsp; <span className='orange'>&#x7D;</span>, etc. <br />

                                                &nbsp;&nbsp; <span className='indigo'> &#x7D; </span> <br />
                                                <span className='rose'> &#x7D; </span>
                                            </code>
                                        </div>
                                    </div>
                                </div>

                                <p>Le processus technique s&rsquo;articule en trois &eacute;tapes : </p>
                                <ul className="projectList">
                                    <li><strong>Communication asynchrone (AJAX/Fetch) :</strong> Lorsqu&rsquo;une utilisatrice saisit son secteur, son m&eacute;tier et son salaire, le Front-end envoie une requ&ecirc;te GET param&eacute;tr&eacute;e au serveur sans recharger la page.</li>
                                    <li><strong> Logique m&eacute;tier c&ocirc;t&eacute; Serveur (POO) :</strong> Le backend utilise la Programmation Orient&eacute;e Objet (via la classe SalaryCalculator) pour traiter la demande. Le script parse un fichier JSON source servant de base de donn&eacute;es, puis applique des algorithmes d&rsquo;ajustement selon le profil (ex: pond&eacute;ration de -10% pour un profil Junior ou +15% pour un profil Senior).</li>
                                    <li><strong>Traitement et Formatage :</strong> Le serveur calcule l&rsquo;&eacute;cart personnel et l&rsquo;&eacute;cart de genre du secteur, puis renvoie une r&eacute;ponse structur&eacute;e en JSON. Le Front-end r&eacute;cup&egrave;re ces objets pour mettre &agrave; jour dynamiquement l&rsquo;interface utilisateur.</li>
                                </ul>
                            </div>
                            {/* Screen Homepage */}
                            <div className="project-homepage_screen">
                                <figure className="imagePlaceholder">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        controls
                                        width="100%"
                                        style={{
                                            borderRadius: '8px',
                                        }}
                                        preload="metadata"
                                    >
                                        <source src={CalculatorScreen} type="video/mp4" />
                                        Votre navigateur ne supporte pas la lecture de vidéos.
                                    </video>
                                    <figcaption>
                                        Démonstration du simulateur : saisie des donn&eacute;es et affichage dynamique de l&rsquo;&eacute;cart salarial.</figcaption>
                                </figure>
                            </div>

                            <div className="point-content">
                                <p>Le d&eacute;fi majeur a &eacute;t&eacute; l&rsquo;harmonisation entre le traitement des donn&eacute;es en PHP et leur affichage c&ocirc;t&eacute; Front-end. Nous avons travaill&eacute; sur la gestion des CORS (Cross-Origin Resource Sharing) pour autoriser les requ&ecirc;tes entre les diff&eacute;rents environnements et assurer un flux de donn&eacute;es s&eacute;curis&eacute; et rapide.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- LEÇONS --- */}
                <section className="projectSection">
                    <div className='objectif-section'>
                        <h3>Ce que ce projet m&apos;a appris</h3>
                        {/* <ul className="projectList">
                            <li><strong>Collaboration intensive :</strong> Intégration Front/Back en équipe.</li>
                            <li><strong>Git Flow sous tension :</strong> Gestion des conflits sur un sprint de 72h.</li>
                            <li><strong>UX Temporelle :</strong> Transformer une donnée froide en expérience percutante.</li>
                        </ul> */}
                        <ul className="projectList">
                            <li>
                                <strong>Coordination Front/Back sous pression :</strong> Participer &agrave; un Hackathon de 72h m&rsquo;a appris &agrave; g&eacute;rer l&rsquo;int&eacute;gration de mes composants React avec une logique backend complexe en PHP. J&rsquo;ai d&ucirc; assurer la fluidit&eacute; du flux de donn&eacute;es (JSON) et r&eacute;soudre les probl&eacute;matiques de <strong>CORS</strong> pour permettre une communication s&eacute;curis&eacute;e entre les environnements.
                            </li>
                            <li>
                                <strong>Git Flow et collaboration intensive :</strong> Travailler en &eacute;quipe multidisciplinaire sur un sprint aussi court a n&eacute;cessit&eacute; une gestion rigoureuse des branches. J&rsquo;ai consolid&eacute; ma ma&icirc;trise de Git pour &eacute;viter les conflits de fusion et maintenir une base de code stable malgr&eacute; l&rsquo;urgence.
                            </li>
                            <li>
                                <strong>Design d&rsquo;impact et UX temporelle :</strong> Ce projet m&rsquo;a fait d&eacute;couvrir comment transformer une donn&eacute;e macro-&eacute;conomique abstraite en une exp&eacute;rience utilisateur percutante. Le d&eacute;veloppement du compteur hybride (rebours/temps &eacute;coul&eacute;) m&rsquo;a appris &agrave; utiliser le code comme un outil de narration pour sensibiliser &agrave; une cause sociale.
                            </li>
                            <li>
                                <strong>Vulgarisation technique et structuration :</strong> En tant que porteuse de projet, j&rsquo;ai appris &agrave; traduire des enjeux financiers complexes en fonctionnalités techniques claires, tout en veillant &agrave; ce que l&rsquo;interface reste p&eacute;dagogique et accessible &agrave; toutes.
                            </li>
                        </ul>

                        <h4>R&eacute;flexion sur l&rsquo;agilit&eacute;</h4>
                        <p>
                            L&rsquo;exp&eacute;rience du Hackathon a &eacute;t&eacute; un v&eacute;ritable catalyseur pour mon autonomie technique. J&rsquo;ai appris &agrave; prioriser les fonctionnalit&eacute;s pour livrer un <strong>MVP (Produit Minimum Viable)</strong> fonctionnel, tout en documentant pr&eacute;cis&eacute;ment l&rsquo;architecture pour permettre de futures &eacute;volutions hors mode &quot;sprint&quot;.
                        </p>
                    </div>
                </section>

                {/* --- CREDITS --- */}
                <section className="projectSection">
                    <div className="article-point">
                        <h2>Crédits 💖</h2>
                        <p>Ce projet est le fruit d&apos;une collaboration avec  :</p>
                        <ul className="projectList">
                            <li><strong>Développement Frontend :</strong>
                                <a href="https://github.com/Sara-pe" target="_blank" className="credit-link"> Sara</a>,
                                <a href="https://github.com/Vic50595" target="_blank" className="credit-link"> Victoria </a>
                                et Moi.
                            </li>
                            <li><strong>Développement Backend :</strong> <a href="https://github.com/sahardel92" target="_blank"
                                className="credit-link">Sahar D.</a></li>
                            <li><strong>Design : </strong><a href="https://deepthroadocus.itch.io/" target="_blank" className="credit-link">Romane</a> </li>

                        </ul>
                    </div>
                </section>
            </main>

            {/* <div className="projectFooter">
                <p>Vous cherchez une stagiaire soucieuse de l&apos;accessibilité ?</p>
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
            </footer> */}
             <Footer />
        </div>
    );
}