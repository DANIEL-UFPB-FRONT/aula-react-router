import { Link, useParams } from "react-router-dom"

function Contact() {

    // Caso seja passado um ID de contato podemos acessar via lista de parâmetros com o hook useParams
    const { id } = useParams()
    return (
        <div>
            <h1>Contact Page</h1>
            {id && 
                <h3>Contact info to user id #{id}</h3>
            }
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>
    )    
}

export default Contact