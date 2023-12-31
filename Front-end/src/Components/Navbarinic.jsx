import { Link } from "react-router-dom"

const Navbarinic = () =>{
    return(
        <>
            {/*ABRE HEADER*/} 
            <header className="header container-fluid" style={{backgroundColor: "#3A0CA3"}}>
                    {/*ABRE NAV*/} 
                    <nav className="nav row">
                      
                    <div className="col-6 row"> 
                            {/* <div className="col-3 p-3 ">
                                <img src="./images/logo2.jpeg" alt="icon" style={{borderRadius: '100%', width: '65%', height: '8rem'}}/>
                            </div> */}
                            <div className="col-6  align-middle "style={{color: 'white'}}>
                                <h1 className="mt-5">softex</h1>
                            </div>
                    </div>
                        {/*ABRE NAV DE INICIO DE SESIÓN Y REDES SOCIALES*/} 
                        <div className="col-6" id="contenido-nav"> 
                            <button type="button" data-bs-toggle="modal" data-bs-target="#primermodal" style = {{borderRadius: '12px', padding: '5px', border: '1px solid #E7C6FF'}}>Inicio de Sesion</button>{/*BOTON PARA ABRIR VENTANA MODAL*/} 
                        </div>
                            {/*ABRE PRIMER MODAL*/} 
                              <div className="modal fade" id="primermodal" tabindex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div style={{width: '30%'}} className="modal-dialog modal-dialog-centered">
                                  <div className="modal-content" style={{border: 'Solid'}}>
                                    <div className="modal-header">
                                      <h1 className="modal-title fs-5"  id="exampleModalLabel">Iniciar sesión</h1>
                                      <button type="button" className="btn-close"   data-bs-dismiss="modal" aria-label="Close"></ button>
                                    </div>
                                    <div className="modal-body">
                                      <form action="#">
                                        <div className="input-box">
                                          <span className="icon"><i className="bi bi-envelope-fill"></i><ion-icon name="mail"></ion-icon>
                                            </span>
                                          <input type="email" required/>
                                          <label>Email</label>
                                        </div>
                                        <div className="input-box">
                                          <span className="icon"><ion-icon  name="lock-closed"><i className="bi  bi-key-fill"></i></ion-icon></span>
                                          <input type="password"  required/>
                                          <label>Contraseña</label>
                                        </div>
                                        <div className="remember-forgot">
                                          <label><input type="checkbox"/>Recuerdame</ label>
                                          < Link to ="#">Olvide la contraseña</ Link>
                                        </div>
                                        <Link to="/Paginiciotaller" className="text-black text-decoration-none d-grid col-6 mx-auto "><button type="submit" className="btn text-light" style={{backgroundColor: '#3A0CA3', width: '100%'}} data-bs-dismiss="modal" aria-label="Close">Entrar</button></Link>
                                        <div className="login-register">
                                        </div>
                                      </form>
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                      <p>¿No tienes una cuenta?</p>
                                      <div className="d-grid gap-2 d-md-block">
                                      <button className="btn btn-sm text-light" style={{backgroundColor: '#3A0CA3'}}  data-bs-target="#segundamodal"   data-bs-toggle="modal">Registarme</ button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            {/*CIERRA PRIMER MODAL*/} 

                            {/*ABRE SEGUNDA MODAL*/} 
                            <div className="modal fade " id="segundamodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div style={{width: '30%'}} className="modal-dialog modal-dialog-centered">
                                <div className="modal-content" style={{border: 'Solid'}}>
                                  <div className="modal-header">
                                    <h1 className="modal-title fs-5 " id="exampleModalLabel">Registrarse</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div className="modal-body">
                                  <form action="#">
                                    <div className="input-box">
                                      <div className="dropdown">
                                        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                          Crear Cuenta
                                        </button>
                                        <ul className="dropdown-menu text-center">
                                        <li className="dropdown-item"><button className="btn" data-bs-target="#modalRegistroTaller"   data-bs-toggle="modal">Nuevo Usuario Taller</button></li>
                                        <li className="dropdown-item"><button className="btn" data-bs-target="#modalRegistroEmpresa"   data-bs-toggle="modal">Nuevo Usuario Empresa</button></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </form>
                                  </div>
                                  <div className="modal-footer justify-content-center" style={{marginTop: '150px'}}>
                                    <p className="">¿Ya tienes una cuenta?</p>
                                    <div className="d-grid gap-2 d-md-block">
                                      <button className="btn btn-sm text-light"  data-bs-target="#primermodal"   data-bs-toggle="modal" style={{backgroundColor: '#3A0CA3'}}>Entrar</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*CIERRA SEGUNDA MODAL*/} 

                            {/*ABRE MODAL DE REGSITRO DE TALLER*/} 
                            <div className="modal fade" id="modalRegistroTaller" tabindex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div style={{width: '30%'}} className="modal-dialog modal-dialog-scrollable">
                                  <div className="modal-content" style={{border: 'Solid'}}>
                                    <div className="modal-header">
                                      <h1 className="modal-title fs-5"  id="exampleModalLabel">Iniciar sesión</h1>
                                      <button type="button" className="btn-close"   data-bs-dismiss="modal" aria-label="Close"></ button>
                                    </div>
                                    <div className="modal-body">
                                      <form action="#">
                                      <div className="mb-3">
                                            <label for="" className="form-label">Nombre del taller</label>
                                            <input type="text" className="form-control" id="Tipo_maquina" aria-describedby="emailHelp"placeholder="ingrese el nombre del taller" autoComplete="off"/>
                                          </div>

                                          <div className="mb-3">
                                            <label for="" className="form-label">RUT del Taller</label>
                                            <input type="number" className="form-control" id="rut_taller" autoComplete="off" placeholder="ingrese el RUT de su taller"/>
                                          </div>

                                          <div className="mb-3">
                                              <label for="" className="form-label">nombre del encargado</label>
                                              <input type="text" className="form-control" id="nom_enc" autoComplete="off" placeholder="ingrese el nombre completo del encargado"/>
                                            </div>

                                          <div className="mb-3">
                                              <label for="exampleInputPassword1" className="form-label">Numero de telefono</label>
                                              <input type="number" className="form-control" id="numero" autoComplete="off" placeholder="ingrese su numero telefonico"/>
                                          </div>

                                          <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Correo</label>
                                            <input type="gmail" className="form-control" id="correo" autoComplete="off" placeholder="ingrese su correo"/>
                                          </div>

                                          <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">contraseña</label>
                                            <input type="password" className="form-control" id="contraseña" autoComplete="off" placeholder="ingrese su contraseña"/>
                                          </div>

                                          <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Confirmar contraseña</label>
                                            <input type="password" className="form-control" id="contraseña" autoComplete="off" placeholder="ingrese su contraseña otra vez"/>
                                          </div>

                                          <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
                                            <label className="form-check-label" for="exampleCheck1">acepto terminos y condiciones</label>
                                          </div>
                                          <button type="submit" className="btn text-light" style={{backgroundColor: '#3A0CA3'}}>Registrate</button>
                                      </form>
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                      <div className="d-grid gap-2 d-md-block">
                                        <button className="btn btn-danger btn-sm"  data-bs-target="#segundamodal"   data-bs-toggle="modal">Volver</ button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            {/*CIERRA MODAL DE REGSITRO DE TALLER*/} 

                            {/*ABRE MODAL DE REGSITRO DE EMPRESA*/} 
                            <div className="modal fade" id="modalRegistroEmpresa" tabindex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div style={{width: '30%'}} className="modal-dialog modal-dialog-scrollable">
                                  <div className="modal-content" style={{border: 'Solid'}}>
                                    <div className="modal-header">
                                      <h1 className="modal-title fs-5"  id="exampleModalLabel">Iniciar sesión</h1>
                                      <button type="button" className="btn-close"   data-bs-dismiss="modal" aria-label="Close"></ button>
                                    </div>
                                    <div className="modal-body">
                                      <form action="#">
                                      <div className="mb-3">
                                            <label for="" className="form-label">Nombre del taller</label>
                                            <input type="text" className="form-control" id="Tipo_maquina" aria-describedby="emailHelp"placeholder="ingrese el nombre del taller" autoComplete="off"/>
                                          </div>

                                          <div className="mb-3">
                                            <label for="" className="form-label">RUT del Taller</label>
                                            <input type="number" className="form-control" id="rut_taller" autoComplete="off" placeholder="ingrese elRUT de su taller"/>
                                          </div>

                                          <div className="mb-3">
                                              <label for="" className="form-label">nombre del encargado</label>
                                              <input type="text" className="form-control" id="nom_enc" autoComplete="off" placeholder="ingrese el nombre completo del encargado"/>
                                            </div>

                                          <div className="mb-3">
                                              <label for="exampleInputPassword1" className="form-label">Numero de telefono</label>
                                              <input type="number" className="form-control" id="numero" autoComplete="off" placeholder="ingrese su numero telefonico"/>
                                          </div>

                                          <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Correo</label>
                                            <input type="gmail" className="form-control" id="correo" autoComplete="off" placeholder="ingrese su correo"/>
                                          </div>

                                          <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">contraseña</label>
                                            <input type="password" className="form-control" id="contraseña" autoComplete="off" placeholder="ingrese su contraseña"/>
                                          </div>

                                          <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Confirmar contraseña</label>
                                            <input type="password" className="form-control" id="contraseña" autoComplete="off" placeholder="ingrese su contraseña otra vez"/>
                                          </div>

                                          <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label text-light" for="exampleCheck1">acepto terminos y condiciones</label>
                                          </div>
                                          <button type="submit" className="btn d-grid col-6 mx-auto" style={{width: '100' , backgroundColor: '#3A0CA3'}}>Registrarse</button>
                                      </form>
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                      <div className="d-grid gap-2 d-md-block">
                                        <button className="btn btn-danger btn-sm"  data-bs-target="#segundamodal"   data-bs-toggle="modal">Volver</ button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            {/*CIERRA MODAL DE REGSITRO DE EMPRESA  */} 
                        {/*CIERRA NAVSESIONYREDES*/} 

                    </nav>
                    {/*CIERRA NAV*/} 
            </header>
            {/*CIERRA HEADER*/} 
        </>
    )
}
export default Navbarinic