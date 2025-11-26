import { useEffect, useState } from 'react'
import './App.css'

// Social Media Icons
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" width="24" height="24" aria-hidden="true">
    <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.76.73 5.45 2.1 7.83L.5 31.5l7.84-2.08C10.74 30.74 13.35 31.5 16 31.5 24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 3c6.76 0 12.26 5.5 12.26 12.26 0 6.76-5.5 12.26-12.26 12.26-2.4 0-4.76-.7-6.76-2.04l-.48-.31-4.64 1.24 1.24-4.53-.31-.48A12.2 12.2 0 0 1 3.74 15.76C3.74 9 9.24 3.5 16 3.5zm-5.2 5.6c-.26-.6-.54-.61-.8-.62-.2-.01-.43-.01-.66-.01s-.6.09-.92.45c-.31.35-1.21 1.18-1.21 2.88 0 1.7 1.24 3.34 1.41 3.57.17.22 2.38 3.62 5.86 4.93 2.9 1.14 3.48.91 4.11.85.63-.06 2.02-.82 2.31-1.61.29-.79.29-1.47.2-1.61-.09-.14-.31-.23-.66-.4-.35-.17-2.02-.99-2.33-1.1-.31-.11-.53-.17-.76.18-.23.35-.88 1.1-1.08 1.32-.2.23-.4.26-.74.09-.35-.17-1.46-.54-2.78-1.7-1.03-.92-1.72-2.05-1.92-2.4-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.6.17-.2.23-.35.34-.58.11-.23.06-.43-.03-.6-.09-.17-.75-1.8-1.06-2.46z" />
  </svg>
)

const marketProblems = [
  'Faible coordination et planification préalable',
  "Manque d'expertise technique et artistique",
  "Absence d'identité professionnelle cohérente",
  'Accueil et gestion des invités désorganisés',
]

const servicePhases = [
  {
    title: "Avant l'événement",
    image: '/services/avant-evenement.webp',
    items: [
      'Définition du concept et planification stratégique',
      'Élaboration des dossiers de sponsoring et présentations commerciales',
      'Prise de contact et gestion des intervenants',
    ],
  },
  {
    title: "Pendant l'événement",
    image: '/services/pendant-evenement.webp',
    items: [
      'Coordination sur site (accueil, timing, logistique)',
      'Support technique (son, lumière, audiovisuel)',
      'Couverture en direct sur les réseaux sociaux',
    ],
  },
  {
    title: "Après l'événement",
    image: '/services/apres-evenement.webp',
    items: [
      "Remise d'un rapport de clôture (photos, vidéos, bilans)",
      'Évaluation globale de la performance',
      'Collecte et analyse des retours participants/partenaires',
    ],
  },
]

const packs = [
  {
    badge: '01',
    title: 'Pack Essentiel',
    bullets: ['Les bases pour un événement organisé et structuré.'],
  },
  {
    badge: '02',
    title: 'Pack Volontaires',
    bullets: [
      "Organisation de l'événement",
      'Couverture médiatique',
      'Fourniture de bénévoles (organisateurs & photographes)',
    ],
  },
  {
    badge: '03',
    title: 'Pack Organisation Complète',
    bullets: ["Prise en charge totale de l'événement, de A à Z"],
  },
  {
    badge: '04',
    title: 'Pack Documentation Pro',
    bullets: [
      'Vidéos et photos professionnelles',
      'Équipe dédiée aux réseaux sociaux',
    ],
  },
]

const whyUs = [
  'Une équipe jeune, engagée et pluridisciplinaire',
  'Un large réseau de partenaires et prestataires fiables',
  "Une expérience réussie dans divers types d'événements",
  'Une identité visuelle moderne et un sens du détail',
]

const caseStudies = [
  {
    title: 'Chrono Focus',
    tag: 'Photographie',
    text:
      'ChronoFocus 2025, un événement dédié à la photographie, a été créé et organisé par Eventico. Nous avons assuré :',
    bullets: [
      "La réalisation complète de l'événement, de A à Z",
      "La gestion générale de l'organisation",
      'La coordination des workshops',
      "L'accompagnement et la gestion des speakers",
      "La mise à disposition d'hôtesses et hôtes professionnels",
    ],
    image: '/crono-focus.webp',
  },
  {
    title: 'Webscale',
    tag: 'Digital & Tech',
    text:
      'Webscale 2025, un événement dédié au digital et aux nouvelles technologies, organisé par Eventico. Nous avons assuré :',
    bullets: [
      'La gestion générale et la coordination globale',
      "L'accompagnement et la gestion des speakers",
      "La mise à disposition d'hôtesses et hôtes professionnels",
      'La supervision logistique et technique',
      "Le suivi et l'encadrement sur place",
    ],
    image: '/webscale.webp',
  },
  {
    title: 'Stork',
    tag: 'E-commerce',
    text:
      "Stork 2025, un événement qui réunit les e-commerçants afin d'échanger, de s'enrichir et de créer des liens professionnels. Nous avons assuré :",
    bullets: [
      "La planification et la coordination de l'organisation",
      "L'accueil et l'orientation des participants",
      "L'accompagnement et la gestion des intervenants",
      "La mise à disposition d'hôtesses et hôtes qualifiés",
      'La gestion logistique et le suivi opérationnel',
    ],
    image: '/stock.webp',
  },
]

const EventCard = ({ title, tag, text, bullets, image }) => (
  <div className="event-card">
    <div className="event-media">
      <picture>
        <source srcSet={image} type="image/webp" />
        <img src={image} alt={title} loading="lazy" decoding="async" />
      </picture>
      <span className="event-tag">{tag}</span>
    </div>
    <div className="event-body">
      <h3>{title}</h3>
      <p className="event-text">{text}</p>
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet}>
            <span className="event-dot" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1C3XQFx8go/?mibextid=wwXIfr',
    icon: FacebookIcon,
    color: '#1877F2',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/eventico-algeria/',
    icon: LinkedInIcon,
    color: '#0A66C2',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/eventico.algeria?igsh=MXhnaHh0NHRvMnIzcg==',
    icon: InstagramIcon,
    color: '#E4405F',
  },
]

function App() {
  const [navSmall, setNavSmall] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setNavSmall(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileNavOpen])

  const closeMobileNav = () => setMobileNavOpen(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      <header className={`navbar ${navSmall ? 'navbar-small' : ''}`}>
        <div className="nav-brand">
          <div className="brand-icon">
            <img src="/logo .jpg" alt="Eventico logo" loading="eager" decoding="async" />
          </div>
          <div className="brand-text">
            <span className="brand-mark gradient-text">EVENTICO</span>
            <span className="brand-tag">YOUR VISION OUR MISSION</span>
          </div>
        </div>
        
        <button
          className={`nav-toggle ${mobileNavOpen ? 'open' : ''}`}
          onClick={() => setMobileNavOpen((v) => !v)}
          aria-label="Ouvrir ou fermer la navigation"
          aria-expanded={mobileNavOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${mobileNavOpen ? 'open' : ''}`}>
          <a href="#accueil" onClick={closeMobileNav}>Accueil</a>
          <a href="#problemes" onClick={closeMobileNav}>Problèmes du marché</a>
          <a href="#services" onClick={closeMobileNav}>Nos services</a>
          <a href="#packs" onClick={closeMobileNav}>Nos Packs</a>
          <a href="#evenements" onClick={closeMobileNav}>Événements réalisés</a>
          <a href="#pourquoi" onClick={closeMobileNav}>Pourquoi nous choisir ?</a>
          <a href="#contact" className="btn ghost" onClick={closeMobileNav}>CONTACTEZ NOUS</a>
        </nav>
        {mobileNavOpen && <div className="nav-overlay" onClick={closeMobileNav} />}
      </header>

      <main>
        <section id="accueil" className="hero section reveal">
          <div className="hero-text">
            <div className="pill">OFFRE DE SERVICE</div>
            <h1 className="hero-title">
              <span className="logo-word gradient-text">EVENTICO</span> <br />
              <span className="highlight-sequence">
                <span className="highlight">YOUR VISION</span>{' '}
                <span className="highlight delay">OUR MISSION</span>
              </span>
            </h1>
            <p className="hero-paragraph">
              Eventico n'est pas une simple agence d'organisation d'événements.
              C'est une équipe de créatifs qui transforme les idées en expériences
              vivantes. Nous croyons qu'un événement réussi commence par
              une vision claire et se concrétise de l'idée à la réalisation.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn primary">CONTACTEZ NOUS</a>
              <a href="#services" className="text-link">Découvrir nos services</a>
            </div>
            <div className="contact-strip">
              +2137 82 46 15 02 / +2135 42 88 50 55 / +2135 52 55 33 24
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-frame">
              <picture>
                <source srcSet="/eventico.webp" type="image/webp" />
                <img
                  src="/eventico.webp"
                  alt="Equipe Eventico pendant un événement"
                  className="hero-photo"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
            </div>
          </div>
        </section>

        <section id="problemes" className="section muted">
          <div className="section-header reveal">
            <span className="eyebrow">LE MARCHÉ</span>
            <h2 className="section-title">Problèmes du marché que nous résolvons</h2>
            <p className="section-subtitle">Nous savons que l'organisation d'événements souffre de :</p>
          </div>
          <div className="card-grid reveal">
            {marketProblems.map((item, idx) => (
              <div key={item} className="card shadowed">
                <div className="icon-circle">
                  {['📅', '🎯', '🧭', '🤝'][idx]}
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-header reveal">
            <span className="eyebrow">AVANT / PENDANT / APRÈS</span>
            <h2 className="section-title">Nos services</h2>
            <p className="section-subtitle">
              Une prise en charge avant, pendant et après votre événement.
            </p>
          </div>
          <div className="service-grid reveal">
            {servicePhases.map((phase) => (
              <div key={phase.title} className="card soft">
                <div className="service-cover">
                  <picture>
                    <source srcSet={phase.image} type="image/webp" />
                    <img
                      src={phase.image}
                      alt={phase.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                </div>
                <div className="card-top">
                  <div className="small-pill">{phase.title}</div>
                </div>
                <ul>
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="timeline reveal">
            <div className="timeline-track">
              <div className="timeline-progress" />
            </div>
            <div className="timeline-steps">
              <div className="step">
                <span className="dot">1</span>
                <p>Avant</p>
              </div>
              <div className="step">
                <span className="dot">2</span>
                <p>Pendant</p>
              </div>
              <div className="step">
                <span className="dot">3</span>
                <p>Après</p>
              </div>
            </div>
          </div>
        </section>

        <section id="packs" className="section muted">
          <div className="section-header reveal">
            <span className="eyebrow">OFFRES</span>
            <h2 className="section-title">Nos Packs</h2>
            <p className="section-subtitle">Des offres adaptées à vos objectifs.</p>
          </div>
          <div className="pack-grid reveal">
            {packs.map((pack) => (
              <div key={pack.title} className="card pack">
                <div className="pack-badge">{pack.badge}</div>
                <h3>{pack.title}</h3>
                <ul>
                  {pack.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn primary ghostless">
                  Demander un devis
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="pourquoi" className="section">
          <div className="section-header reveal">
            <h2 className="section-title">Pourquoi nous choisir ?</h2>
            <span className="eyebrow mt-2">NOTRE SIGNATURE</span>
          </div>
          <div className="why-grid reveal">
            {whyUs.map((item, idx) => (
              <div key={item} className="card feature">
                <div className="icon-circle small">
                  {['🚀', '🤝', '🏆', '🎨'][idx]}
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="evenements" className="section muted">
          <div className="section-header reveal">
            <span className="eyebrow">CAS</span>
            <h2 className="section-title">Les événements réalisés cette année</h2>
            <p className="section-subtitle">
              Quelques exemples d'événements que nous avons accompagnés.
            </p>
          </div>
          <div className="case-grid reveal">
            {caseStudies.map((study, idx) => (
              <EventCard key={study.title} {...study} />
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-block reveal">
          <div className="cta-card">
            <span className="eyebrow center">TRAVAILLONS ENSEMBLE</span>
            <h2 className="section-title">Prêt à donner vie à votre événement ?</h2>
            <p className="section-subtitle">
              Parlez-nous de votre vision, nous la transformons en expérience.
            </p>
            <a href="https://wa.me/213782461502" className="btn primary large">
              CONTACTEZ NOUS
            </a>
            <div className="contact-lines">
              <span>
                +2137 82 46 15 02 / +2135 42 88 50 55 / +2135 52 55 33 24
              </span>
              <span>EVENTICO.ALGERIA</span>
            </div>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: link.color }}
                >
                  <span
                    className="social-dot"
                    style={{
                      background: link.color,
                      boxShadow:
                        '0 0 0 8px rgba(0, 0, 0, 0.06), 0 8px 22px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <link.icon />
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-line">EVENTICO - YOUR VISION OUR MISSION</div>
          <div className="footer-made-by">
            Made by{' '}
            <a href="https://kassemthe-devloper.vercel.app/" target="_blank" rel="noreferrer">
              Kassem
            </a>
          </div>
        </section>
      </main>
      <a
        className="floating-whatsapp"
        href="https://wa.me/213782461502"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Eventico sur WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  )
}

export default App



