"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/project-detail.css';
import Image from 'next/image';
import { useState } from 'react';
import CtaProject from '@/app/components/CtaProject';
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
                                    <li>Front-End</li>
                                    <li>Rédaction</li>
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
                                <a href="https://hackathon2025.interface3.be/paygap/Frontend/index.html" target="_blank" rel="noopener noreferrer" className="btn">
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
                        données liées à l&apos;égalité salariale et transformer la
                        négociation de carrière en un exercice accessible et structuré. En traduisant des données macro-économiques
                        complexes en une
                        expérience utilisateur fluide et pédagogique, cet outil permet aux utilisatrices de simuler leurs trajectoires,
                        de calculer
                        leur évolution potentielle et d&apos;aborder les discussions salariales avec des arguments chiffrés et fiables.
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
                                L&apos;écart salarial est parfois perçu comme une donnée complexe ou abstraite. L&apos;objectif de
                                PayGap Quest était de dépasser la simple consultation de données pour offrir un
                                véritable outil d&apos;aide à la décision. Sachant que l&apos;absence de négociation peut avoir un impact significatif
                                sur l&apos;ensemble d&apos;une carrière, nous voulions concevoir une interface
                                capable d&apos;accompagner les utilisatrices avec des éléments tangibles et personnalisés pour faciliter
                                les échanges liés à la rémunération en entreprise.
                            </p>

                            <h3>Fonctionnalités clés :</h3>
                            <ul className="projectList">
                                <ul className="projectList">
                                    <li><strong>Calculateur salarial :</strong> Comparatif dynamique basé sur le secteur, l&rsquo;ancienneté et le genre.</li>
                                    <li><strong>Feuille de route :</strong> Guide de préparation structuré et téléchargeable en PDF.</li>
                                    <li><strong>Boîte à outils :</strong> Annuaire de ressources professionnelles pour s&apos;informer.</li>
                                    <li><strong>API Sectorielle :</strong> Structuration des données réelles du rapport 2024 de l&apos;Institut pour l&apos;égalité des femmes et des hommes (<a href="https://igvm-iefh.belgium.be/fr" target="_blank" rel="noopener noreferrer">IEFH</a>).</li>
                                </ul>

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
                                    <h3> Front : Le compte à rebours dynamique</h3>
                                </div>
                                <h4>Visualiser la donnée temporelle</h4>
                                <p>
                                    Pour capter imm&eacute;diatement l&apos;attention des utilisateur&middot;ices,
                                    j&apos;ai d&eacute;velopp&eacute; un compteur pour cr&eacute;er un point d&apos;accroche d&egrave;s la page d&apos;accueil.
                                    Mon objectif &eacute;tait de traduire une statistique &quot;froide&quot; en une r&eacute;alit&eacute; tangible.
                                    Le compte &agrave; rebours est initialis&eacute; &agrave; partir du 20 octobre, qui correspond &agrave; la
                                    journ&eacute;e symbolique de l&rsquo;UnEqual Pay Day (date &agrave; partir de laquelle, statistiquement, s&apos;illustre l&apos;&eacute;cart de revenus annuel).
                                    J&rsquo;ai con&ccedil;u une logique hybride qui d&eacute;tecte la date du jour.
                                    Avant le 20 octobre, le script affiche un compte &agrave; rebours ;
                                    d&egrave;s la date pass&eacute;e, il bascule automatiquement en compteur de temps &eacute;coul&eacute;. Ainsi, le message reste pertinent toute l&rsquo;ann&eacute;e.
                                </p>

                            </div>

                            {/* Vidéo du compte à rebours */}
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
                                    <figcaption>
                                        Démonstration du compte à rebours dynamique hybride.
                                    </figcaption>
                                </figure>
                            </div>

                            {/* Code concept */}
                            <div className="point-media">
                                <div className="codeConcept">
                                    <span className="codeComment">&#x2f;&#x2f; Date de référence : Unequal Pay Day</span><br />
                                    <span className="rose">const </span> unequalPayDay <span className="rose">= </span><span className="rose">new </span><span className="cyan">Date</span><span className="yellow">(</span><span className="yellow">&apos;2025-10-20T00:00:00&apos;</span><span className="yellow">)</span>;<br />
                                    <span className="rose">const </span> counterElement <span className="rose">= </span><span className="lila">document</span>.<span className="vert">getElementById</span><span className="yellow">(</span><span className="yellow">&apos;counter&apos;</span><span className="yellow">)</span>;<br /><br />

                                    <span className="rose">function </span><span className="vert">updateCounter</span><span className="yellow">()</span> <span className="orange">&#123;</span><br />
                                    &nbsp;&nbsp;<span className="rose">const </span> today <span className="rose">= </span><span className="rose">new </span><span className="cyan">Date</span><span className="yellow">()</span>;<br />
                                    &nbsp;&nbsp;<span className="rose">let </span> diff <span className="rose">= </span> today <span className="rose">- </span> unequalPayDay;<br /><br />

                                    &nbsp;&nbsp;<span className="codeComment">&#x2f;&#x2f; Utilisation de Math.abs pour garantir des valeurs positives</span><br />
                                    &nbsp;&nbsp;<span className="rose">const </span> absoluteDiff <span className="rose">= </span><span className="lila">Math</span>.<span className="vert">abs</span><span className="yellow">(</span>diff<span className="yellow">)</span>;<br /><br />

                                    &nbsp;&nbsp;<span className="rose">const </span> diffDays <span className="rose">= </span><span className="lila">Math</span>.<span className="vert">floor</span><span className="yellow">(</span>absoluteDiff <span className="rose">/</span> <span className="indigo">(</span><span className="lila">1000</span> <span className="rose">*</span> <span className="lila">60</span> <span className="rose">*</span> <span className="lila">60</span> <span className="rose">*</span> <span className="lila">24</span><span className="indigo">)</span><span className="yellow">)</span>;<br />
                                    &nbsp;&nbsp;<span className="rose">const </span> diffHours <span className="rose">= </span><span className="lila">Math</span>.<span className="vert">floor</span><span className="yellow">(</span><span className="indigo">(</span>absoluteDiff <span className="rose">/</span> <span className="orange">(</span><span className="lila">1000</span> <span className="rose">*</span> <span className="lila">60</span> <span className="rose">*</span> <span className="lila">60</span><span className="orange">)</span><span className="indigo">)</span> <span className="rose">%</span> <span className="lila">24</span><span className="yellow">)</span>;<br />
                                    &nbsp;&nbsp;<span className="rose">const </span> diffMinutes <span className="rose">= </span><span className="lila">Math</span>.<span className="vert">floor</span><span className="yellow">(</span><span className="indigo">(</span>absoluteDiff <span className="rose">/</span> <span className="orange">(</span><span className="lila">1000</span> <span className="rose">*</span> <span className="lila">60</span><span className="orange">)</span><span className="indigo">)</span> <span className="rose">%</span> <span className="lila">60</span><span className="yellow">)</span>;<br /><br />

                                    &nbsp;&nbsp;<span className="codeComment">&#x2f;&#x2f; Logique hybride d&apos;affichage</span><br />
                                    &nbsp;&nbsp;<span className="rose">if </span><span className="yellow">(</span>diff <span className="rose">&lt;</span> <span className="lila">0</span><span className="yellow">)</span> <span className="orange">&#123;</span><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="codeComment">&#x2f;&#x2f; AVANT le 20 octobre : Compte à rebours</span><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;counterElement.<span className="cyan">innerHTML</span> <span className="rose">= </span><span className="yellow">`Dans &lt;strong&gt;</span><span className="rose">$&#123;</span>diffDays<span className="rose">&#125;</span><span className="yellow"> jours&lt;/strong&gt;, &lt;strong&gt;</span><span className="rose">$&#123;</span>diffHours<span className="rose">&#125;</span><span className="yellow"> heures&lt;/strong&gt; et &lt;strong&gt;</span><span className="rose">$&#123;</span>diffMinutes<span className="rose">&#125;</span><span className="yellow"> minutes&lt;/strong&gt;, les femmes travailleront gratuitement.`</span>;<br />
                                    &nbsp;&nbsp;<span className="orange">&#125;</span> <span className="rose">else</span> <span className="orange">&#123;</span><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="codeComment">&#x2f;&#x2f; APRÈS le 20 octobre : Temps écoulé</span><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;counterElement.<span className="cyan">innerHTML</span> <span className="rose">= </span><span className="yellow">`Depuis &lt;strong&gt;</span><span className="rose">$&#123;</span>diffDays<span className="rose">&#125;</span><span className="yellow"> jours&lt;/strong&gt;, &lt;strong&gt;</span><span className="rose">$&#123;</span>diffHours<span className="rose">&#125;</span><span className="yellow"> heures&lt;/strong&gt; et &lt;strong&gt;</span><span className="rose">$&#123;</span>diffMinutes<span className="rose">&#125;</span><span className="yellow"> minutes&lt;/strong&gt;, les femmes travaillent gratuitement.`</span>;<br />
                                    &nbsp;&nbsp;<span className="orange">&#125;</span><br />
                                    <span className="orange">&#125;</span><br /><br />

                                    <span className="codeComment">&#x2f;&#x2f; Mise à jour de l&apos;affichage chaque minute</span><br />
                                    <span className="vert">setInterval</span><span className="yellow">(</span>updateCounter<span className="rose">, </span><span className="lila">1000</span> <span className="rose">*</span> <span className="lila">60</span><span className="yellow">)</span>;<br />
                                    <span className="vert">updateCounter</span><span className="yellow">()</span>;<br />
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
                           
                                <p>Le processus technique s&rsquo;articule en trois &eacute;tapes : </p>
                                <ul className="projectList">
                                    <li><strong>Communication asynchrone (AJAX/Fetch) :</strong> Lorsqu&rsquo;une utilisatrice saisit son secteur, son m&eacute;tier et son salaire, le Front-end envoie une requ&ecirc;te GET param&eacute;tr&eacute;e au serveur sans recharger la page.</li>
                                    <li><strong> Logique m&eacute;tier c&ocirc;t&eacute; Serveur :</strong> Le backend utilise la Programmation Orient&eacute;e Objet (via la classe SalaryCalculator) pour traiter la demande. Le script parse un fichier JSON source servant de base de donn&eacute;es, puis applique des algorithmes d&rsquo;ajustement selon le profil (ex: pond&eacute;ration de -10% pour un profil Junior ou +15% pour un profil Senior).</li>
                                    <li><strong>Traitement et Formatage :</strong> Le serveur calcule l&rsquo;&eacute;cart personnel et l&rsquo;&eacute;cart de genre du secteur, puis renvoie une r&eacute;ponse structur&eacute;e en JSON. Le Front-end r&eacute;cup&egrave;re ces objets pour mettre &agrave; jour dynamiquement l&rsquo;interface utilisateur.</li>
                                </ul>
                            </div>

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

                            <div className="point-content">
                                <p>Le d&eacute;fi majeur a &eacute;t&eacute; l&rsquo;harmonisation entre le traitement des donn&eacute;es en PHP et leur affichage c&ocirc;t&eacute; Front-end. Nous avons travaill&eacute; sur la gestion des CORS (Cross-Origin Resource Sharing) pour autoriser les requ&ecirc;tes entre les diff&eacute;rents environnements et assurer un flux de donn&eacute;es s&eacute;curis&eacute; et rapide.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- LEÇONS --- */}
                <section className="projectSection">
                    <div className='objectif-section'>
                        <h2>Ce que ce projet m&apos;a appris</h2>
                        {/* <ul className="projectList">
                            <li><strong>Collaboration intensive :</strong> Intégration Front/Back en équipe.</li>
                            <li><strong>Git Flow sous tension :</strong> Gestion des conflits sur un sprint de 72h.</li>
                            <li><strong>UX Temporelle :</strong> Transformer une donnée froide en expérience percutante.</li>
                        </ul> */}
                        <ul className="projectList">
                            <li>
                                <strong>Coordination Front/Back sous pression :</strong> Participer &agrave; un Hackathon de 72h m&rsquo;a appris &agrave; g&eacute;rer l&rsquo;int&eacute;gration du Front avec une logique backend complexe en PHP. J&rsquo;ai d&ucirc; assurer la fluidit&eacute; du flux de donn&eacute;es (JSON) et r&eacute;soudre les probl&eacute;matiques de <strong>CORS</strong> pour permettre une communication s&eacute;curis&eacute;e entre les environnements.
                            </li>
                            <li>
                                <strong>Git Flow et collaboration intensive :</strong> Travailler en &eacute;quipe multidisciplinaire sur un sprint aussi court a n&eacute;cessit&eacute; une gestion rigoureuse des branches. J&rsquo;ai consolid&eacute; ma ma&icirc;trise de Git pour &eacute;viter les conflits de fusion et maintenir une base de code stable malgr&eacute; l&rsquo;urgence.
                            </li>
                            <li>
                                <strong>Design d&rsquo;impact et UX temporelle :</strong> Ce projet m&rsquo;a fait d&eacute;couvrir comment transformer une donn&eacute;e macro-&eacute;conomique abstraite en une exp&eacute;rience utilisateur percutante. Le d&eacute;veloppement du compteur hybride (rebours/temps &eacute;coul&eacute;) m&rsquo;a appris &agrave; utiliser le code comme un outil de data visualisation au service de l&apos;exp&eacute;rience utilisateur.
                            </li>
                            <li>
                                <strong>Vulgarisation technique et structuration :</strong> En tant que porteuse de projet, j&rsquo;ai appris &agrave; traduire des enjeux financiers complexes en fonctionnalités techniques claires, tout en veillant &agrave; ce que l&rsquo;interface reste p&eacute;dagogique et accessible &agrave; toutes.
                            </li>
                        </ul>

                        <h3>R&eacute;flexion sur l&rsquo;agilit&eacute;</h3>
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
                                <a href="https://github.com/Sara-pe" target="_blank" className="credit-link">  Sara Pena Zamorano</a>,
                                <a href="https://github.com/Vic50595" target="_blank" className="credit-link"> Victoria Peretz </a>
                                et moi.
                            </li>
                            <li><strong>Développement Backend :</strong> <a href="https://github.com/sahardel92" target="_blank"
                                className="credit-link">Sahar Dellouz</a></li>
                            <li><strong>Illustrations : </strong><a href="https://deepthroadocus.itch.io/" target="_blank" className="credit-link">: Romane Froment</a> </li>

                        </ul>
                    </div>
                </section>
                <CtaProject />
            </main>
            <Footer />
        </div>
    );
}