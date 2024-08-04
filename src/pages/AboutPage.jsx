import myHeadshot from "../assets/images/headshot.jpg";

export default function AboutPage() {
    return (
        <section className="about-me">
            <img src={myHeadshot} />
            <h1>About Me</h1>
            <p>
                My name is Romulo Apostol Jr, and I hold a Bachelor's degree in International Security and Conflict Resolution. 
                My longstanding interest in technology, particularly in computer hardware and coding, has led me to pursue further 
                education in this field. I have graduated from the Full Stack Coding Bootcamp at UC Berkeley Extension, 
                where I have been actively developing my coding skills through individual and collaborative projects. As a 
                dedicated and diligent learner, I am continually seeking opportunities to enhance my knowledge and contribute 
                meaningfully to the field.
            </p>
        </section>
    );
}
