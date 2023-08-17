import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMaquinas = () => {
  return (
    <>
        <nav class="navbar row navbar-expand-lg" style={{backgroundColor: '#79155B'}}>
          <div className='contaner-fluid'>
                <div class="nav-item h-auto  aling-content-center col-5 text-center float-start">
                    <img class="img-thumbnail" style={{borderRadius: '10%', width: '100px'}}   src="../images/download.png" alt=""/>
                    <div class="text-center"><h3>Nombre del taller</h3>
                    </div>
                </div>
                <div class="nav-item col-6 offset-1 text-center float-end position-relative" style={{marginTop:'3rem'}} id="menu">
                    <ul className='list'>
                    <Link to="/Paginiciotaller"><button className='list-item  float-start'  type="button" ><li className='list-item ' style={{color: 'black'}}>Volver</li></button></Link>
                    <button className='list-item'  type="button" data-bs-toggle="modal" data-bs-target="#registroMaquinas"><li className='list-item float-end'>Registrar nueva maquina</li></button>{/*BOTON QUE ABRE LA MODAL DE REGISTRO DE MAQUINAS */}
                    </ul>
                </div>
                             {/*ABRE PRIMER MODAL*/} 
                              <div className="modal fade" id="registroMaquinas" tabindex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                  <div className="modal-content" style={{border: 'Solid', borderColor: '#4F5165'}}>
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
                                        <Link to="/Paginiciotaller" className="text-black text-decoration-none "><button type="submit" className="btn" style={{backgroundColor: '#547AA5'}} data-bs-dismiss="modal" aria-label="Close">Entrar</button></Link>
                                        <div className="login-register">
                                        </div>
                                      </form>
                                    </div>
                                    <div className="modal-footer justify-content-center">
                                      <p>¿No tienes una cuenta?</p>
                                      <div className="d-grid gap-2 d-md-block">
                                      <button className="btn btn-sm" style={{backgroundColor: '#547AA5'}}  data-bs-target="#segundamodal"   data-bs-toggle="modal">Registarme</ button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            {/*CIERRA PRIMER MODAL*/}
                            </div>
        </nav>
    </>
  )
}

export default NavbarMaquinas
