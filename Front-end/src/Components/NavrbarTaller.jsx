import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { getUsers } from "../Function/funcion.js"
const NavbarTaller= () => {
    const [users, setUsers] = useState(null)
    useEffect(()=>{
    getUsers(setUsers)
    },[])
    return(
        <>  
            {/*ABRE NAVBAR TALLER*/}
            <nav className="navbar container-fluid" style={{backgroundColor: '#79155B', border: '2px solid gray'}}>
                <div className="container-fluid">
                    <div className="nav-item h-auto col-2 position-relative text-center"><img className="img-thumbnail" style={{borderRadius: '100%', width: '100px'}} src="../images/download.png" alt=""/>
                    {users != null ? (
                    users.map(user => (
                    <div className="text-center">
                        <h3 className="text-light">{user.company_name}</h3>
                    </div>
                    ))
                    ):
                    ('no hay usuarios')}
                    </div>
                    <div className="nav-item text-center" id="menu">
                        <ul className="d-inline">
                            <li><Link className="align-text-top" to="/HistorialPeticiones">Historial de peticiones</Link></li>
                            <li><Link className="align-text-top" to="/Maquinas">Registrar maquinas</Link></li>
                            <li><Link className="align-text-top" to="/RegistroCalificaciones">Registro de calificaciones</Link></li>
                            <li><Link className="align-text-top" to="#">Opciones de usuario</Link> 
                                <ul>
                                <li className=""><Link to="/InfoCuentaTaller">Informacion de la cuenta</Link></li>
                                <li className=""><Link to="/">Cerrar sesión</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
)
}
export default NavbarTaller
