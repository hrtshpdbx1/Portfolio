//  PAGE.JS
// Le contenu : <Hero />, <About />, <Skills />, <Projects />, <Contact />)

import Link from "next/link";
import Image from 'next/image';
import HomepageSS from '../../public/img/screenshots/ThumbnailSS.png';
import HomepagePGQ from '../../public/img/screenshots/ThumbnailPQ.png';
import ContactForm from '@/app/components/ContactForm.jsx';
// @ -> pointe vers le dossier src

// Import des icônes Lucide
import { 
  CheckCircle2, 
  BookOpenCheck, 
  Users2, 
  Megaphone, 
  BarChart3, 
  Handshake 
} from 'lucide-react';



export default function Home() {
  return (
    <div>

      <main id="main-content">

        {/* --- SECTION 1 --- */}
        <section id="section1" className="page-section section1">
          <div className="content-container">
            <div className="text">
              <h1>Bonjour !</h1>
              <p> <span className="undertitle">Je suis Louise, une développeuse javascript fullstack en formation. Je souhaite créer et coder un web
                accessible
                à tous et toutes.</span></p>


            </div>
          </div>
        </section>

        {/* --- SECTION 2 --- */}

        <section id="section2" className="page-section section2">

          <div className="content-container">
            <div className="text_intro">
              <h2>À propos</h2>
             <p>
                Dans le courant des années 2000, j&apos;ai découvert que je pouvais personnaliser le layout
                de mon Myspace et j&apos;ai passé des heures à bidouiller du CSS sur le PC fixe
                familial. C&apos;était ma première expérience de code, aussi déroutante que
                grisante. J&apos;étais fascinée par ces caractères obscurs capables de créer
                des univers aussi riches. Quelques semaines plus tard, j&apos;avais refait le layout
                des profils de tout mon entourage.
              </p>
             <p>
                <em>Fast forward de quelques années </em> : après mes études d&apos;Arts Numériques aux Beaux-Arts,
                je passe 4 ans dans le secteur associatif à coordonner des projets complexes à fort impact social. 
                Cette expérience m&apos;a appris la gestion de projet, la communication et la résolution de problèmes, 
                tout en nourrissant mon besoin de <em>mettre mon énergie au service de solutions concrètes.</em>
              </p>
              <p>
                Quand j&apos;ai intégré la formation Full Stack JavaScript Developer chez Interface3, la
                boucle s&apos;est bouclée. Renouer avec ces langages de programmation sous le prisme
                de l&apos;architecture logicielle m&apos;a permis de transformer ma curiosité d&apos;antan en
                une véritable expertise technique.
              </p>
              <p>
                Ayant moi-même un handicap invisible, je suis particulièrement sensible à
                l&apos;accessibilité. 
                Ce qui m&apos;anime aujourd&apos;hui : concevoir des interfaces audacieuses et vivantes, sans jamais sacrifier l&apos;équité numérique.
              </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 3 --- */}
        {/* --- Compétences --- */}

        <section id="section3" className="page-section section3">
          <div className="text_intro">

            <h2>Compétences</h2>

            <p className="competences-intro">
              Forte d&apos;une solide expérience en gestion de projet et en plaidoyer
              je combine aujourd&apos;hui mes compétences transversales avec une expertise technique en développement web.
              Éligible aux mesures d&apos;embauche <strong>activa.brussels</strong>, je recherche des
              opportunités
              où l&apos;impact social rencontre l&apos;innovation technologique.
            </p>
          </div>
          <div className="div_skills">
            <div className="skills-columns">
              <div className="skills-category">
                <ul className="skills-list learning">
                  <li><span className="icon-logo html"></span> HTML5, CSS3</li>
                  <li><span className="icon-logo js"></span> JavaScript (ES6+)</li>
                  <li><span className="icon-logo react"></span> React.js </li>
                  <li><span className="icon-logo node"></span> Node.js, Express</li>
                  <li><span className="icon-logo mongodb"></span> MongoDB</li>
                  <li><span className="icon-logo figma"></span> UI/UX Design (Figma)</li>
                </ul>
              </div>


              <div className="skills-category">

                <ul className="skills-list mastery">
                  <li>
                    <CheckCircle2 size={18} strokeWidth={1.5} />
                    <span>Gestion et coordination de projets</span>
                  </li>
                  <li>
                    <BookOpenCheck size={18} strokeWidth={1.5} />
                    <span>Conception d’outils pédagogiques</span>
                  </li>
                  <li>
                    <Users2 size={18} strokeWidth={1.5} />
                    <span>Facilitation de groupe</span>
                  </li>
                  <li>
                    <Megaphone size={18} strokeWidth={1.5} />
                    <span>Missions de plaidoyer</span>
                  </li>
                  <li>
                    <BarChart3 size={18} strokeWidth={1.5} />
                    <span>Suivi-évaluation</span>
                  </li>
                  <li>
                    <Handshake size={18} strokeWidth={1.5} />
                    <span>Collaboration interdisciplinaire</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 4 --- */}
        {/* --- Projets --- */}

        <section id="section4" className="page-section section4">

          <div className="section-intro">
                <h2>Projets sélectionnés</h2>
            <div className="projects_container">
              <div className="projet_elem">
                <Link href="/social-script">
                  <div className="media-container">
                    <Image
                      src={HomepageSS}
                      width={500}
                      height={500}
                      alt="Capture d'écran de Social Script"
                    />
                    <div className="overlay-layer">

                      <span className="overlay-text">Social Script</span>
                    </div>
                  </div>
                </Link>

              </div>

              <div className="projet_elem">

                <Link href="/paygap-quest">
                  <div className="media-container">
                    <Image
                      src={HomepagePGQ}
                      width={500}
                      height={500}
                      alt="Capture d'écran de PayGap Quest"
                    />
                    <div className="overlay-layer">

                      <span className="overlay-text">PayGap Quest</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
             </div>
        </section >

        {/* --- SECTION 5 --- */}
        {/* --- CONTACT FORM --- */}
        <section id="section5" className="page-section section5">
          <div className="section-intro">
            <h2>Contactez-moi</h2>
            <p>
                Je <em>recherche actuellement un stage</em> où je pourrai allier créativité, éthique et impact, pour
                contribuer à un web plus
                inclusif et respectueux. N&apos;hésitez pas à me contacter si vous cherchez une stagiaire,
              si vous avez une question ou simplement pour
              faire connaissance.</p>

            <div className="contactform_container">
              <div id="contact">


                <ContactForm />
              </div>
            </div>
          </div>
        </section>



      </main>


    </div>
  );
}