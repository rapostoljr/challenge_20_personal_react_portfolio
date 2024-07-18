import myHeadshot from "../assets/images/headshot.jpg";

export default function AboutPage() {
    return (
        <section className="about-me">
            <img src={myHeadshot} />
            <h1>About Me</h1>
            <p>
                My name is Romulo Apostol, and I have a bachelor's degree in International Security and Conflict Resolution.
                I have always had an interest in computers whether it is building them or learning how to code. 
                I have been taking a Computer Programming Course at UC Berkley Coding Bootcamp.
                I have been learning how to code and have created multiple projects by myself and projects with my classmates. I am a hard worker
                and I am always seeking opportunities to learn and grow. 
            </p>
        </section>
    );
}
