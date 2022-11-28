import { Link } from "react-router-dom";
import axios from 'axios'
import React, { useState, useRef } from 'react'

import './create.css';


function Create() {

    const url = "http://localhost:3000/"
    const [upface, setUpface] = useState(false)
    const insertRef = useRef()
 
    async function insertEquip(e){
        e.preventDefault()
        const {inputNameEquip} = insertRef.current
        const {inputDescriptionEquip} = insertRef.current
        const dados = {
            "id": '',
            "nome": inputNameEquip.value,
            "descrição": inputDescriptionEquip.value
        }
        
        await axios.post(url+"equipamentos", dados)
        setUpface(!upface)
    }

    return(
        <>  
            <div className="body">

                <main>
                    <div className="card-post">

                        <h1>Adicionar equipamento</h1>
                        <div className="line-post"></div>

                        <div className="card-body-post">
                            <form className="insert"  onSubmit={insertEquip} ref={insertRef}>
                                <div className="nomeEquip">
                                    <label>Nome do equipamento</label>
                                    <input type="text" placeholder="Digite o nome" id="inputNameEquip"/>
                                </div>
                                <div className="descriptionEquip">
                                    <label>Descrição do equipamento</label>
                                    <textarea type="text" placeholder="Digite a decrição" id="inputDescriptionEquip"/>
                                </div>
                                <div className="btn-create">
                                    <button id="adicionarEquip" type="submit">Adicionar</button>
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