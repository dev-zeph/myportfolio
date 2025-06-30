import React from "react";
import mock06 from '../assets/images/Revive.png';
import mock07 from '../assets/images/Dalnotes.png';
import mock08 from '../assets/images/B-ANAN.png';
import mock09 from '../assets/images/DCA.png';
import mock10 from '../assets/images/CHEM-AR.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Selection of My Work</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://archemapp.azurewebsites.net/molecules" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://archemapp.azurewebsites.net/molecules" target="_blank" rel="noreferrer"><h2>CHEM AR</h2></a>
                <p>Developed as Senior Developer, delivering a web application for virtual molecular visualization. Currently used by Professors at Dalhousie University.</p>
            </div>
            <div className="project">
                <a href="https://www.dalhousieconsultingassociation.ca/home" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.dalhousieconsultingassociation.ca/home" target="_blank" rel="noreferrer"><h2>DCA Website</h2></a>
                <p>Part of the team that designed and developed the official website for the Dalhousie Consulting Association. Worked as a Junior Developer.</p>
            </div>
            <div className="project">
                <a href="https://b-anan.vercel.app" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://b-anan.vercel.app" target="_blank" rel="noreferrer"><h2>B-ANAN</h2></a>
                <p>Developed and deployed a Python-based revenue forecasting platform. Implements four time series prediction models and leverages AI to translate predictive data into real-time business insights.</p>
            </div>
            <div className="project">
                <a href="https://dal-notes.vercel.app" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dal-notes.vercel.app" target="_blank" rel="noreferrer"><h2>DalNotes</h2></a>
                <p>Solely developed an Open-source note repository enabling Dalhousie students to store and share academic resources. Features asynchronous note management with AWS S3 integration for seamless upload and download functionality.</p>
            </div>
            <div className="project">
                <a href="https://revive-three-mu.vercel.app" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://revive-three-mu.vercel.app" target="_blank" rel="noreferrer"><h2>Revive</h2></a>
                <p>Developed comprehensive website for my non-profit organization.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;