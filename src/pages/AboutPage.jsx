import myHeadshot from "../assets/images/headshot.jpg";

export default function AboutPage() {
    return (
        <section className="about-me">
            <img src={myHeadshot} />
            <h1>About Me</h1>
            <p>
                My name is Romulo Apostol, and I am a software engineer with a passion for problem-solving and creativity. 
                I have been working remotely for the past 5 years, focusing primarily on web development and design.
            </p>
        </section>
    );
}