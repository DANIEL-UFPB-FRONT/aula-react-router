import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    )    
}

export default Home