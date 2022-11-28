import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return(
        <>  
            <footer>
                <p>@InfoVita criado com React.js</p>
                <div>
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/">Usuário</Link>
                    <Link style={{textDecoration: 'none', color: 'black'}} to="/adm/login">Administrador</Link>
                </div>
            </footer>
        </>
    )
}

export default Footer;