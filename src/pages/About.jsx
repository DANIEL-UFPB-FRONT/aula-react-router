import { Link } from "react-router-dom"

function About() {
    return (
        <div>
            <h1>About Page</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>
    )    
}

export default About