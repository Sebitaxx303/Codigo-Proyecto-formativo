import { Link } from "react-router-dom"
const Navbarinic = () =>{
    return(
        <>
            {/*ABRE HEADER*/} 
            <header className="header bg-primary container-fluid">
                    {/*ABRE NAV*/} 
                    <nav className="nav row">

                        {/*ABRE NAV DE INICIO DE SESIÓN Y REDES SOCIALES*/} 
                        <div className="col-lg-12" id="contenido-nav"> 
                        
                            {/*ABRE REDES*/} 
                            <div>
                          < Link to ="#"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                              className="bi bi-facebook" viewBox="0 0 16 16">
                              <path
                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg></ Link>
                          < Link to ="#"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                              className="bi bi-twitter" viewBox="0 0 16 16">
                              <path
                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg></ Link>
                          < Link to ="#"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                              className="bi bi-instagram" viewBox="0 0 16 16">
                              <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg></ Link>
                            </div>
                            {/*CIERRA REDES*/} 

                            <button type="button" data-bs-toggle="modal" data-bs-target="#primermodal" style = {{borderRadius: '12px', padding: '5px'}}>Inicio de Sesion</button>{/*BOTON PARA ABRIR VENTANA MODAL*/} 

                            {/*ABRE PRIMER MODAL*/} 
                              <div className="modal fade" id="primermodal" tabindex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                  <div className="modal-content" style={{ background: 'transparent', backdropFilter: 'blur(50px)', border: 'Solid'}}>
                                    <div className="modal-header">
                                      <h1 className="modal-title fs-5 text-light"  id="exampleModalLabel">Iniciar sesión</h1>
                                      <button type="button" className="btn-close"   data-bs-dismiss="modal" aria-label="Close"></ button>
                                    </div>
                                    <div className="modal-body">
                                      <form action="#">
                                        <div className="input-box border-light">
                                          <span className="icon"><i className="bi bi-envelope-fill border-light"></i><ion-icon name="mail"></ion-icon>
                                            </span>
                                          <input type="email" className="text-light" required/>
                                          <label className="text-light">Email</label>
                                        </div>
                                        <div className="input-box border-light">
                                          <span className="icon"><ion-icon  name="lock-closed"><i className="bi  bi-key-fill"></i></ion-icon></span>
                                          <input type="password" className="text-light" required/>
                                          <label className="text-light">Contraseña</label>
                                        </div>
                                        <div className="remember-forgot text-light">
                                          <label><input type="checkbox"/>Recuerdame</ label>
                                          < Link to ="#">Olvide la contraseña</ Link>
                                        </div>
                                        <Link to="/Paginiciotaller" className="text-black text-decoration-none "><button type="submit" className="btn  btn-primary" data-bs-dismiss="modal" aria-label="Close">Entrar</button></Link>
                                        <div className="login-register">
                                        </div>
                                      </form>
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                      <p className=" text-light">¿No tienes una cuenta?</p>
                                      <div className="d-grid gap-2 d-md-block">
                                      <button className="btn btn-primary btn-sm"  data-bs-target="#segundamodal"   data-bs-toggle="modal">Registarme</ button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            {/*CIERRA PRIMER MODAL*/} 

                            {/*ABRE SEGUNDA MODAL*/} 
                            <div className="modal fade " id="segundamodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content" style={{ background: 'transparent', backdropFilter: 'blur(50PX)', border: 'Solid'}}>
                                  <div className="modal-header">
                                    <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">Registrarse</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div className="modal-body">
                                  <form action="#">
                                    <div className="input-box border-light">
                                      <div class="dropdown">
                                        <button className="btn text-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                    <p className="text-light">¿Ya tienes una cuenta?</p>
                                    <div className="d-grid gap-2 d-md-block">
                                      <button className="btn btn-primary btn-sm"  data-bs-target="#primermodal"   data-bs-toggle="modal">Entrar</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/*CIERRA SEGUNDA MODAL*/} 

                            {/*ABRE MODAL DE REGSITRO DE TALLER*/} 
                            <div className="modal fade" id="modalRegistroTaller" tabindex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-scrollable">
                                  <div className="modal-content" style={{ background: 'transparent', backdropFilter: 'blur(60px)', border: 'Solid'}}>
                                    <div className="modal-header">
                                      <h1 className="modal-title fs-5 text-light"  id="exampleModalLabel">Iniciar sesión</h1>
                                      <button type="button" className="btn-close"   data-bs-dismiss="modal" aria-label="Close"></ button>
                                    </div>
                                    <div className="modal-body">
                                      <form action="#">
                                      <div class="mb-3">
                                            <label for="" class="form-label text-light">Nombre del taller</label>
                                            <input type="text" class="form-control" id="Tipo_maquina" aria-describedby="emailHelp"placeholder="ingrese el nombre del taller" autocomplete="off"/>
                                          </div>

                                          <div class="mb-3">
                                            <label for="" class="form-label text-light">RUT del Taller</label>
                                            <input type="number" class="form-control" id="rut_taller" autocomplete="off" placeholder="ingrese el RUT de su taller"/>
                                          </div>

                                          <div class="mb-3">
                                              <label for="" class="form-label text-light">nombre del encargado</label>
                                              <input type="text" class="form-control" id="nom_enc" autocomplete="off" placeholder="ingrese el nombre completo del encargado"/>
                                            </div>

                                          <div class="mb-3">
                                              <label for="exampleInputPassword1" class="form-label text-light">Numero de telefono</label>
                                              <input type="number" class="form-control" id="numero" autocomplete="off" placeholder="ingrese su numero telefonico"/>
                                          </div>

                                          <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label text-light">Correo</label>
                                            <input type="gmail" class="form-control" id="correo" autocomplete="off" placeholder="ingrese su correo"/>
                                          </div>

                                          <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label text-light">contraseña</label>
                                            <input type="password" class="form-control" id="contraseña" autocomplete="off" placeholder="ingrese su contraseña"/>
                                          </div>

                                          <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label text-light">Confirmar contraseña</label>
                                            <input type="password" class="form-control" id="contraseña" autocomplete="off" placeholder="ingrese su contraseña otra vez"/>
                                          </div>

                                          <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input " id="exampleCheck1"/>
                                            <label class="form-check-label text-light" for="exampleCheck1">acepto terminos y condiciones</label>
                                          </div>
                                          <button type="submit" class="btn btn-primary">Registrate</button>
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
                                <div className="modal-dialog modal-dialog-scrollable">
                                  <div className="modal-content" style={{ background: 'transparent', backdropFilter: 'blur(60px)', border: 'Solid'}}>
                                    <div className="modal-header">
                                      <h1 className="modal-title fs-5 text-light"  id="exampleModalLabel">Iniciar sesión</h1>
                                      <button type="button" className="btn-close"   data-bs-dismiss="modal" aria-label="Close"></ button>
                                    </div>
                                    <div className="modal-body">
                                      <form action="#">
                                      <div class="mb-3">
                                            <label for="" class="form-label text-light">Nombre del taller</label>
                                            <input type="text" class="form-control" id="Tipo_maquina" aria-describedby="emailHelp"placeholder="ingrese el nombre del taller" autocomplete="off"/>
                                          </div>

                                          <div class="mb-3">
                                            <label for="" class="form-label text-light">RUT del Taller</label>
                                            <input type="number" class="form-control" id="rut_taller" autocomplete="off" placeholder="ingrese elRUT de su taller"/>
                                          </div>

                                          <div class="mb-3">
                                              <label for="" class="form-label text-light">nombre del encargado</label>
                                              <input type="text" class="form-control" id="nom_enc" autocomplete="off" placeholder="ingrese el nombre completo del encargado"/>
                                            </div>

                                          <div class="mb-3">
                                              <label for="exampleInputPassword1" class="form-label text-light">Numero de telefono</label>
                                              <input type="number" class="form-control" id="numero" autocomplete="off" placeholder="ingrese su numero telefonico"/>
                                          </div>

                                          <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label text-light">Correo</label>
                                            <input type="gmail" class="form-control" id="correo" autocomplete="off" placeholder="ingrese su correo"/>
                                          </div>

                                          <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label text-light">contraseña</label>
                                            <input type="password" class="form-control" id="contraseña" autocomplete="off" placeholder="ingrese su contraseña"/>
                                          </div>

                                          <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label text-light">Confirmar contraseña</label>
                                            <input type="password" class="form-control" id="contraseña" autocomplete="off" placeholder="ingrese su contraseña otra vez"/>
                                          </div>

                                          <div class="mb-3 form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                            <label class="form-check-label text-light" for="exampleCheck1">acepto terminos y condiciones</label>
                                          </div>
                                          <button type="submit" class="btn btn-primary">Registrarse</button>
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

                        </div>
                        {/*CIERRA NAVSESIONYREDES*/} 

                    </nav>
                    {/*CIERRA NAV*/} 
            </header>
            {/*CIERRA HEADER*/} 
        </>
    )
}
export default Navbarinic