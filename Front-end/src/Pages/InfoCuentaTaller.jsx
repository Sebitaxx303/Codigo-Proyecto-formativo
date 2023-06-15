import {Link} from 'react-router-dom'
import NavbarTaller from '../Components/NavrbarTaller'

const InfoCuentaTaller = () => {
    return(
        <>
            <NavbarTaller/>
                
             <div className="container" id="container-img-perfil">
               <div className="main-container">
                 <div className="hola">
                 <div className="preview-container">
                   <img src="" id="preview" alt="" />
                   <div className="btn-img input-container"> 
                     <input type="file" id="archivo" name="archivo"/>   
                   </div> 
                 </div>
                 </div>
               </div>
                
               <div className="perfil-usuario-body container row">
                 <div className="perfil-usuario col-lg-4">       
                     <ul className="lista-datos">
                       <div className="text-center m-2 p-2 container-fluid" id="editar">
                       <Link className="text-black">Editar Perfil</Link>
                       </div>
                         <li><i className="bi bi-browser-safari"></i> Direccion de usuario:</li>
                         <li><i className="bi bi-telephone-fill"></i> Telefono:</li>
                         <li><i className="bi bi-bank2"></i> Cargo:</li>
                         <li><i className="bi bi-calendar-event-fill"></i> Fecha de creacion:</li>
                         <Link to="#"><li><i className="bi bi-clock-history"></i> Historial</li> </Link>
                         <li>
                           <div className="dropdown">
                             <Link className="btn btn-primary dropdown-toggle text-right" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Tipos de maquinas
                             </Link>
                           
                             <ul className="dropdown-menu scroll">
                               <li><Link className="dropdown-item text-black" to="#">Mango</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Another action</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Something else here</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Another action</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Something else here</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Something else here</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Another action</Link></li>
                               <li><Link className="dropdown-item text-black" to="#">Something else here</Link></li>
                             </ul>
                           </div>
                         </li>
                     </ul>
                 </div>
                
                 <div className="perfil-usuario-footer col-lg-7">
                   <h3 className="titulo">Nombre Del Taller</h3>
                     <h4 className="info">Info del Taller</h4>
                     <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                         tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                 </div>
               </div>
                
             <footer className="container-fluit bg-black text-center p-5 mt-4">
               &copy; 2023 Línea de Código
             </footer>
        </>
    )
}
export default InfoCuentaTaller