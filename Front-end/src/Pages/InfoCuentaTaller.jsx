import {Link} from 'react-router-dom'
import NavbarTaller from '../Components/NavrbarTaller'

const InfoCuentaTaller = () => {
    return(
        <>
            <NavbarTaller/>
                
             <div class="container" id="container-img-perfil">
               <div class="main-container">
                 <div class="hola">
                 <div class="preview-container">
                   <img src="" id="preview" alt="" />
                   <div class="btn-img input-container"> 
                     <input type="file" id="archivo" name="archivo"/>   
                   </div> 
                 </div>
                 </div>
               </div>
                
               <div class="perfil-usuario-body container row">
                 <div class="perfil-usuario col-lg-4">       
                     <ul class="lista-datos">
                       <div class="text-center m-2 p-2 container-fluid" id="editar">
                       <Link class="text-black">Editar Perfil</Link>
                       </div>
                         <li><i class="bi bi-browser-safari"></i> Direccion de usuario:</li>
                         <li><i class="bi bi-telephone-fill"></i> Telefono:</li>
                         <li><i class="bi bi-bank2"></i> Cargo:</li>
                         <li><i class="bi bi-calendar-event-fill"></i> Fecha de creacion:</li>
                         <Link to="#"><li><i class="bi bi-clock-history"></i> Historial</li> </Link>
                         <li>
                           <div class="dropdown">
                             <Link class="btn btn-primary dropdown-toggle text-right" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Tipos de maquinas
                             </Link>
                           
                             <ul class="dropdown-menu scroll">
                               <li><Link class="dropdown-item text-black" to="#">Mango</Link></li>
                               <li><Link class="dropdown-item text-black" to="#">Another action</Link></li>
                               <li><Link class="dropdown-item text-black" to="#">Something else here</Link></li>
                               <li><Link class="dropdown-item text-black" to="#">Another action</Link></li>
                               <li><Link class="dropdown-item text-black" to="#">Something else here</Link></li>
                               <li><Link class="dropdown-item text-black" to="#">Something else here</Link></li>
                               <li><Link class="dropdown-item text-black" to="#">Another action</Link></li>
                               <li><Link class="dropdown-item text-black" to="#">Something else here</Link></li>
                             </ul>
                           </div>
                         </li>
                     </ul>
                 </div>
                
                 <div class="perfil-usuario-footer col-lg-7">
                   <h3 class="titulo">Nombre Del Taller</h3>
                     <h4 class="info">Info del Taller</h4>
                     <p class="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                         tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                 </div>
               </div>
                
             <footer class="container-fluit bg-black text-center p-5 mt-4">
               &copy; 2023 Línea de Código
             </footer>
        </>
    )
}
export default InfoCuentaTaller