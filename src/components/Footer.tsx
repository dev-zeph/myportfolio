import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/dev-zeph" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="www.linkedin.com/in/chizulu-zephaniah-906582308" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p> Chizulu Zephaniah</p>
    </footer>
  );
}

export default Footer;