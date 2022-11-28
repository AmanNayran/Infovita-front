import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import './nav.css';

function BarraNav() {
    const { signed } = useAuth();

    return(
        <nav>
            {signed ? (
                <Link style={{textDecoration: 'none', color: 'black'}} to="/home">Home</Link>
            ) : ('')}

            <Link style={{textDecoration: 'none', color: 'black'}} to="/">Ir para o Site</Link>
        </nav>
    )
}

export default BarraNav;