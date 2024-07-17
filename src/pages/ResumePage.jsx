import React from 'react';
import resume from '../assets/files/RESUME.pdf'


export default function ResumePage() {
    return (
        <section className="resume">
            <h2>Resume</h2>
            <a href={resume} download="Romulo_Apostol_Resume.pdf">Download</a>
            <iframe
                src={resume}
                width="100%"
                height="600px"
                title="Resume"
            />
        </section>
    )
}