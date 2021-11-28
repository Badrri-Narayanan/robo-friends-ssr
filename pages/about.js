import Link from "next/link";

const About = () => (
    <div className="tc">
        <h1>About</h1>
        <p>This is a Server-Side Rendered React Application.</p>
        <Link href="/"><button>Home</button></Link>
    </div>
);

export default About;