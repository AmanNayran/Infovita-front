import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import './home.css';

//Icons
import unidades from './icons/unidades.png';
import equipamentos from './icons/equipamentos.png';
import comentarios from './icons/comentarios.png';
import reports from './icons/reports.png';

function Home() {
    const { user } = useAuth();
    const { signout } = useAuth();

    const linkStyle = {
        display: 'grid',
        textDecoration: 'none',
        color: 'black',
        textAlign: 'center'
    };

    return(
        <>  
            <div className="home">
                <div className="perfil">
                    <h2>Ambiente Administrativo</h2>
                    <p>User Email: {user.email}</p>
                    <button onClick={signout}>Sair</button>
                </div>

                <div className="options">
                    <div>
                        <Link style={linkStyle} to="/home">
                            <img src={unidades} alt="Unidades" />
                            Unidades
                        </Link>
                    </div>

                    <div>
                        <Link style={linkStyle} to="/equipamentos">
                            <img src={equipamentos} alt="Equipamentos" />
                            Equipamentos
                        </Link>
                    </div>

                    <div>
                        <Link style={linkStyle} to="/home">
                            <img src={comentarios} alt="Comentários" />
                            Comentários
                        </Link>
                    </div>

                    <div>
                        <Link style={linkStyle} to="/home">
                            <img src={reports} alt="Reports" />
                            Feedbacks
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;