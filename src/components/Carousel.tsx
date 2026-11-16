import React, { useEffect, useRef, useState, ReactNode } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Carousel.scss';

type Props = {
  id: string;
  title: string;
  label: string; // used for the arrow buttons' accessible names
  children: ReactNode;
  className?: string;
};

// A section title with prev/next arrows over a horizontal track that shows
// three items per view on desktop, two on tablet and one on phones.
function Carousel({ id, title, label, children, className = '' }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 12);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 12);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, []);

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className={`carousel-container ${className}`} id={id}>
      <div className="carousel-header">
        <h1>{title}</h1>
        <div className="carousel-arrows">
          <button type="button" aria-label={`Previous ${label}`} onClick={() => scrollByPage(-1)} disabled={!canPrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button type="button" aria-label={`Next ${label}`} onClick={() => scrollByPage(1)} disabled={!canNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className="carousel-track" ref={trackRef} onScroll={updateArrows}>
        {children}
      </div>
    </div>
  );
}

export default Carousel;
