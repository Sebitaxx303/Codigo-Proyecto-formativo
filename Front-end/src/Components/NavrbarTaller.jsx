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
            <nav className="navbar navbar-expand-lg container-fluid z-2 d-flex" style={{backgroundColor: '#79155B', border: '2px solid gray'}}>
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
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse position-relativa " style={{justifyContent: 'end'}}   id="navbarNavDropdown">
                            <div id="menu" style={{width:'100%', display: 'flex'}} >
                                <ul className="navbar-nav d-flex" style={{justifyContent: 'center', alignItems:'center'}}  id="menu">
                                    <li className="nav-item ">
                                        <Link className="text-wrap text-center" to="/HistorialPeticiones">Historial de  peticiones</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="text-wrap text-center" to="/Maquinas">Registrar maquinas</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="text-wrap text-center" to="/RegistroCalificaciones">Registro de    calificaciones</Link>
                                    </li>
                                    <li className="nav-item"><Link className="text-colapse text-center" to="#">Opciones de  usuario</Link> 
                                        <ul className="dropdown-menu">
                                        <li className="dropdown-item"><Link className="text-wrap text-center" to="InfoCuentaTaller">Informacion de la cuenta</Link></li>
                                        <li className="dropdown-item"><Link className="text-wrap text-center" to="/">Cerrar     sesión</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </nav>
        </>
)
}
export default NavbarTaller
