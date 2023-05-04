import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>React router dom example. Please click on links below or try:</p>
            <ul>
                <li>Route /contact/id (ex: /contact/1 ) to see dynamic routing</li>
                <li>Any other route diferent from list below (ex: /any) to see not found routing</li>
            </ul>

            <hr></hr>
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