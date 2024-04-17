import { useState } from "react"
import { Link, useParams, Navigate } from "react-router-dom"

function Contact() {

    const [needRedirect, setNeedRedirect] = useState(false)
    // Caso seja passado um ID de contato podemos acessar via lista de parâmetros com o hook useParams
    const { id } = useParams()
        if(id === 'protected'){ 
        setTimeout(() => setNeedRedirect(true), 3000)
        return (
            <>
                <h1>Protected area! Redirecting...</h1> 
                 {needRedirect && <Navigate replace to="/" />}
            </>
        )
    }
    else{
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
}

export default Contact