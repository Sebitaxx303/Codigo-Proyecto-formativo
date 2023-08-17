import {Link} from 'react-router-dom'
import { getUsers } from "../Function/funcion.js"
import React, { useEffect, useState } from 'react'
const InfoCuentaTaller = () => {
  const [users, setUsers] = useState(null)
  useEffect(()=>{
  getUsers(setUsers)
  },[])

    return(
        <>
            {/**SE ABRE EL DIV CONTENEDOR DEL PERFIL DE USUARIO*/}
            <div className="container" id="container-img-perfil" style={{width: '60%'}}>     
              {/**SE ABRE SECCION AZUL DE PERFIL DE USUATIO*/}      
              <div className="container-fluid rounded-bottom-5 position-relative text-center p-3 border-top-0" style={{height:'50rem', backgroundColor: '#547AA5', border: '1px solid black'}}>
              <div className="d-grid col-1 mx-auto float-start">
              <Link className='btn btn-warning ' to={'/Paginiciotaller'}>Volver</Link>
              </div> 
              <div className="d-grid col-1 mx-auto float-end"> 
              <Link  className='btn btn-danger' to={'/'}>Salir </Link>
              </div> 

                  {/**SE ABRE SECCION DE FOTO DE PERFIL DE USUATIO*/}  
                  <div className="position-absolute start-50 translate-middle" style={{marginTop: '10rem'}}>
                    <div className="preview-container">
                      <div className="btn-img input-container"> 
                        <input type="file" id="archivo" name="archivo"/>   
                      </div> 
                    </div>
                  </div>
                  {/**SE CIERRA SECCION DE FOTO DE PERFIL DE USUATIO*/}  
                  {/**SE ABRE SECCION DE INFORMACION DEL TALLER*/} 
                  <div className='container rounded ' style={{ marginTop:'25rem' ,width: '50%', border: '2px solid black',    backgroundColor: 'rgba(194, 194, 189, 0.671)', height: 'auto'}}>    
                    {/**SE ABRE SECCION DE NOMBRE DEL TALLER*/} 
                    {users != null ? (users.map(user => (
                      <div>
                   <div className=" text-center">
                     <h3 className="">{user.company_name}</h3>
                   </div>
                   <div className="container-fluid">
                      <div className="d-grid col-6 mx-auto">
                        <button className='btn btn-primary'>Editar perfil
                        </button>    
                      </div>   
                      <ul className='container-fluid'>
                          <li className="row align-items-center">
                              <div className='col-6 text-end'> Direcciòn:</div> 
                              <div className='col-6 text-start'>{user.u_address}</div>
                          </li>
                          <li className="row align-items-center">
                            <div className='col-6 text-end'>Telefono:</div> 
                            <div className='col-6 text-start'>{user.phone_number}</div>
                          </li>
                          <li className="row align-items-center">
                            <div className='col-6 text-end'>A cargo:</div> 
                            <div className='col-6 text-start'>sebitas</div> 
                          </li>
                          <li className="row align-items-center">
                            <div className='col-6 text-end'>tipo de usuario:</div> 
                            <div className='col-6 text-start'>{user.user_type}</div> 
                          </li>
                          <li className="row align-items-center">
                            <div className='col-6 text-end'>Fecha de creacion:</div> 
                            <div className='col-6 text-start'>16/08/2023</div> 
                          </li>
                           <li>
                             <div className="dropdown d-grid col-6 mx-auto" style={{width:'50%'}}>
                               <Link className="btn btn-primary dropdown-toggle text-right" to="#" role="button"  data-bs-toggle="dropdown" aria-expanded="false">
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
                   </div>
                    ))
                     ):
                     ('no hay maquinas')}
                  </div>
                   {/**SE CIERRA SECCION DE INFORMACION DEL TALLER*/} 
              </div>
              {/**SE CIERRA SECCION AZUL DE PERFIL DE USUATIO**/}  
            </div>
            {/**SE CIERRA EL DIV CONTENEDOR DEL PERFIL DE USUARIO*/}      

            {/**SE ABRE EL FOOTER*/}         
            {/* <footer className="container-fluid bg-black text-center p-5 mt-4">
              &copy; 2023 Línea de Código
            </footer> */}
            {/**SE CIERRA EL FOOTER*/}         
        </>
    )
}
export default InfoCuentaTaller