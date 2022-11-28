import { Link } from "react-router-dom";
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './equipamentos.css';


function Equipamentos() {

    const url = "http://localhost:3000/"
    const [equip, setEquip] = useState([])
    const [upface, setUpface] = useState(false)
    const [dataEqp, setData] = useState("")

    async function loadEquip(){
        await axios.get(url+"equipamentos")
        .then((response) => {
            setEquip(response.data)
        })
    }

    async function deleteEquip(id){
        await axios.delete(url+`equipamentos/${id}`)
        .then((response) => {
            setEquip(response.data)
            setUpface(!upface)
        })
    }


    async function dataEquip(e) {
        const data = localStorage.setItem(dataEqp, equip.id)
        const val = Object.values(e.target)
        const dataEl = e.target.parentNode.childrens
        const childrens = e.target.querySelector('form')
        console.log(data);
        console.log(val);
        console.log(dataEl);
        console.log(childrens);

    }

    useEffect(() => {
        loadEquip()
    } ,[upface])

    return(
        <>  
            <div className="body">
                <div className="left">
                    <h2>Equipamentos</h2>
                    <Link to='/home'>
                        <button>Voltar</button>
                    </Link>
                </div>
                
                <section className="equipList">

                    <Link to='/equipamentos/create'>
                        <button id="adicionarEquip" type="submit">Adicionar</button>
                    </Link>
                    <hr />
                    
                    {equip.map((equip)=>{
                        return(
                            <form onClick={dataEquip}>
                                <ul key={equip.id} className="equip" value={equip.id} >
                                    {equip.nome}
                                </ul>
                            </form>
                        )
                    })}                
                    

                </section>

                <section className="equipData">
                    <h2 className="equipDado" id="equipNome">Nome do equipamento</h2>
                    <hr />
                    
                    <form id="li-dados">
                        <ul className="equipDado"  id="equipId">Identificador</ul>
                    </form>

                    <form id="form-edicao">
                        <input id="equipNome" placeholder="Nome do Equipamento"></input>
                        <button id="editarEquip">Salvar Alterações</button>
                        <button id="cancelarEdit">Cancelar</button>
                    </form>

                    <hr />

                    <p>Para editar o Equipamento selecionado...</p>
                    <Link to='/equipamentos/edit'>
                        {/* passar o id do equipamento para fazer a edição */}
                        <button id="editar">Editar</button>
                    </Link>

                    <hr />
                    <p>Caso queira remover o Equipamento selecionado...</p>
                    <button id="removerEquip" onClick={()=>deleteEquip(equip.id)}>Remover</button>
                </section>
            </div>
        </>
    )
}

export default Equipamentos;