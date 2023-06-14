import { Link } from "react-router-dom"
const NavbarTaller= () => {
    return(
        <>  
            {/*ABRE NAVBAR TALLER*/}
            <nav class="navbar container-fluid bg-primary">
                <div class="container-fluid">
                    <div class="nav-item h-auto col-2 position-relative text-center"><img class="img-thumbnail" style={{borderRadius: '100%', width: '100px'}} src="../images/download.png" alt=""/><div class="text-center"><h3>confeccionssas</h3></div></div>
                    <div class="nav-item  text-center" id="menu">
                        <ul>
                            <li class="rounded-2"><Link to="">Historial de peticiones</Link></li>
                            <li class="rounded-2">  <Link to="">Registrar maquinas</Link></li>
                            <li class="rounded-2"> <Link to="">Registro de calificaciones</Link></li>
                            <li class="rounded-2"><Link to="#">Opciones de usuario</Link> 
                                <ul>
                                <li class="rounded-2"><Link to="/InfoCuentaTaller">Informacion de la cuenta</Link></li>
                                <li class="rounded-2"><Link to="/">Cerrar sesión</Link></li>
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