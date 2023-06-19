import React, { useEffect } from 'react'
import NavbarMaquinas from '../Components/NavbarMaquinas'
import { ObtenerMaquinas } from "../Function/funcion"
const Maquinas = () => {
    useEffect(()=>{
    ObtenerMaquinas()
    },[])
  return (
    <>
        <NavbarMaquinas/>
        <div class="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <div class="rounded-2" style={{backgroundColor: '#858585', padding: '1rem'}}>
                <h1>aquí podrás ver las maquinas que registres</h1>
            </div>
        </div>
    </>
  )
}

export default Maquinas