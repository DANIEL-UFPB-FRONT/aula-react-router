import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div>
            <h1>403 - Not Found</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>


    )    
}

export default NotFound