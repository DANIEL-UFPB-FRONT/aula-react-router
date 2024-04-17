import { useState } from "react"
import { Link, useParams, useLocation, Navigate } from "react-router-dom"
import queryString from 'query-string'

function Contact() {

    const [needRedirect, setNeedRedirect] = useState(false)
    // Caso seja passado um ID de contato podemos acessar via lista de parâmetros com o hook useParams
    const { id } = useParams()
    const location =  useLocation();
    const queryParams = queryString.parse(location.search);


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
                {
                    location.search && 
                    
                    <>
                        <h3>Query Params List</h3>
                        <ul>
                            {Object.entries(queryParams).map((item) => <li>{ `${item[0]}: ${item[1]}`}</li>)}
                        </ul>
                    </>
                
                }
                
                <h3><Link to="/">Home</Link></h3>
                
            </div>
        )    
    }
}

export default Contact