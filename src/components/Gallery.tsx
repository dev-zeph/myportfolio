import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Carousel.scss';
import Carousel from './Carousel';
import useIsMobile from './useIsMobile';
import media1 from '../assets/images/gallery/media1.jpg';
import media2 from '../assets/images/gallery/media2.jpg';
import media3 from '../assets/images/gallery/media3.jpg';
import media4 from '../assets/images/gallery/media4.jpg';
import media5 from '../assets/images/gallery/media5.jpg';
import media6 from '../assets/images/gallery/media6.jpg';
import media7 from '../assets/images/gallery/media7.jpg';
import media8 from '../assets/images/gallery/media8.jpg';
import tfaStage from '../assets/images/gallery/tfa-stage.jpg';
import dnsStudio from '../assets/images/gallery/dns-studio.jpg';
import startupCanada from '../assets/images/gallery/startup-canada.jpg';
import '../assets/styles/Gallery.scss';

type Moment = {
  src: string;
  alt: string;
  title: string;
  meta: string;
  story: string;
  small?: boolean; // low-resolution source: shown smaller on a plate instead of stretched
};

// Newest first, so the story reads from where I am now back to where it started.
const moments: Moment[] = [
  {
    src: media1,
    alt: "AI Showcase and Mixer presenter lineup, Tribe and Volta",
    title: "AI Showcase and Mixer",
    meta: "Volta x Tribe · Nov 17, 2026",
    story: "Presenting Trojan alongside founders from OrgSync and Urai AI at Volta and Tribe's AI Showcase and Mixer.",
  },
  {
    src: tfaStage,
    alt: "On stage at the 2026 Tech Forward Awards",
    title: "On stage at Tech Forward",
    meta: "Digital Nova Scotia · 2026",
    story: "Called up on stage at the 2026 Tech Forward Awards to be recognized as a One to Watch finalist.",
  },
  {
    src: dnsStudio,
    alt: "Seated in a studio during a recorded interview",
    title: "Finalist interview",
    meta: "Digital Nova Scotia · 2026",
    story: "In the studio with Digital Nova Scotia, recording my finalist interview for the Tech Forward Awards.",
  },
  {
    src: media2,
    alt: "Tech Forward Awards 2026 One to Watch finalists graphic",
    title: "Tech Forward Awards finalist",
    meta: "Digital Nova Scotia · 2026",
    story: "Named one of three finalists for the One to Watch award at Digital Nova Scotia's Tech Forward Awards. Winners are announced November 26 at Pier 21.",
  },
  {
    src: media5,
    alt: "AI After Hours Demo Night speaker lineup",
    title: "AI After Hours Demo Night",
    meta: "The AI Collective Halifax x Tribe",
    story: "On the speaker lineup at AI After Hours, demoing Trojan to a room of builders, thinkers and doers in Halifax.",
  },
  {
    src: media3,
    alt: "Polaroid of presenters at AI After Hours, dated 11/03/26",
    title: "Demo night, captured",
    meta: "AI After Hours · Nov 3, 2026",
    story: "A polaroid with fellow presenters after the AI After Hours demo night.",
    small: true,
  },
  {
    src: media4,
    alt: "Group photo with the Tribe AI cohort",
    title: "Tribe AI cohort demo day",
    meta: "Tribe",
    story: "Pitching at the close of the Tribe AI cohort, then celebrating with the cohort and organizers.",
  },
  {
    src: media7,
    alt: "Pitching on stage at a Tribe hackathon",
    title: "Hackathon with Tribe",
    meta: "Tribe",
    story: "Pitching our build at a Tribe hackathon, a community of racialized people pursuing technology entrepreneurship in Canada.",
  },
  {
    src: startupCanada,
    alt: "Standing beside a Startup Canada banner",
    title: "Startup Canada",
    meta: "Dalhousie University representative",
    story: "Representing Dalhousie University at a Startup Canada event.",
  },
  {
    src: media6,
    alt: "Crossing the stage at Dalhousie University convocation",
    title: "Graduation",
    meta: "Dalhousie University",
    story: "Crossing the stage at Dalhousie University with a B.Sc. in Applied Computer Science.",
  },
  {
    src: media8,
    alt: "Standing on a downtown Toronto street",
    title: "Africa Accelerate",
    meta: "Toronto",
    story: "In Toronto for the Africa Accelerate program.",
  },
];

const PER_PAGE = 6;

const renderMoment = (m: Moment) => (
  <figure className={`moment${m.small ? ' moment-small' : ''}`} key={m.title}>
    <div className="moment-media">
      <img src={m.src} alt={m.alt} loading="lazy" />
    </div>
    <figcaption>
      <h3>{m.title}</h3>
      <span className="moment-meta">{m.meta}</span>
      <p>{m.story}</p>
    </figcaption>
  </figure>
);

function Gallery() {
  const isMobile = useIsMobile();
  const [page, setPage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pages = Math.ceil(moments.length / PER_PAGE);
  const shown = moments.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const go = (next: number) => {
    setPage(next);
    // Keep the section's top in view so a shorter set doesn't leave you lower down the page
    const el = sectionRef.current;
    if (el && el.getBoundingClientRect().top < 0) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Phones: one photo per view, swipe or use the arrows
  if (isMobile) {
    return (
      <Carousel id="gallery" title="Gallery" label="photos" className="gallery-carousel">
        {moments.map(renderMoment)}
      </Carousel>
    );
  }

  return (
    <div className="gallery-container" id="gallery" ref={sectionRef}>
      <div className="carousel-header">
        <h1>Gallery</h1>
        {pages > 1 && (
          <div className="carousel-arrows">
            <button type="button" aria-label="Previous photos" onClick={() => go(page - 1)} disabled={page === 0}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button type="button" aria-label="Next photos" onClick={() => go(page + 1)} disabled={page === pages - 1}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </div>
      <div className="gallery-grid" key={page}>
        {shown.map(renderMoment)}
      </div>
    </div>
  );
}

export default Gallery;
