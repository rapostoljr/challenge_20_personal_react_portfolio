import React from 'react';
import resume from '../assets/files/RESUME.pdf'

const Resume = () => {
    <section className="resume">
        <h2>Resume</h2>
        <a href={resume} download="Romulo Apostol_Resume.pdf">Download</a>
        <embed src={resume} type="application/pdf" />
    </section>
}


export default Resume;