import React, { useState, useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PsychologyIcon from '@mui/icons-material/Psychology';
import '../assets/styles/Main.scss';

function Main() {
  const [displayedName, setDisplayedName] = useState('');
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [showNameCursor, setShowNameCursor] = useState(true);
  const [showTitleCursor, setShowTitleCursor] = useState(false);
  const [nameAnimationComplete, setNameAnimationComplete] = useState(false);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);
  
  // Define the name sequence with pauses
  const nameSequence = [
    { text: 'C', delay: 150 },
    { text: 'h', delay: 120 },
    { text: 'i', delay: 100 },
    { text: 'z', delay: 120 },
    { text: '', delay: 500 }, // Pause after "Chiz"
    { text: 'u', delay: 150 },
    { text: 'l', delay: 120 },
    { text: 'u', delay: 120 },
    { text: ' ', delay: 200 },
    { text: 'Z', delay: 150 },
    { text: 'e', delay: 120 },
    { text: 'p', delay: 100 },
    { text: 'h', delay: 120 },
    { text: 'a', delay: 100 },
    { text: 'n', delay: 120 },
    { text: 'i', delay: 100 },
    { text: '', delay: 400 }, // Pause after "Zephani"
    { text: 'a', delay: 150 },
    { text: 'h', delay: 120 },
    { text: '.', delay: 200 },
  ];

  // Define the title sequence
  const titleSequence = [
    { text: 'H', delay: 150 },
    { text: 'u', delay: 120 },
    { text: 'm', delay: 100 },
    { text: 'a', delay: 120 },
    { text: 'n', delay: 100 },
    { text: 'i', delay: 120 },
    { text: 't', delay: 100 },
    { text: 'a', delay: 120 },
    { text: 'r', delay: 100 },
    { text: 'i', delay: 120 },
    { text: 'a', delay: 100 },
    { text: 'n', delay: 120 },
    { text: ',', delay: 200 },
    { text: ' ', delay: 150 },
    { text: 'S', delay: 150 },
    { text: 'o', delay: 120 },
    { text: 'f', delay: 100 },
    { text: 't', delay: 120 },
    { text: 'w', delay: 100 },
    { text: 'a', delay: 120 },
    { text: 'r', delay: 100 },
    { text: 'e', delay: 120 },
    { text: ' ', delay: 150 },
    { text: 'E', delay: 150 },
    { text: 'n', delay: 120 },
    { text: 'g', delay: 100 },
    { text: 'i', delay: 120 },
    { text: 'n', delay: 100 },
    { text: 'e', delay: 120 },
    { text: 'e', delay: 100 },
    { text: 'r', delay: 120 },
    { text: ',', delay: 200 },
    { text: ' ', delay: 150 },
    { text: 'W', delay: 150 },
    { text: 'r', delay: 120 },
    { text: 'i', delay: 100 },
    { text: 't', delay: 120 },
    { text: 'e', delay: 100 },
    { text: 'r', delay: 120 },
    { text: '.', delay: 200 },
  ];

  // Name animation effect
  useEffect(() => {
    if (currentNameIndex < nameSequence.length) {
      const currentItem = nameSequence[currentNameIndex];
      
      const timer = setTimeout(() => {
        if (currentItem.text !== '') {
          setDisplayedName(prev => prev + currentItem.text);
        }
        setCurrentNameIndex(prev => prev + 1);
      }, currentItem.delay);

      return () => clearTimeout(timer);
    } else {
      // Name animation complete, immediately hide cursor and start title animation after a delay
      setNameAnimationComplete(true);
      setShowNameCursor(false); // Hide name cursor immediately
      
      const titleStartTimer = setTimeout(() => {
        setShowTitleCursor(true);
      }, 800);
      
      return () => clearTimeout(titleStartTimer);
    }
  }, [currentNameIndex, nameSequence]);

  // Title animation effect
  useEffect(() => {
    if (nameAnimationComplete && currentTitleIndex < titleSequence.length) {
      const currentItem = titleSequence[currentTitleIndex];
      
      const timer = setTimeout(() => {
        if (currentItem.text !== '') {
          setDisplayedTitle(prev => prev + currentItem.text);
        }
        setCurrentTitleIndex(prev => prev + 1);
      }, currentItem.delay);

      return () => clearTimeout(timer);
    } else if (nameAnimationComplete && currentTitleIndex >= titleSequence.length) {
      // Title animation complete
      setTitleAnimationComplete(true);
      const cursorTimer = setTimeout(() => {
        setShowTitleCursor(false);
      }, 1500);
      
      return () => clearTimeout(cursorTimer);
    }
  }, [currentTitleIndex, titleSequence, nameAnimationComplete]);

  // Name cursor blinking effect - only while typing
  useEffect(() => {
    if (!nameAnimationComplete) {
      const cursorInterval = setInterval(() => {
        setShowNameCursor(prev => !prev);
      }, 530);

      return () => clearInterval(cursorInterval);
    }
  }, [nameAnimationComplete]);

  // Title cursor blinking effect
  useEffect(() => {
    if (!titleAnimationComplete && showTitleCursor) {
      const cursorInterval = setInterval(() => {
        setShowTitleCursor(prev => !prev);
      }, 530);

      return () => clearInterval(cursorInterval);
    }
  }, [titleAnimationComplete, showTitleCursor]);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <PsychologyIcon className="brain-icon" />
        </div>
        <div className="content">
          <div className="main-content">
            <div className="social_icons">
              <a href="https://github.com/dev-zeph" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/chizulu-zephaniah-906582308" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
            <h1 className="typewriter-container">
              <span className="typewriter-text">{displayedName}</span>
              {!nameAnimationComplete && (
                <span className={`cursor ${showNameCursor ? 'visible' : 'hidden'}`}>|</span>
              )}
            </h1>
            <p className="typewriter-container">
              <span className="typewriter-text">{displayedTitle}</span>
              <span className={`cursor ${showTitleCursor ? 'visible' : 'hidden'}`}>|</span>
            </p>

            <div className="mobile_social_icons">
              <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            </div>
          </div>

          <div className="bio-summary">
            <p>
              I design and build software that helps businesses and communities solve problems. <br/>
              <em>Beyond engineering,</em> I am deeply committed to humanitarian causes, and I write occasionally.<br/> My long-term goal is to use my software development skills to amplify the impact of the non-profit initiatives I lead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;