import { Link } from "react-router-dom";
import axios from 'axios'
import React, { useState, useRef } from 'react'

import './edit.css';


function Create() {

    const url = "http://localhost:3000/"
    const [equip, setEquip] = useState([])
    const [upface, setUpface] = useState(false)
    const editaRef = useRef()
 
    async function editEquip(id){
        const {editaNameEquip} = editaRef.current
        const {editaDescriptionEquip} = editaRef.current
        const dados = {
            "id": '',
            "nome": editaNameEquip.value,
            "descrição": editaDescriptionEquip.value
        }
        await axios.put(url+`equipamentos/${id}`, dados)
        .then((response) => {
            setEquip(response.data)
            setUpface(!upface)
        })
    }

    return(
        <>  
            <div className="body">

                <main>
                    <div className="card-post">

                        <h1>Editar equipamento</h1>
                        <div className="line-post"></div>

                        <div className="card-body-post">
                        <form className="insert"  onSubmit={editEquip} ref={editaRef}>
                                        <div className="nomeEquip">
                                            <label>Nome do equipamento</label>
                                            <input type="text" placeholder="Digite o nome" id="editaNameEquip"/>
                                        </div>
                                        <div className="descriptionEquip">
                                            <label>Descrição do equipamento</label>
                                            <textarea type="text" placeholder="Digite a decrição" id="editaDescriptionEquip"/>
                                        </div>
                                        <div className="btn-edit">
                                            <button id="editarEquip" onClick={()=>editEquip(equip.id)}>Editar</button>
                                        </div>
                                        <div className="btn-voltar">
                                            <Link to='/equipamentos'>
                                                <button id="voltar">Voltar</button>
                                            </Link>
                                        </div>
                                    </form>
                            
                        </div>


                    </div>
                </main>                

                
            </div>
        </>
    )
}

export default Create;