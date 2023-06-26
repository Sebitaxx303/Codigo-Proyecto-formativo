import React, { useEffect, useState } from 'react'
import NavbarMaquinas from '../Components/NavbarMaquinas'
import { getUsers } from "../Function/funcion"
const Maquinas = () => {
    const [users, setUsers] = useState(null)

    useEffect(()=>{
    getUsers(setUsers)
    },[])
  return (
    <>
        <NavbarMaquinas/>
        <div class="d-flex justify-content-center align-items-center max-height-100%">
            <div class="rounded-2 text-center" style={{marginTop:'4rem', backgroundColor: '#547AA5',padding: '100px', width: '80%'}}>
                  {users != null ? (
                    users.map(user => (
                                  <table className="table mt-4 text-center">
                                  <thead>
                                    <tr>
                                      <th scope="col">id</th>
                                      <th scope="col">nombre del taller</th>
                                      <th scope="col">rut</th>
                                      <th scope="col">direccion</th>
                                      <th scope="col">correo electronico</th>
                                      <th scope="col">numero telefonico</th>
                                      <th scope="col">tipo de usuario</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">{user.id}</th>
                                      <td>{user.name_entity}</td>
                                      <td>{user.rut}</td>
                                      <td>{user.u_address}</td>
                                      <td>{user.email}</td>
                                      <td>{user.Phone_number}</td>
                                      <td>{user.user_type}</td>
                                    </tr>
                                  </tbody>
                              </table>
                    ))
                  ):
                  ('no hay maquinas')}
            </div>

        </div>
    </>
  )
}

export default Maquinas