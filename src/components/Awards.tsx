import React from "react";
import Carousel from "./Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faRocket, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';
import dnsLogo from '../assets/images/logos/dns-logo.png';
import smuLogo from '../assets/images/logos/smu-logo.svg';
import '../assets/styles/Awards.scss';

type Award = {
  title: string;
  body: string;
  logo?: string;
  logoAlt?: string;
  icon?: typeof faTrophy;
};

const awards: Award[] = [
  {
    logo: dnsLogo,
    logoAlt: "Digital Nova Scotia",
    title: "Finalist, One to Watch, Tech Forward Awards",
    body: "Named a finalist in the One to Watch category at Digital Nova Scotia's 2026 Tech Forward Awards. Winners are announced November 26 at Pier 21.",
  },
  {
    icon: faTrophy,
    title: "Pitch competition and hackathon winner",
    body: "Two-time pitch competition winner and three-time hackathon winner, including 1st place at the Dalhousie Black Student Association pitch event with Collana.",
  },
  {
    logo: smuLogo,
    logoAlt: "Saint Mary's University",
    title: "App Development Mentor, SMU Accessibility Program",
    body: "Mentoring participants in Saint Mary's University's Accessibility Program on mobile app development.",
  },
  {
    icon: faRocket,
    title: "Two-time founder",
    body: "Founded Collana, an AI-powered talent search platform, and Trojan, an AI security desktop app that finds vulnerabilities in startup codebases.",
  },
  {
    icon: faPenNib,
    title: "Writer with 200+ readers",
    body: "Beyond code, I write. My articles have reached more than 200 readers.",
  },
  {
    icon: faCanadianMapleLeaf,
    title: "Dalhousie Student Representative, Startup Canada",
    body: "Represented Dalhousie University students with Startup Canada.",
  },
];

function Awards() {
  return (
    <Carousel id="awards" title="Leadership & Awards" label="awards">
      {awards.map((a) => (
        <div className="award blueprint" key={a.title}>
          <span className="corner tl" /><span className="corner tr" />
          <span className="corner bl" /><span className="corner br" />
          <div className="award-head">
            {a.logo ? (
              <span className="award-logo"><img src={a.logo} alt={a.logoAlt} /></span>
            ) : (
              a.icon && <span className="award-icon"><FontAwesomeIcon icon={a.icon} /></span>
            )}
          </div>
          <h3>{a.title}</h3>
          <p>{a.body}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default Awards;
